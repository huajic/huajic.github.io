/*当前时间*/
function showTime() {
    var date = new Date(); //实例一个时间对象；
    var Year = date.getFullYear(); //获取系统的年；
    var Month = date.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
    var Dates = date.getDate(); //获取系统日期,
    var week = date.getDay(); //星期 
    var Hour = date.getHours(); //获取系统时
    //当数值为个数时，在前面加0
    if (Hour < 10) {
        Hour = '0' + Hour;
    } else {
        Hour = Hour;
    }
    var Minute = date.getMinutes(); //分
    if (Minute < 10) {
        Minute = '0' + Minute;
    } else {
        Minute = Minute;
    }
    var Second = date.getSeconds(); //秒
    if (Second < 10) {
        Second = '0' + Second;
    } else {
        Second = Second;
    }
    //判断星期几 
    var weeks = ["日", "一", "二", "三", "四", "五", "六"];
    var getWeek = "星期" + weeks[week];
    document.getElementById('datetime').innerHTML = "现在是：" + Year + "年" + Month + "月" + Dates + "日" + " " + getWeek + " " + Hour + ":" + Minute + ":" + Second;
    setTimeout('showTime()', 500); //每隔1秒获取一次时间
}