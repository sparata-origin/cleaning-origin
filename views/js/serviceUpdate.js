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
    alert('서비스 수정을 취소하였습니다');
    window.location.href = '/index';
    // window.history.back(); // 뒤로가기
}

function update() {
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let id = param.get('id');
    console.log('??:', id);
    let homeImage = $('input[name=homeImage]')[0].files[0];
    let address = $('input[name=address]').val();
    let formData = new FormData();
    formData.append('homeImage', homeImage);
    formData.append('address', address);

    $.ajax({
        type: 'PUT',
        url: `/api/services/${id}`,
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
