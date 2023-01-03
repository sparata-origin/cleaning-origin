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
            window.location.href = '/';
        },
        error: function (response) {
            console.log(response);
            alert(response.responseJSON.errorMessage);
        },
    });
}
