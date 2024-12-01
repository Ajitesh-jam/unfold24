import { surfClient } from "@/utils/surfClient";
import { MESSAGE_BOARD_ABI } from "@/utils/message_board_abi";

export const getMessageContent = async (): Promise<string> => {
  // const content = await surfClient()
  //   .useABI(MESSAGE_BOARD_ABI)
  //   .view.get_medical_record({
  //     functionArguments: [],
  //     typeArguments: [],
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     return ["message not exist"];
  //   });

  // return content[0];
  return "not found";
};
