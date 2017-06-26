// movie 部分

$('#navbarList a').eq(0).css('color', '#2384E8')
$('#navbarList a').eq(1).css('color', '#9F7860')
$('#navbarList a').eq(2).css('color', '#E4A813')
$('#navbarList a').eq(3).css('color', '#2AB8CC')
$('#navbarList a').eq(4).css('color', '#0EBB0E')

function hotMovie() {
    var templateStr = $("#template").html();
    var tempStr = _.template(templateStr);
    $.ajax({
        type: "get",
        url: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=windows%207&callback=&start=0&count=8&loc_id=108288&_=1498464782641",
        data: "data",
        dataType: "jsonp",
        success: function(data) {
            var data = data.subject_collection_items;
            var moviefall = '';
            $.each(data, function(index, val) {
                // if (data[index].rating) {
                //     console.log(1);
                // }
                moviefall += tempStr(val)
            });
            $('.hotMovie').append(moviefall);
        }
    });
}

function freeMovie() {
    var templateStr = $("#template1").html();
    var tempStr = _.template(templateStr);
    $.ajax({
        type: "get",
        url: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=windows+7&callback=&start=0&count=8&loc_id=108288&_=1",
        data: "data",
        dataType: "jsonp",
        success: function(data) {
            var data = data.subject_collection_items;
            var moviefall = '';
            $.each(data, function(index, val) {
                moviefall += tempStr(val)
            });
            $('.freeMovie').append(moviefall);
        }
    });

}

function newMovie() {
    var templateStr = $("#template1").html();
    var tempStr = _.template(templateStr);
    $.ajax({
        type: "get",
        url: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=windows+7&callback=&start=0&count=8&loc_id=108288&_=0",
        data: "data",
        dataType: "jsonp",
        success: function(data) {
            var data = data.subject_collection_items;
            var moviefall = '';
            var num = $('.numberIndex').html();
            $.each(data, function(index, val) {
                // if (0 <= num < 2) {
                //     console.log(1)
                // } else if (2 <= num < 4) {
                //     console.log(2)
                // } else if (4 <= num < 6) {
                //     console.log(3)
                // } else if (6 <= num < 8) {
                //     console.log(4)
                // } else if (8 <= num < 10) {
                //     console.log(5)
                // }
                moviefall += tempStr(val)
            });
            $('.newMovie').append(moviefall);
        }
    });


}
hotMovie();
freeMovie();
newMovie();

$('.findMovie li').eq(0).css({ border: "1px solid #FFC46C", }).find('a').eq(0).css('color', '#FFC46C');
$('.findMovie li').eq(1).css({ border: "1px solid #FF4055", }).find('a').eq(1).css('color', '#FF4055');
$('.findMovie li').eq(2).css({ border: "1px solid #CC3344", }).find('a').eq(2).css('color', '#CC3344');
$('.findMovie li').eq(3).css({ border: "1px solid #3BA94D", }).find('a').eq(3).css('color', '#3BA94D');
$('.findMovie li').eq(4).css({ border: "1px solid #4F9DED", }).find('a').eq(4).css('color', '#4F9DED');
$('.findMovie li').eq(5).css({ border: "1px solid #FFAC2D", }).find('a').eq(5).css('color', '#FFAC2D');
$('.findMovie li').eq(6).css({ border: "1px solid #2384E8", }).find('a').eq(6).css('color', '#2384E8');
$('.findMovie li').eq(7).css({ border: "1px solid #FFC46C", }).find('a').eq(7).css('color', '#FFC46C');