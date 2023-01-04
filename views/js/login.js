$(document).ready(function () {
    const todoForm = document.getElementById("re")
    todoForm.addEventListener("submit", handleToDoSubmit)
    function handleToDoSubmit(event) {
        event.preventDefault();
    }
});
function login() {
    const email = $('#email').val();
    const password = $('#password').val();

    $.ajax({
        type: 'POST',
        url: '/api/auth/login',
        data: {
            email: email,
            password: password,
        },
        success: function (response) {
            alert(response.message);
            window.location.href = '/index';
        },
        error: function (response) {
            alert(response.responseJSON.errorMessage);
        },
    });
}
