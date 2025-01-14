let targetDate1 = new Date('2025-06-07T00:00:00');
let targetDate2 = new Date('2025-06-10T00:00:00');
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
    document.getElementById("timeInfo").innerHTML = targetDate.getTime() === targetDate1.getTime() ? "距离首考：" : "距离温一模：";
    
    setTimeout(updateCountdown, showMilliseconds ? 1 : 1000);
}

// 初始化
document.getElementById("timeInfo").innerHTML = "1时间";
updateCountdown();

// 靠近信息栏出现
const information_bar = document.getElementById('information_bar'); /* 获取方块元素 */
window.addEventListener('mousemove', function(event) {
    const posY = event.clientY; /* 获取鼠标的Y轴位置 */
    const windowH = window.innerHeight; /* 获取窗口的高度 */
    if (posY >= windowH - 200) { /* 如果鼠标靠近底部100px范围内 */
        information_bar.style.bottom = '20px'; /* 将方块移动到视口底部 */
    } else {
        information_bar.style.bottom = '-150px'; /* 将方块移回初始位置 */
    }
});
