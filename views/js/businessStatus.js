$(document).ready(function () {
  showStatusList();
})

function showStatusList() {
  $.ajax({
    type: 'GET',
    url: `/api//mystatus/services`,
    data: {},
    success: function (response) {
      let rows = response.myStatusData
      console.log(response.myStatusData)
      for(let i = 0; i < rows.length; i++){
        let id = rows[i]['id']
        let status = rows[i]['status']
        let address = rows[i]['address']
        let homeImage = rows[i]['homeImage']

        if (status === "청소 완료") {
          let temp_html = `<tr>
                          <td class="cart_product">
                            <a href=""><img src="img/cleaning.jpg" alt=""></a>
                          </td>
                          <td class="cart_description">
                            <h4><a href="">${address}</a></h4>
                          </td>
                          <td class="cart_price">
                            <p>200000 Point</p>
                          </td>
                          <td class="cart_quantity">
                            <div class="cart_quantity_button">
                              <p>${status}</p>
                            </div>
                          </td>
                          <td class="cart_total">
                          </td>
                        </tr>`
           $('#statusList').append(temp_html)
        }
        if (status === "청소중") {
          let temp_html = `<tr>
                          <td class="cart_product">
                            <a href=""><img src="img/cleaning.jpg" alt=""></a>
                          </td>
                          <td class="cart_description">
                            <h4><a href="">${address}</a></h4>
                          </td>
                          <td class="cart_price">
                            <p>200000 Point</p>
                          </td>
                          <td class="cart_quantity">
                            <div class="cart_quantity_button">
                              <p>${status}</p>
                            </div>
                          </td>
                          <td class="cart_total">
                            <button type="button" class="btn btn-warning" onclick="receiveOrder(${id})">청소 완료</button>
                          </td>
                        </tr>`
            $('#statusList').append(temp_html)
        }
      }
    },
  });
}