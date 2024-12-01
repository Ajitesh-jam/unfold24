import { AptosClient } from "aptos";

const client = new AptosClient("https://fullnode.devnet.aptoslabs.com/v1");


export async function getMedicalRecord(accountAddress: string, patientAddress: string) {
    try {
      // Prepare the payload for the view function
      const payload = {
        function: "0xd583f7047e96f1739b42cc1513044d56c545ae6dd69c08f418993caf6c1aacd5::MedicalRecordsv2::get_medical_record",
        type_arguments: [],
        arguments: [accountAddress, patientAddress],
      };
  
      // Call the view function
      const response = await client.view(payload);
      console.log("Medical Records:", response);
  
      // Parse the result as needed
      const medicalRecords = response as Array<Array<number>>; // Assuming the result is a vector<vector<u8>>
      const records = medicalRecords.map(record => new TextDecoder().decode(Uint8Array.from(record)));
      console.log("Decoded Records:", records);
  
      return records;
    } catch (error) {
      console.error("Error fetching medical records:", error);
    }
  }
  
  