var countjson = 0;
var fileNames = ["json1.json", "json2.json"];

$(document).ready(function () {

    $("#btnMore").click(function () {
        loadNews();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            loadNews();
        }
    });

    $("#scrollup").click(function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
});

function createNews(json) {
    var img;
    var capsule;
    var title;
    var date;
    var body;
    $.each(json, function (i, news) {
        img = news.img;
        capsule = news.capsule;
        title = news.title;
        date = news.date;
        body = news.body;
        $("#noticias").append('<div class="noticia"><img src="' + capsule + '" class="capsule" alt="Responsive image"><div class="headline"><div class="title"><a href="#">' + title + '</a></div></div><br><div class="body">' + body + '<img src="' + img + '" class="img-responsive" alt="Responsive image"><div class="date">' + date + '</div></div></div>');
    });
}

function loadNews() {
    if (countjson < fileNames.length) {
        var name = fileNames[countjson];
        countjson++;
        $.getJSON("https://rawgit.com/PedroAmat/Steam-News/master/data/" + name, function (jsonObject) {
            createNews(jsonObject);
        });
    } else {
        alert("You've just seen all our news!");
    }
}