module message_board_addr::MedicalRecordsv2 {

    use std::vector;
    use std::signer;
    use aptos_framework::table;
    use std::string::{String,utf8};

    
    /// Struct to store verified doctors
    struct Doctors has key {
        owner: address,                    // Address of the contract owner
        verified_doctors: vector<address>, // List of verified doctors
    }

    /// Struct to store patient medical records
    struct Patients has key {
        medical_records: table::Table<address, vector<String>>, // Mapping of patient addresses to medical records (String format)
    }

    /// Initializes the module and sets up the owner and necessary resources
    public entry fun initialize(account: &signer) {
        let account_address = signer::address_of(account);
        let owner_address = signer::address_of(account);
        let doctors = Doctors {
            owner: owner_address,
            verified_doctors: vector::singleton(account_address),
        };
        move_to(account, doctors)

        // // Initialize an empty Patients resource
        // move_to(account, Patients {
        //     medical_records: table::new<address, vector<String>>(),
        // });
    }

    /// Adds a new doctor (only the owner can do this)
    public entry fun add_doctor(account: &signer, doctor_address: address) acquires Doctors {
        let owner_address = signer::address_of(account);
        let doctors = borrow_global_mut<Doctors>(owner_address);

        // Ensure only the owner can add doctors
        assert!(doctors.owner == owner_address, 1);

        // Add the doctor to the verified list
        vector::push_back(&mut doctors.verified_doctors, doctor_address);
    }

    /// Updates a patient's medical records (only verified doctors can do this)
    public entry fun update_medical_record(account: &signer, patient_address: address, new_record: String) acquires Doctors, Patients {
        let sender = signer::address_of(account);

        // Check if the sender is a verified doctor
        let owner_address = signer::address_of(account);
        let doctors = borrow_global<Doctors>(owner_address);
        let is_verified = vector::contains(&doctors.verified_doctors, &sender);
        assert!(is_verified, 2);

        // Add the new medical record
        if(!exists<Patients>(owner_address)) {
            move_to(account, Patients {
                medical_records: table::new<address, vector<String>>(),
            });
        };
        let patients = borrow_global_mut<Patients>(owner_address);
        if (!table::contains(&patients.medical_records, patient_address)) {
            // Initialize a new record for this patient
            table::add(
                &mut patients.medical_records,
                patient_address,
                vector::empty(),
            );
        };
        let records = table::borrow_mut(&mut patients.medical_records, patient_address);
        vector::push_back(records, new_record);
    }

    /// Gets a single patient's medical records (only the patient or verified doctors can view them)
    #[view]
    public fun get_medical_record(account_addr: address, patient_address: address): vector<String> acquires Doctors, Patients {
        let sender = account_addr;

        // Check if the caller is either the patient or a verified doctor
        let owner_address = account_addr;
        let doctors = borrow_global<Doctors>(owner_address);
        let is_verified = vector::contains(&doctors.verified_doctors, &sender);

        // Ensure the caller is either the patient or a verified doctor
        assert!(sender == patient_address || is_verified, 3);

        // Retrieve the records
        let patients = borrow_global<Patients>(owner_address);
        if (!table::contains(&patients.medical_records, patient_address)) {
            return vector::empty()
        };
        *table::borrow(&patients.medical_records, patient_address)
    }

    /// Gets all medical records of a specific patient
    #[view]
    public fun get_medical_records(account_addr: address, patient_address: address): vector<String> acquires Doctors, Patients {
        let sender = account_addr;

        // Check if the caller is either the patient or a verified doctor
        let owner_address = account_addr;
        let doctors = borrow_global<Doctors>(owner_address);
        let is_verified = vector::contains(&doctors.verified_doctors, &sender);

        // Ensure the caller is either the patient or a verified doctor
        assert!(sender == patient_address || is_verified, 3);

        // Retrieve the records
        let patients = borrow_global<Patients>(owner_address);
        if (!table::contains(&patients.medical_records, patient_address)) {
            return vector::empty()
        };
        *table::borrow(&patients.medical_records, patient_address)
    }
}
