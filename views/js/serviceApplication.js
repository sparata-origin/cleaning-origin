// 사진 미리보기
function readURL(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('upload-img').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('upload-img').src = '';
    }
}

function cancel() {
    alert('게시글 작성을 취소하였습니다');
    window.location.href = '/index';
}

function apply() {
    let homeImage = $('input[name=homeImage]')[0].files[0];
    let address = $('input[name=address]').val();
    let formData = new FormData();
    console.log(homeImage, address);
    console.log(formData);
    formData.append('homeImage', homeImage);
    formData.append('address', address);

    $.ajax({
        type: 'POST',
        url: '/api/services',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            alert(response.message);
            window.location.href = '/index';
        },
        error: function (response) {
            alert(response.responseJSON.errorMessage);
        },
    });
}
