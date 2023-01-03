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
        success: function (json) {
            alert(json.message);
            window.location.href = '/';
        },
    });
}
