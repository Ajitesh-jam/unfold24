import React, { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Layout from "antd/lib/layout";
import { Row, Col, Button, Spin, Input, message } from "antd";

interface Props {}

const PetraWalletConnector: React.FC<Props> = () => {
  const { account, connected, connect, disconnect, signAndSubmitTransaction } = useWallet();
  const [transactionStatus, setTransactionStatus] = useState<string | null>(null);

  // Handle wallet connection
  const handleConnectWallet = async () => {
    try {
      

      const isPetraInstalled = window.aptos;

      

      message.success("Wallet connected successfully!");
    } catch (error) {
      console.error("Error connecting wallet:", error);
      message.error("Failed to connect wallet.");
    }
  };

  // Handle wallet disconnection
  const handleDisconnectWallet = () => {
    disconnect();
    message.success("Wallet disconnected successfully!");
  };

  // Handle signing and submitting a dummy transaction
  const handleSignAndSubmitTransaction = async () => {
    if (!connected || !account) {
      message.error("Please connect your wallet first.");
      return;
    }

    try {
      const transaction = {
        data: {
          function: "0x1::Coin::transfer", // Example function
          typeArguments: ["0x1::aptos_coin::AptosCoin"],
          functionArguments: [account.address, 1000000], // Transfer 1 APT to yourself
        },
      };

      const response = await signAndSubmitTransaction(transaction);
      setTransactionStatus(`Transaction submitted: ${response.hash}`);
      message.success("Transaction signed and submitted successfully!");
    } catch (error) {
      console.error("Error signing transaction:", error);
      message.error("Failed to sign or submit transaction.");
    }
  };

  return (
    <Layout style={{ padding: "2rem" }}>
      <Row gutter={[16, 16]}>
        <Col span={12} offset={6}>
          <h2>Petra Wallet Connection</h2>

          {/* Wallet connection status */}
          {!connected ? (
            <Button
              onClick={handleConnectWallet}
              type="primary"
              block
              style={{ marginBottom: "1rem", backgroundColor: "#3f67ff" }}
            >
              Connect Petra Wallet
            </Button>
          ) : (
            <div style={{ marginBottom: "1rem" }}>
              <p>
                Connected to: <strong>{account?.address}</strong>
              </p>
              <Button onClick={handleDisconnectWallet} block type="default">
                Disconnect Wallet
              </Button>
            </div>
          )}

          {/* Sign and Submit Transaction */}
          <Button
            onClick={handleSignAndSubmitTransaction}
            type="primary"
            block
            disabled={!connected}
            style={{ marginBottom: "1rem", backgroundColor: "#3f67ff" }}
          >
            Sign & Submit Transaction
          </Button>

          {/* Transaction Status */}
          {transactionStatus && (
            <div style={{ marginTop: "1rem" }}>
              <p>
                <strong>Transaction Status:</strong> {transactionStatus}
              </p>
            </div>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default PetraWalletConnector;
