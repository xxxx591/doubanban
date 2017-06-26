// movie 部分
function movie() {
    var templateStr = $("#template").html();
    var tempStr = _.template(templateStr);
    $.ajax({
        type: "get",
        url: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=windows%207&callback=&start=0&count=8&loc_id=108288&_=1498464782641",
        data: "data",
        dataType: "jsonp",
        success: function(data) {
            var data = data.subject_collection_items;
            console.log(data)
            var moviefall = '';
            $.each(data, function(index, val) {
                if (data[index].rating == null) {
                    data[index].rating.value = 0;
                    console.log(1);
                }
                moviefall += tempStr(val)
            });

        }
    });
    var numberIndex = $('.numberIndex').html();
}



movie();