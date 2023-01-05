function receiveOrder(id){
  $.ajax({
      type: "PUT",
      url: `/api/business/services/order/${id}`,
      data: {},
      success: function (response) {
        alert(response.message)
        window.location.replace("/status")
      },
      error: function (request, status, error) {
        alert(request.responseJSON.errorMessage)
      }
  });
}

function serviceUpdate(id){
  $.ajax({
      type: "PUT",
      url: `/api/business/services/updated/${id}`,
      data: {},
      success: function (response) {
        alert(response.message)
        window.location.reload()
      },
      error: function (request, status, error) {
        alert(request.responseJSON.errorMessage)
      }
  });
}