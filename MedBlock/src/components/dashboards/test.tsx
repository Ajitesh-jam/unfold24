import React, { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Layout from "antd/lib/layout";
import { Row, Col, Button, Spin, Input, message } from "antd";
import { getMedicalRecord, updateRecord } from "../../utils/aptosFunctions"; // Adjust the path to your functions file

const moduleAddress = "0xd583f7047e96f1739b42cc1513044d56c545ae6dd69c08f418993caf6c1aacd5"; // Update with your module address

const isPetraInstalled = window.aptos; // to conect the


const MedicalRecordManager: React.FC = (): React.ReactElement => {
  const { account, connected, connect, disconnect, signAndSubmitTransaction } = useWallet();
  const [patientAddress, setPatientAddress] = useState<string>("");
  const [newRecord, setNewRecord] = useState<string>("");
  const [records, setRecords] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch Medical Records
  const fetchMedicalRecords = async () => {
    if (!connected || !account?.address) {
      message.error("Please connect your wallet.");
      return;
    }

    setLoading(true);
    try {
      const fetchedRecords = await getMedicalRecord(account.address, patientAddress);
      setRecords(fetchedRecords || []);
    } catch (error) {
      console.error("Error fetching medical records:", error);
      message.error("Failed to fetch medical records.");
    } finally {
      setLoading(false);
    }
  };

  // Add Medical Record
  const addMedicalRecord = async () => {
    if (!connected || !account) {
      message.error("Please connect your wallet.");
      return;
    }

    if (!patientAddress || !newRecord) {
      message.error("Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      const result = await updateRecord(moduleAddress, patientAddress, newRecord, signAndSubmitTransaction);
      console.log(result); // Log transaction result
      message.success("Medical record added successfully.");
    } catch (error) {
      console.error("Error adding medical record:", error);
      message.error("Failed to add medical record.");
    } finally {
      setLoading(false);
    }
  };
  const connect =()=>{
    console.log("Connected")

  }

  return (
    <Layout style={{ padding: "2rem" }}>
      <Spin spinning={loading}>
        <Row gutter={[0, 16]}>
          <Col span={12} offset={6}>
            {/* Connect Wallet Section */}
            {!connected ? (
              <Button
                onClick={() => connect}
                block
                type="primary"
                style={{ marginBottom: "1rem", backgroundColor: "#3f67ff" }}
              >
                Connect Petra Wallet
              </Button>
            ) : (
              <div style={{ marginBottom: "1rem" }}>
                <p>
                  Connected to: <strong>{account?.address}</strong>
                </p>
                <Button onClick={disconnect} block type="default">
                  Disconnect Wallet
                </Button>
              </div>
            )}

            <Input
              placeholder="Enter Patient Address"
              value={patientAddress}
              onChange={(e) => setPatientAddress(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <Input
              placeholder="Enter New Medical Record"
              value={newRecord}
              onChange={(e) => setNewRecord(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <Button
              onClick={addMedicalRecord}
              block
              type="primary"
              style={{ height: "40px", backgroundColor: "#3f67ff" }}
              disabled={!connected}
            >
              Add Medical Record
            </Button>
            <Button
              onClick={fetchMedicalRecords}
              block
              type="default"
              style={{ height: "40px", marginTop: "1rem" }}
              disabled={!connected}
            >
              Fetch Medical Records
            </Button>
          </Col>
        </Row>
        <Row gutter={[0, 16]} style={{ marginTop: "2rem" }}>
          <Col span={12} offset={6}>
            <h3>Medical Records:</h3>
            {records.length > 0 ? (
              <ul>
                {records.map((record, index) => (
                  <li key={index}>{record}</li>
                ))}
              </ul>
            ) : (
              <p>No records found.</p>
            )}
          </Col>
        </Row>
      </Spin>
    </Layout>
  );
};

export default MedicalRecordManager;
