$(document).ready(function () {
  businessReviews();
})

function businessReviews() {
  $.ajax({
    type: 'GET',
    url: `/api/business/stars`,
    data: {},
    success: function (response) {
      console.log(response)
      let rows = response.data
      console.log(rows)

      for (let i in rows) {
        let starAVG = rows[i].starAVG
        let companyName = rows[i].companyName
        let id = rows[i].businessId

        let temp_html = `<li class="media">
                          <a href="/business/info?id=${id}" style="color: black;">
                            <div class="media-body">
                              <ul class="sinlge-post-meta">
                                <li><i class="fa fa-star"></i>평점 : ${starAVG} 점</li>
                              </ul>
                              <p style="font-size:x-large">${companyName}</p>
                            </div>
                          </a>
                        </li>`
      $('.media-list').append(temp_html) 
      }
    },
  });
}