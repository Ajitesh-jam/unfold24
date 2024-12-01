import { useWallet } from "@aptos-labs/wallet-adapter-react";
// Internal Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { WalletDetails } from "@/components/WalletDetails";
import { NetworkInfo } from "@/components/NetworkInfo";
import { AccountInfo } from "@/components/AccountInfo";
import { TransferAPT } from "@/components/TransferAPT";
import { MessageBoard } from "@/components/MessageBoard";
import { TopBanner } from "@/components/TopBanner";
import { getMedicalRecord } from "./components/GetMedicalRecord";

import UpdateMedicalRecord from "./components/UpdateMedicalRecord";



function App() {
  const { connected } = useWallet();

  return (
    <>
      <TopBanner />
      <Header />
      <div className="flex items-center justify-center flex-col">
        {connected ? (
          <Card>
            <CardContent className="flex flex-col gap-10 pt-6">
              <WalletDetails />
              <NetworkInfo />
              <AccountInfo />
              {/* <TransferAPT /> */}

              <button type="button" className="btn" onClick={() => getMedicalRecord("0xd583f7047e96f1739b42cc1513044d56c545ae6dd69c08f418993caf6c1aacd5","0x80ebdd65a19a106fdf82d7515e9cb0fbf73577eab2dfc8631b0341128fe32909")}>
                Get Medical Record</button>

              {/* <button type="button" className="btn" onClick={() => updateMedicalRecord("0x80ebdd65a19a106fdf82d7515e9cb0fbf73577eab2dfc8631b0341128fe32909","new record")}>Update Record</button> */}
              <UpdateMedicalRecord />

              <MessageBoard />
            </CardContent>
          </Card>
        ) : (
          <CardHeader>
            <CardTitle>To get started Connect a wallet</CardTitle>
          </CardHeader>
        )}
      </div>
    </>
  );
}

export default App;
