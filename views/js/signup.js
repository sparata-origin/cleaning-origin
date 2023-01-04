function signup() {
    const nickname = $('#nickname').val();
    const email = $('#signupEmail').val();
    const password = $('#signupPassword').val();
    const confirm = $('#confirmPassword').val();
    const phone = $('#phone').val();
    const userType = $('input[name="userType"]:checked').val();
    $.ajax({
        type: 'POST',
        url: '/api/auth/signup',
        data: {
            email: email,
            nickname: nickname,
            password: password,
            confirm: confirm,
            phone: phone,
            isBusiness: userType,
        },
        success: function (response) {
            alert(response.message);
            window.location.href = '/login';
        },
        error: function (response) {
            alert(response.responseJSON.errorMessage);
        },
    });
}
