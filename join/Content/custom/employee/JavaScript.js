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
                                    <button type="button" class="btn btn-warning onclick="updateDataEmployee('${data}')">Edit</button>
                                    <button type="button" class="btn btn-danger onclick="updateDataEmployee('${data}')">Deleted</button>
                                </div>
                            </div>`;
                }
            },

        ],
    });



function UpdateEmployee(id) {
    var data = {};
    data.name = $('#name-input').val();
    data.id = id;
    $.ajax({
        url: "https://localhost:44353/update/empl/data",
        type: "post",
        dataType: "json",   
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (e) {
            console.log(e);
        }
    })
}

function LinkCreateEmployee() {
   
}