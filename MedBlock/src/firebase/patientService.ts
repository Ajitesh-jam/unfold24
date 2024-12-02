import express, { Request, Response } from 'express';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from './config';
import { PinataSDK } from 'pinata';
import { Patient } from '../components/types';

const app = express();
const PORT = 3000;

// Pinata Configuration
const JWT = "your_jwt_token_here"; // Replace with your JWT
const PINATA_GATEWAY = "olive-defiant-ox-42.mypinata.cloud";
const pinata = new PinataSDK({
  pinataJwt: JWT,
  pinataGateway: PINATA_GATEWAY,
});

// Middleware to parse JSON
app.use(express.json());

// Service Methods
const patientService = {
  getAllPatients: async (): Promise<Patient[]> => {
    const querySnapshot = await getDocs(collection(db, "patient"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Patient));
  },

  getPatientByAadhar: async (aadhar: string): Promise<Patient | null> => {
    const docRef = doc(db, "patient", aadhar);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } as Patient : null;
  },

  queryPatients: async (field: string, value: string): Promise<Patient[]> => {
    const q = query(collection(db, "patient"), where(field, "==", value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Patient));
  },
};

// API Endpoints

// Get all patients
app.get('/patients', async (req: Request, res: Response) => {
  try {
    const patients = await patientService.getAllPatients();
    res.json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).json({ message: "Error fetching patients" });
  }
});

// Get patient by Aadhar
app.get('/patients/:aadhar', async (req: Request, res: Response) => {
  try {
    const patient = await patientService.getPatientByAadhar(req.params.aadhar);
    res.json(patient);
  } catch (error) {
    console.error("Error fetching patient by Aadhar:", error);
    res.status(500).json({ message: "Error fetching patient" });
  }
});

// Query patients by field and value
app.get('/patients/query', async (req: Request, res: Response) => {
  const { field, value } = req.query as { field: string; value: string };
  try {
    const patients = await patientService.queryPatients(field, value);
    res.json(patients);
  } catch (error) {
    console.error("Error querying patients:", error);
    res.status(500).json({ message: "Error querying patients" });
  }
});

// Upload file to Pinata
app.post('/pinata/upload', async (req: Request, res: Response) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const file = req.files.file as unknown as File;
    const cid = await pinata.upload.file(file);
    res.json({ cid });
  } catch (error) {
    console.error("Error uploading file to Pinata:", error);
    res.status(500).json({ message: "Error uploading file" });
  }
});

// Retrieve file URL by CID
app.get('/pinata/retrieveUrl/:cid', async (req: Request, res: Response) => {
  try {
    const cid = req.params.cid;
    const signedUrl = await pinata.gateways.createSignedURL({ cid, expires: 60 });
    res.json({ url: signedUrl });
  } catch (error) {
    console.error("Error retrieving file URL:", error);
    res.status(500).json({ message: "Error retrieving file URL" });
  }
});

// Retrieve file URL with expiration by CID
app.get('/pinata/retrieveUrlWithExpiration/:cid', async (req: Request, res: Response) => {
  try {
    const cid = req.params.cid;
    const signedUrl = await pinata.gateways.createSignedURL({ cid, expires: 50 });
    res.json({ url: signedUrl });
  } catch (error) {
    console.error("Error retrieving file URL with expiration:", error);
    res.status(500).json({ message: "Error retrieving file URL with expiration" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
