function receiveOrder(id){
  $.ajax({
      type: "PUT",
      url: `/api/business/services/${id}`,
      data: {},
      success: function (response) {
        console.log(response)
      },
      error: function (request, status, error) {
        alert(request.responseJSON.errorMessage)
      }
  });
}