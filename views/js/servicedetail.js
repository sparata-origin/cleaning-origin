let query = window.location.search;
let param = new URLSearchParams(query);
let id = param.get('id');

$(document).ready(function () {
    showServiceDetail(id);
});

function showServiceDetail(id) {
    $.ajax({
        type: 'GET',
        url: `/api/services/${id}`,
        data: {},
        success: function (response) {
            let id = response.data.id;
            let status = response.data.status;
            let address = response.data.address;
            let homeImage = response.data.homeImage;

            let temp_html = `<div class="col-sm-5">
                        <div class="view-product">
                          <img src="/uploads/${homeImage}" alt="" />
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <div class="product-information">
                          <h2>${address}</h2>
                          <p>${status}</p>
                          <span>
                          <span>200000 Point</span>
                          <button type="button" class="btn btn-fefault cart" onclick="deleteService()">
                          <i class="fa-sharp fa-solid fa-trash"></i>
                          삭제하기
                          </button>
                          <button type="button" class="btn btn-fefault cart" onclick="location.href = '/serviceUpdate?id=${id}'">
                          <i class="fa-solid fa-pen"></i>
                          수정하기
                          </button>
                          <button type="button" class="btn btn-fefault cart" onclick="receiveOrder(${id})">
                          <i class="fa-solid fa-hands-bubbles"></i>
                          수주하기
                          </button>
                          </span>
                        </div>`;
            $('.product-details').append(temp_html);
        },
    });
}
