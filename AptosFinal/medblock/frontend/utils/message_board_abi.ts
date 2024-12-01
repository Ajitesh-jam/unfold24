export const MESSAGE_BOARD_ABI = {
    address: "0x80ebdd65a19a106fdf82d7515e9cb0fbf73577eab2dfc8631b0341128fe32909",
    name: "MedicalRecords",
    friends: [],
    exposed_functions: [
      {
        name: "add_doctor",
        visibility: "public",
        is_entry: true,
        is_view: false,
        generic_type_params: [],
        params: ["&signer", "address"],
        return: [],
      },
      {
        name: "get_medical_record",
        visibility: "public",
        is_entry: false,
        is_view: false,
        generic_type_params: [],
        params: ["&signer", "address"],
        return: ["vector<vector<u8>>"],
      },
      {
        name: "get_medical_records",
        visibility: "public",
        is_entry: false,
        is_view: false,
        generic_type_params: [],
        params: ["&signer", "address"],
        return: ["vector<vector<u8>>"],
      },
      {
        name: "initialize",
        visibility: "public",
        is_entry: false,
        is_view: false,
        generic_type_params: [],
        params: ["&signer"],
        return: [],
      },
      {
        name: "update_medical_record",
        visibility: "public",
        is_entry: true,
        is_view: false,
        generic_type_params: [],
        params: ["&signer", "address", "vector<u8>"],
        return: [],
      },
    ],
    structs: [
      {
        name: "Doctors",
        is_native: false,
        is_event: false,
        abilities: ["key"],
        generic_type_params: [],
        fields: [
          { name: "owner", type: "address" },
          { name: "verified_doctors", type: "vector<address>" },
        ],
      },
      {
        name: "Patients",
        is_native: false,
        is_event: false,
        abilities: ["key"],
        generic_type_params: [],
        fields: [
          {
            name: "medical_records",
            type: "0x1::table::Table<address, vector<vector<u8>>>",
          },
        ],
      },
    ],
  } as const;
  