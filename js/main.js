$(document).ready(function() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:3000/Patients",
        success: function(data) {
            console.log(data);

            data.forEach(item => {
                console.log(item);

                let premData =
                    `<tr>
                   <td>${item.id}</td>
                   <td>${item.name}</td>
                   <td>${item.ward}</td>
                  <td>${item.bed}</td>
                  <td><button type="button" class="btn btn-secondary view btn-sm" dataId = '${item.id}'>View</button></td>
                  <td><button type="button" class="btn btn-secondary edit btn-sm" dataId = '${item.id}'>Edit</button></td>
                  <td><button type="button" class="btn btn-secondary delete btn-sm" dataId = '${item.id}'>Delete</button></td>
                </tr>`
                $('#patientsBody').append(premData)


            })
        }
    })
    $(document).on('click', '.view', function(e) {
        let id = $(e.target).attr('dataId')
        sessionStorage.setItem("itemId", id)
        window.location = 'details.html'
    })
    $(document).on('click', '.edit', function(e) {
        let id = $(e.target).attr('dataId')
        sessionStorage.setItem("itemId", id)
        window.location = 'update.html'
        $.ajax({
            method: "PATCH",
            url: `http://localhost:3000/Patients/${id}`,
            success: function(response) {
                console.log(response, itemId);

            }
        })
    })
    $(document).on('click', '.delete', function(e) {
        let id = $(e.target).attr('dataId')
        sessionStorage.setItem("itemId", id)
        $.ajax({
            method: "DELETE",
            url: `http://localhost:3000/Patients/${id}`,
            success: function(response) {
                console.log(response, itemId);

            }
        })
    })


});