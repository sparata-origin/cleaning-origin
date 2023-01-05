function deleteService() {
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let id = param.get('id');

    $.ajax({
        type: 'DELETE',
        url: `/api/services/${id}`,
        success: function (response) {
            alert(response.message);
            window.location.href = '/index';
        },
        error: function (response) {
            alert(response.responseJSON.errorMessage);
        },
    });
}
