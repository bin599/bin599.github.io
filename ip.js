$(document).ready(function() {
    $.getJSON("https://api.vore.top/api/IPdata", function(data) {
        var ip = data.ipinfo.text;
        var locicp = data.adcode.o;
        $("#ip").text("你的IP地址: " + ip);
        $("#locicp").text("你的接入点&运营商: " + locicp);
    });
});

$(document).ready(function() {
    $.getJSON("https://api.vore.top/api/Weather", function(data2) {
        var weather = data2.data.tianqi.weather;
        $("#weather").text("当地天气: " + weather );
    });
});
