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
                          <img src="/img/cleaning.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <div class="product-information">
                          <h2>${address}</h2>
                          <p>${status}</p>
                          <span>
                            <span>200000 Point</span>
                            <button type="button" class="btn btn-fefault cart" onclick="receiveOrder(${id})">
                              <i class="fa fa-shopping-cart"></i>
                              수주하기
                            </button>
                            <button type="button" class="btn btn-default" onclick="location.href = '/serviceUpdate?id=${id}'">수정하기</button>
                            <button type="button" class="btn btn-default" onclick="deleteService()">삭제하기</button>
                        </button>
                          </span>
                        </div>`;
            $('.product-details').append(temp_html);
        },
    });
}
