function PostUpdate() {
    var data = {};
    var url = window.location.href
    var id = url.substring(url.lastIndexOf('/') + 1);
    console.log(id)
    data.name = $('#name-input').val();
    data.DepartmentId = $('select[name="department"] option').filter(':selected').val();
    $.ajax({
        url: "https://localhost:44387/EmployeeDashboard/PostUpdate/"+id,
        type: "post",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (e) {
            Swal.fire({
                icon: 'success',
                title: 'Update Success',
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