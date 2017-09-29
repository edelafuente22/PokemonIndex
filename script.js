$(document).ready(function(){
    var image="";
    for(var i = 1; i <= 151; i++){
        image += '<img src="http://pokeapi.co/media/sprites/pokemon/' + [i] + '.png"' + 'data-pokenum=' + [i] + '>';
    }
    
    $("#main").append(image);     
                
    // Name, image, types, height, weight

    $(document).on('click', 'img', function () {
        var pokeNum = $(this).data("pokenum");
        var url = "https://pokeapi.co/api/v2/pokemon/" + [pokeNum] + "/";

        $.get(url, function (res) {
            var htmlStr = "";
            htmlStr += '<h1>' + res['name'] + '</h1>';
            htmlStr += '<img src="http://pokeapi.co/media/sprites/pokemon/' + [pokeNum] + '.png"' + '>';
            htmlStr += '<h2>Types:</h2>';
            for (var x = 0; x < res['types'].length; x++) {
                htmlStr += '<li>' + res['types'][x]['type'].name + '</li>';
            }
            htmlStr += '<h2>Height</h2>';
            htmlStr += '<p>' + res['height'] + '</p>';
            htmlStr += '<h2>Weight</h2>';
            htmlStr += '<p>' + res['weight'] + '</p>';

            $("#sidebar").html(htmlStr);
                        
        }, "json");

    })
})
