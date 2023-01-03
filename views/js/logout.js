function logout() {
  console.log("오긴하냐?")
  $.ajax({
    type: 'GET',
    url: `/api/auth/logout`,
    data: {},
    success: function (response) {
      alert("로그아웃 되었습니다")
    },
  });
}