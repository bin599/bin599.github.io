function detectDevice() {
    var userAgent = navigator.userAgent;
    var os = "Unknown";
// 检测操作系统版本
    if (userAgent.match(/Windows NT 10.0/i)) {
        os = "Windows 10 , Windows 11 或 WindowsServer 2016 以后的服务器系统";
    } else if (userAgent.match(/Windows NT 6.3/i)) {
        os = "Windows 8.1 或 WindowsServer 2012 R2";
    } else if (userAgent.match(/Windows NT 6.2/i)) {
        os = "Windows 8 或 WindowsServer 2012";
    } else if (userAgent.match(/Windows NT 6.1/i)) {
        os = "Windows 7 或 WindowsServer 2008 R2";
    } else if (userAgent.match(/Windows NT 6.0/i)) {
        os = "Windows Vista 或 WindowsServer 2008";
    } else if (userAgent.match(/Windows NT 5.2/i)) {
        os = "Windows XP X64 或 WindowsServer 2003";
    } else if (userAgent.match(/Windows NT 5.1/i)) {
        os = "Windows XP";
    } else if (userAgent.match(/Mac OS X 10_17/i)) {
        os = "macOS Sonoma";
    } else if (userAgent.match(/Mac OS X 10_16/i)) {
        os = "macOS Big Sur";
    } else if (userAgent.match(/Mac OS X 10_15/i)) {
        os = "macOS Catalina";
    } else if (userAgent.match(/Mac OS X 10_14/i)) {
        os = "macOS Mojave";
    } else if (userAgent.match(/Mac OS X 10_13/i)) {
        os = "macOS High Sierra";
    } else if (userAgent.match(/Mac OS X 10_12/i)) {
        os = "macOS Sierra";
    //不是安卓的Linux
    } else if (userAgent.match(/^(?!.*Android).*Linux.*$/i)) {
        os = "Linux";
    //是安卓匹配后两位数字
    } else if (userAgent.match(/Android (\d{2})/i)) {
        os = "Android " + RegExp.$1;
    //是IOS匹配后两位数字
    } else if (userAgent.match(/^(?!.*iPad).*iPhone OS (\d{2})/i)) {
        os = "iOS " + RegExp.$1;
    //是iPadOS匹配后两位数字
    } else if (userAgent.match(/CPU iPhone OS (\d{2})/i)) {
        os = "iPadOS " + RegExp.$1;
    }
    
    var sysos = document.getElementById("os");
    sysos.innerHTML = os;
}
