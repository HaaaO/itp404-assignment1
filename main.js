

$(document).ready(function(){
    $("form").submit(function(e){

      var text = $('input[name="searchValue"]').val();

      event.preventDefault();

          $('#results').html(`<div class ="loader" ></div>`);
          event.preventDefault();

        var url ="https://www.reddit.com/r/" + text + ".json";
        let promise = $.ajax({
          type:'GET',
          url: url
        });


      promise.then(function(info){
       let html = '';
       info.data.children.forEach(function(repo){
        html += `<div>
                    <h3>Title: ${repo.data.title}</h3>
                    <p>Score: ${repo.data.score}</p>
                    <p>Author: ${repo.data.author}</p>

                 </div>
                  `;
      });
      $('#results').html(html);
      }, function(){
         console.log('error');
      });
    });
});

// AJAX request: fetch(), XMLHttpRequest
