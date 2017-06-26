$('#navbarList a').eq(0).css('color', '#2384E8')
$('#navbarList a').eq(1).css('color', '#9F7860')
$('#navbarList a').eq(2).css('color', '#E4A813')
$('#navbarList a').eq(3).css('color', '#2AB8CC')
$('#navbarList a').eq(4).css('color', '#0EBB0E')

// 请求ajax


var templateStr = $("#template").html();
// console.log(templateStr)
var tempStr = _.template(templateStr);
var myDate = new Date(); //获取当前时间
var dateYear = myDate.getYear(); //获取年
var dateMonth = myDate.getMonth() + 1; //获取月
var dateDate = myDate.getDate() + 1; //获取日
// console.log(dateMonth)
// console.log(dateDate)

function index() {
    $.ajax({
        type: "get",
        url: "https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=2017-" + dateMonth + "-" + dateDate + "&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1",
        data: "data",
        dataType: "jsonp",
        success: function(data) {
            var warterfall = '';
            var data = data.recommend_feeds
                // console.log(dataIndex);
            $.each(data, function(index, val) {
                warterfall += tempStr(val)
            });
            $('.rowNews').append(warterfall);
        }
    });
};
index();

var nextPage = $('#nextPage')
nextPage.on('click', function() {
    dateDate--;
    if (dateDate == 0) {
        switch (dateMonth) {
            case 1:
                dateDate = 31;
                dateMonth--;
                break;
            case 2:
                dateDate = 28;
                dateMonth--;
                break;
            case 3:
                dateDate = 31;
                dateMonth--;
                break;
            case 4:
                dateDate = 30;
                dateMonth--;
                break;
            case 5:
                dateDate = 31;
                dateMonth--;
                break;
            case 6:
                dateDate = 30;
                dateMonth--;
                break;
            case 7:
                dateDate = 31;
                dateMonth--;
                break;
            case 8:
                dateDate = 31;
                dateMonth--;
                break;
            case 9:
                dateDate = 30;
                dateMonth--;
                break;
            case 10:
                dateDate = 31;
                dateMonth--;
                break;
            case 11:
                dateDate = 30;
                dateMonth--;
                break;
            case 12:
                dateDate = 31;
                dateMonth--;
                break;
            default:
                break;
        }
    }
    (function() {
        $.ajax({
            type: "get",
            url: "https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=2017-" + dateMonth + "-" + dateDate + "&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1",
            data: "data",
            dataType: "jsonp",
            success: function(data) {
                var warterfall = '';
                var data = data.recommend_feeds
                    // console.log(dataIndex);
                $.each(data, function(index, val) {
                    warterfall += tempStr(val)
                        // console.log(index)
                });
                $('.rowNews').append(warterfall);
            }
        });
    })();
})