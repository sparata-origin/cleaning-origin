function writereview() {
  let query = window.location.search; 
  let param = new URLSearchParams(query); 
  let serviceId = param.get('serviceId');
  let businessId = param.get('businessId');
  let star = $('#star').val()
  let reviewContent = $('#reviewContent').val()

  $.ajax({
    type: 'POST',
    url: `/api/business/${businessId}/reviews/${serviceId}`,
    data: { content : reviewContent , star : star },
    success: function (response) {
      alert(response.message)
      location.href = '/';
    },
  });
} 