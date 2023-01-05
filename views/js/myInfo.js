$(document).ready(function () {
    myInfo();
});

function myInfo() {
    $.ajax({
        type: 'GET',
        url: `/api/auth/info`,
        data: {},
        success: function (response) {
            let rows = response.user;
            console.log(rows, 'gg');

            let nickname = rows['nickname'];
            let point = rows['point'];

            let temp_html = `
                                <a href="/status">
                                <i class="fa fa-krw"></i>
                                ${nickname}님의 포인트 : ${point}
                                </a>
                        `;
            $('.myInfo').append(temp_html);
        },
    });
}
