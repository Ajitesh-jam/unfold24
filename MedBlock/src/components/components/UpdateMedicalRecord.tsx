// import { AptosClient, AptosAccount, Types } from "aptos";

// const client = new AptosClient("https://fullnode.devnet.aptoslabs.com/v1");

// type UpdateMedicalRecordProps = {

//   moduleAddress: string; // Address of the deployed module
//   patientAddress: string; // Patient's address
//   newRecord: string; // New medical record to be added
// };

// export async function updateMedicalRecord({

//   moduleAddress,
//   patientAddress,
//   newRecord,
// }: UpdateMedicalRecordProps): Promise<string> {
//   try {


//     // Entry function payload
//     const payload: Types.TransactionPayloadEntryFunctionPayload = {
//       type: "entry_function_payload",
//       function: `${moduleAddress}::MedicalRecordsv2::update_medical_record`,
//       type_arguments: [],
//       arguments: [
//         patientAddress, // Patient's address
//         newRecord, // New medical record (String)
//       ],
//     };

//     // Submit the transaction
//     const transaction = await client.generateTransaction(
//       senderAccount.address(),
//       payload
//     );
//     const signedTransaction = await client.signTransaction(
//       senderAccount,
//       transaction
//     );
//     const transactionHash = await client.submitTransaction(signedTransaction);

//     // Wait for transaction confirmation
//     await client.waitForTransaction(transactionHash.hash);
//     return `Transaction successful with hash: ${transactionHash.hash}`;
//   } catch (error) {
//     console.error("Failed to update medical record:", error);
//     throw new Error(`Transaction failed: ${error}`);
//   }
// }


import React, { useState } from "react";
import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";

import { Aptos } from "@aptos-labs/ts-sdk";
import { Layout, Row, Col, Button, Spin, Input, message } from "antd";




const UpdateMedicalRecord: React.FC = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const [patientAddress, setPatientAddress] = useState<string>("");
  const [newRecord, setNewRecord] = useState<string>("");
  const [transactionInProgress, setTransactionInProgress] = useState(false);




  const updateMedicalRecord = async () => {
    if (!account) {
      message.error("Please connect your wallet.");
      return;
    }

    if (!patientAddress || !newRecord) {
      message.error("Please fill out all fields.");
      return;
    }

    const transaction: InputTransactionData = {
      data: {
        function: `0xd583f7047e96f1739b42cc1513044d56c545ae6dd69c08f418993caf6c1aacd5::MedicalRecordsv2::update_medical_record`,
        typeArguments: [],
        functionArguments: [patientAddress, newRecord],
      },
    };

  
    setTransactionInProgress(true);
const aptos = new Aptos();
    try {
      // Sign and submit the transaction
      const response = await signAndSubmitTransaction(transaction);
      

      // Wait for the transaction to be confirmed
      await aptos.waitForTransaction({ transactionHash: response.hash });

      message.success("Medical record updated successfully!");
    } catch (error: any) {
      console.error(error);
      message.error("Failed to update the medical record.");
    } finally {
      setTransactionInProgress(false);
    }
  };

  return (
    <Layout style={{ padding: "2rem" }}>
      <Spin spinning={transactionInProgress}>
        <Row gutter={[0, 16]}>
          <Col span={12} offset={6}>
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
              onClick={updateMedicalRecord}
              block
              type="primary"
              style={{ height: "40px", backgroundColor: "#3f67ff" }}
            >
              Update Medical Record
            </Button>
          </Col>
        </Row>
      </Spin>
    </Layout>
  );
};

export default UpdateMedicalRecord;
