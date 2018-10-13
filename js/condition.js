$("#find").click(function (e) {
    e.preventDefault();

    // console.log(x);

});
var x = $("#city").val();
var conLy = $('.constantly');
var fe = $('.future')
var tips = $('.tips')
$.get("https://www.tianqiapi.com/api/", {
        version: 'v1',
        city: x
    },
    function (data, textStatus, jqXHR) {
        // console.log(data);
        // console.log(textStatus);
        // console.log(jqXHR);
        // console.log(data.city);

        $(".cityDiv").append('<p class="cityP">' + data.city + '</p>');
        $(".cityDiv").append('<p class="cityGX">' + data.update_time + '</p>');
        $(".cityDiv").append('<p class="cityBH">' + data.cityid + '</p>');
        console.log(data.data);
        var _data = data.data[0];
        $('.condition').append('<i class="tem">' + _data.tem2 + '~' + _data.tem1 + '</i><br>');
        if (_data.tem1 === _data.tem2) {
            $('.tem').remove();
            $('.condition').append('<i class = "temFu">' + _data.tem2 + '</i><br>');
        }
        // 风向
        $('.condition').append('<i class = "wind">' + _data.win[0] + '&nbsp;&nbsp;' + data.data[0].win_speed + '</i><br>');
        $('.condition').append('<a class = "level">' + _data.air_level + '</a><br>');
        $.each(_data.hours, function (i, v) {
            var inday = v.day;
            var n = inday.slice(3, 6)
            var l = n.replace('时', ':00')
            // console.log(l);
            //  console.log(_data.hours);
            conLy.append('<div class="constantly-data"></div>')
            var x = $('.constantly .constantly-data')
            x.eq(i).append('<a class="day_hours">' + l + '</a><br>');
            x.eq(i).append('<a>' + v.tem + '</a><br>');
            x.eq(i).append('<a>' + v.wea + '</a>');
        });
        var ly = $('.constantly-data')
        for (var i = 0; i < ly.length; i++) {
            // const element = array[i];
            var tly = ly.innerWidth() * (i + 4 / 3)
        }
        // console.log(tly);
        conLy.css('width', tly)
        var future = data.data;
        fe.append('<div><a class="day">' + future[1].day + '</a><a>' + future[1].wea + '</a><a>' + future[1].tem2 + '~' + future[1].tem1 + '</a></div>');
        fe.append('<div><a class="day">' + future[2].day + '</a><a>' + future[2].wea + '</a><a>' + future[2].tem2 + '~' + future[2].tem1 + '</a></div>');
        fe.append('<div><a class="day">' + future[3].day + '</a><a>' + future[3].wea + '</a><a>' + future[3].tem2 + '~' + future[3].tem1 + '</a></div>');
        fe.append('<div><a class="day">' + future[4].day + '</a><a>' + future[4].wea + '</a><a>' + future[4].tem2 + '~' + future[4].tem1 + '</a></div>');
        fe.append('<div><a class="day">' + future[5].day + '</a><a>' + future[5].wea + '</a><a>' + future[5].tem2 + '~' + future[5].tem1 + '</a></div>');
        // $.each(data.data, function (index, value) {
        //     // console.log(data.data);
        //     // console.log(value);
        //     //天
        //     // $(".condition").append('<div class="day">' + value.day + '</div><br>');
        //     // console.log(value.hours);
        //     // 日期
        //     // $('.condition').append('<i>' + value.date + '</i>');
        //     // 星期
        //     // $('.condition').append('<i class="week">' + value.week + '</i><br>');
        //     // 天气情况
        //     $('.condition').append('<i>' + value.wea + '</i><br>');
        //     // 温度
        //     $('.condition').append('<i class="tem">' + value.tem2 + '~' + value.tem1 + '</i><br>');
        //     if(value.tem1===value.tem2){
        //         $('.tem').remove();
        //         $('.condition').append('<i class = "temFu">' + value.tem2 + '</i><br>');
        //     }
        //     // 风向
        //     $('.condition').append('<i>' + value.win[0] + '</i><br>');
        //     // 风速
        //     $('.condition').append('<i>' + value.win_speed + '</i><br>');
        //     // 时况
        //     // $.each(this.hours, function (index, value) { 
        //     //      console.log(value.day);

        //     // });

        // });
    },
    "json"
);