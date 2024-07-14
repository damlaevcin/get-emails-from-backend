$(document).on("click", ".starter-button", function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/comments",
        type: "GET",
        dataType: "json",
        success: function(data){
            var emailsHtml = "";
            data.forEach(function(value, key){
                emailsHtml = emailsHtml + `<div class="card">
  <div class="card-header">
    ${value.name}
  </div>
  <div class="card-body">
    <h4 class="card-title">${value.email}</h4>
    <p class="card-text">${value.body}</p>
  </div>
</div>
`
            })
            $(".emailArea").html(emailsHtml)
        }

    })
})