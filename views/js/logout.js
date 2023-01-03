function logout() {

  $.ajax({
    type: 'GET',
    url: `/api/auth/logout`,
    data: {},
    success: function (response) {
      alert("로그아웃 되었습니다")
    },
  });
}