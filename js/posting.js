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
    });
    let itemId = sessionStorage.getItem('itemId')
    $.ajax({
        url: `http://localhost:3000/Patients/${itemId}`,
        success: function(response) {
            console.log(response, itemId);
            $('tbody').append(`<tr>
                <td>${response.name}</td>
            </tr>
            <tr>
            <td>File Number</td>
            <td>${response.id}</td>
        </tr>
        <tr>
            <td>Date of Admission</td>
            <td>${response.dateOfAdmission}</td>
        </tr><tr>
        <td>Date of Birth</td>
        <td>${response.dateOfBirth}</td>
    </tr><tr>
    <td>Sex</td>
    <td>${response.sex}</td>
</tr><tr>
<td>Marital Status</td>
<td>${response.maritalStatus}</td>
</tr><tr>
<td>Children</td>
<td>${response.children}</td>
</tr><tr>
<td>Address</td>
<td>${response.address}</td>
</tr><tr>
<td>Occupation</td>
<td>${response.occupation}</td>
</tr><tr>
<td>Nationality</td>
<td>${response.nationality}</td>
</tr><tr>
<td>Religion</td>
<td>${response.religion}</td>
</tr><tr>
<td>Next of Kin</td>
<td>${response.nextOfKin}</td>
</tr><tr>
<td>Phone Number</td>
<td>${response.phoneNumber}</td>
</tr><tr>
<td>Personal Physician</td>
<td>${response.personalPhysician}</td>
</tr><tr>
<td>Personal Physician's Phone Number</td>
<td>${response.physicianNumber}</td>
</tr><tr>
<td>Ward</td>
<td>${response.ward}</td>
</tr><tr>
<td>Bed</td>
<td>${response.bed}</td>
</tr><tr>
<td>Care-Note</td>
<td>${response.careNote}</td>
</tr><tr>
<td>Dr. in Charge</td>
<td>${response.drInCharge}</td>
</tr><tr>
<td>Diagnosis</td>
<td>${response.diagnosis}</td>
</tr><tr>
<td>Pulse</td>
<td>${response.pulse}</td>
</tr><tr>
<td>Blood Pressure</td>
<td>${response.bloodPressure}</td>
</tr><tr>
<td>Respiration</td>
<td>${response.respiration}</td>
</tr><tr>
<td>Temperature</td>
<td>${response.temperature}</td>
</tr><tr>
<td>Mental State on Admission</td>
<td>${response.mental}</td>
</tr><tr>
<td>Supposed Causes/Predisposing</td>
<td>${response.predisposing}</td>
</tr><tr>
<td>Physical Condition</td>
<td>${response.physical}</td>
</tr><tr>
<td>Special Circumstances</td>
<td>${response.special}</td>
</tr><tr>
<td>Date of Previous Admissions</td>
<td>${response.previousAdmissions}</td>
</tr><tr>
<td>Date of Previous Discharges</td>
<td>${response.previousDischarges}</td>
</tr>`)

        },
        method: 'GET'
    })

    //  let itemId = sessionStorage.getItem('itemId')

})