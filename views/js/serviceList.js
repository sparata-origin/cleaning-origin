$(document).ready(function () {
  showServiceList();
})

function showServiceList() {
  $.ajax({
    type: 'GET',
    url: `/api/services/lists`,
    data: {},
    success: function (response) {
      let rows = response.data
      
      for(let i = 0; i < rows.length; i++){
        let id = rows[i]['id']
        let status = rows[i]['status']
        let address = rows[i]['address']
        let homeImage = rows[i]['homeImage']


        let temp_html = `<div class="col-sm-4">
                          <div class="product-image-wrapper">
                            <div class="single-products">
                              <div class="productinfo text-center">
                                <img src="img/default.jpg" alt="" />
                                <h2>200000 Point</h2>
                                <p>${status}</p>
                              </div>
                              <div class="product-overlay">
                                <div class="overlay-content">
                                  <p>${address}</p>
                                  <button type="button" class="btn btn-info" onclick="receiveOrder(${id})">수주하기</button>
                                  <button type="button" class="btn btn-info" onclick="location.href = '/services?id=${id}'">상세보기</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`
        $('.features_items').append(temp_html)
    }
    },
  });
}