
function IndexUpdateEmployee(id) {
    console.log(id);
    window.location.href = "/EmployeeDashboard/IndexUpdate/" + id;
}

function IndexDeletedEmployee(id) {
    $.ajax({
        url: "https://localhost:44387/employee/deteled"+id,
        type: "delete",
        dataType: "json",
        success: function (e) {
            Swal.fire({
                icon: 'success',
                title: 'Created Success',
                timerProgressBar: true,
                timer: 3000,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = Swal.getTimerLeft()
                            }
                        }
                    }, 100)
                },
                willClose: () => {
                    window.location.href = "/EmployeeDashboard/Index";
                    clearInterval(timerInterval)
                }
            })
        }
    })
}



$('#data-employee').DataTable({
        ajax: {
            url: 'https://localhost:44387/emp/data',
            dataSrc: ''
        },
        "columns": [
            {
                "data": "Id",
                "render": function (data, type, row, meta) {
                    return '<div class="row center"><div class="col">' + data + '</div></div>';
                }
            },
            {
                "data": "Name",
                "render": function (data, type, row, meta) {
                    return '<div class="row center"><div class="col">' + data + '</div></div>';
                }
            },
            {
                "data": "Department.Name",
                "render": function (data, type, row, meta) {
                    return '<div class="row center"><div class="col">' + data + '</div></div>';
                }
            },
            {
                "data": "Id",
                "render": function (data, type, row, meta) {
                    return `<div class="row center">
                                <div class="col">
                                    <button type="button" class="btn btn-warning" onclick="IndexUpdateEmployee('${data}')">Edit</button>
                                    <button type="button" class="btn btn-danger" onclick="IndexDeletedEmployee('${data}')">Deleted</button>
                                </div>
                            </div>`;
                }
            },

        ],
    });


