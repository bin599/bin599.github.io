let targetDate1 = new Date('2025-01-06T00:00:00');
let targetDate2 = new Date('2024-07-06T00:00:00');
let targetDate = targetDate1;
let showMilliseconds = false;

document.getElementById("toggleDate").addEventListener("click", function() {
    if (targetDate.getTime() === targetDate1.getTime()) {
        targetDate = targetDate2;
        document.getElementById("timeInfo").innerHTML = "2时间";
    } else {
        targetDate = targetDate1;
        document.getElementById("timeInfo").innerHTML = "1时间";
    }
    updateCountdown();
});

document.getElementById("toggleMilliseconds").addEventListener("click", function() {
    showMilliseconds = !showMilliseconds;
    updateCountdown();
});

function updateCountdown() {
    let now = new Date();
    let distance = targetDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let milliseconds = distance % 1000;

    let countdownText = days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒 ";
    if (showMilliseconds) {
        // 毫秒补零 
        if (milliseconds < 10) {
            countdownText += "00" + milliseconds + "毫秒";
        }
        else if (milliseconds < 100){
            countdownText += "0" + milliseconds + "毫秒";
        }
        else {
            countdownText += milliseconds + "毫秒";
        }
    }

    document.getElementById("countdown").innerHTML = countdownText;
    
    // 初始化或更新时间信息
    document.getElementById("timeInfo").innerHTML = targetDate.getTime() === targetDate1.getTime() ? "距离首考：" : "距离学考：";
    
    setTimeout(updateCountdown, showMilliseconds ? 1 : 1000);
}

// 初始化
document.getElementById("timeInfo").innerHTML = "1时间";
updateCountdown();
