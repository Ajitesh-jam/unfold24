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
  
  

import { InputTransactionData, useWallet } from "@aptos-labs/wallet-adapter-react";
import { message } from "antd";
import { Aptos } from "@aptos-labs/ts-sdk";
export async function updateRecord(
  moduleAddress: string,
  patientAddress: string,
  newRecord: string,
  signAndSubmitTransaction: (transaction: InputTransactionData) => Promise<any>
): Promise<string> {
  try {
    // Validate input
    if (!moduleAddress || !patientAddress || !newRecord) {
      throw new Error("Invalid inputs. Ensure module address, patient address, and record are provided.");
    }

    // Transaction payload
    const transaction: InputTransactionData = {
      data: {
        function: `${moduleAddress}::MedicalRecordsv2::update_medical_record`,
        typeArguments: [],
        functionArguments: [patientAddress, newRecord],
      },
    };

    // Sign and submit the transaction
    const response = await signAndSubmitTransaction(transaction);

    // Wait for transaction confirmation
    const aptos = new Aptos();
    await aptos.waitForTransaction({ transactionHash: response.hash });

    message.success("Medical record updated successfully!");
    return `Transaction successful with hash: ${response.hash}`;
  } catch (error: any) {
    console.error("Failed to update medical record:", error);
    message.error(`Transaction failed: ${error.message || error}`);
    throw new Error(`Transaction failed: ${error.message || error}`);
  }
}
