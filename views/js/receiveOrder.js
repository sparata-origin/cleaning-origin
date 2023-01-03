function receiveOrder(id){
  $.ajax({
      type: "PUT",
      url: `/api/business/services/${id}`,
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