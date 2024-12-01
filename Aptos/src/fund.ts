import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
 




 
// Specify which network to connect to via AptosConfig
async function example() {
  console.log(
    "This example will create two accounts (Alice and Bob), fund them, and transfer between them.",
  );

  
 
  // Setup the client
  const config = new AptosConfig({ network: Network.DEVNET });
  const aptos = new Aptos(config);
  aptos.fundAccount({accountAddress: "0x80ebdd65a19a106fdf82d7515e9cb0fbf73577eab2dfc8631b0341128fe32909", amount: 100000000});
}

 
example()