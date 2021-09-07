function CreateEmployee(id) {
    var data = {};
    data.name = $('#name-input').val();
    data.DepartmentId = $('select[name="department"] option').filter(':selected').val();
    $.ajax({
        url: "https://localhost:44387/EmployeeDashboard/PostCreate",
        type: "post",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (e) {
            console.log(e);
        }
    })
}