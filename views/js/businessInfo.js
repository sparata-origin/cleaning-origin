let query = window.location.search; 
let param = new URLSearchParams(query); 
let id = param.get('id');

$(document).ready(function () {
  businessReviews(id);
})

function businessReviews(id) {
  $.ajax({
    type: 'GET',
    url: `/api/business/reviews/${id}`,
    data: {},
    success: function (response) {
      let starAVG = Number(response.data.starAVG[0].starAVG)
      let companyName = response.data.businessReview[0].CompanyName
      let rows = response.data.businessReview
      
      
      let innerStar = starAVG.toFixed(1)

      document.querySelector('#starAVG').innerHTML = `평점 : ${innerStar} 점`;
      document.querySelector('#CompanyName').innerHTML = `업체명 : ${companyName}`;

      for (let i = 0 ; i <  rows.length; i++) {
      let time = rows[i].createdAt
      let content = rows[i].content
      let star = rows[i].star
      
      
      console.log(rows[i])
      let temp_html = `<li class="media">
                          <div class="media-body">
                            <ul class="sinlge-post-meta">
                              <li><i class="fa fa-star"></i>${star} 점</li>
                              <li><i class="fa fa-clock-o"></i>${time}</li>
                            </ul>
                            <p>${content}</p>
                          </div>
                        </li>`
      $('.media-list').append(temp_html) 
      }   
    },
  });
}