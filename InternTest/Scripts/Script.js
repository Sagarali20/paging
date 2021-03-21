
function pageid(url) {
    $.ajax({
        type: 'GET',
        url: url,
        success: function (res) {
            $("#table").html(res);
            console.log(res);
      
        }
    })

}

