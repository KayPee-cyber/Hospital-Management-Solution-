$(document).ready(function() {

    $('form').on('submit', function(e) {

        e.preventDefault();
        let id = $('#file-number').val();
        let name = $('#patients-name').val();
        let dateOfAdmission = $('#date-of-admission').val();
        let dateOfBirth = $('#date-of-birth').val();
        let sex = $('#sex').val();
        let maritalStatus = $('#marital-status').val();
        let children = $('#children').val();
        let address = $('#address').val();
        let occupation = $('#occupation').val();
        let nationality = $('#nationality').val();
        let religion = $('#religion').val();
        let nextOfKin = $('#next-of-kin').val();
        let phoneNumber = $('#phone-number').val();
        let personalPhysician = $('#personal-physician').val();
        let physicianNumber = $('#physician-number').val();
        let regNumber = $('#reg-number').val();
        let ward = $('#ward').val();
        let bed = $('#bed').val();
        let careNote = $('#care-note').val();
        let drInCharge = $('#doctor-in-charge').val();
        let diagnosis = $('#diagnosis').val();
        let pulse = $('#pulse').val();
        let bloodPressure = $('#blood-pressure').val();
        let respiration = $('#respiration').val();
        let temperature = $('#temperature').val();
        let mental = $('#mental').val();
        let predisposing = $('#predisposing').val();
        let physical = $('#physical').val();
        let special = $('#special').val();
        let previousAdmissions = $('#previous-admissions').val();
        let previousDischarges = $('#previous-discharges').val();




        let details = {
            id,
            name,
            dateOfAdmission,
            dateOfBirth,
            sex,
            maritalStatus,
            children,
            address,
            occupation,
            nationality,
            religion,
            nextOfKin,
            phoneNumber,
            personalPhysician,
            physicianNumber,
            regNumber,
            ward,
            bed,
            careNote,
            drInCharge,
            diagnosis,
            pulse,
            bloodPressure,
            respiration,
            temperature,
            mental,
            predisposing,
            physical,
            special,
            previousAdmissions,
            previousDischarges
        }
        $.ajax({
            type: "POST",
            data: details,
            dataType: "json",
            url: "http://localhost:3000/Patients",
            success: function(result) {
                console.log(result)
            },


        });
    })

})