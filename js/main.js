$(document).ready(function() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:3000/Patients",
        success: function(data) {


            data.forEach(item => {

                let premData =
                    `<tr>
                   <td>${item.id}</td>
                   <td>${item.name}</td>
                   <td>${item.ward}</td>
                  <td>${item.bed}</td>
                  <td><button type="button" class="btn btn-secondary btn-sm">View</button></td>
                  <td><button type="button" class="btn btn-secondary btn-sm">Edit</button></td>
                  <td><button type="button" class="btn btn-secondary btn-sm">Delete</button></td>
                </tr>`
                $('#patientsBody').append(premData)
                console.log(item);

            })
        }
    })
});