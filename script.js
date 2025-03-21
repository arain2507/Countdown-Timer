function startCountdown() {
    let inputTime = document.getElementById("datetime").value;
    if (!inputTime) {
        alert("Please enter a valid date and time.");
        return;
    }
    document.getElementById("timer-container").style.visibility = "visible";
    let endTime = new Date(inputTime).getTime();
    function updateTimer() {
        let now = new Date().getTime();
        let remainingTime = endTime - now;

        if (remainingTime > 0) {
            let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            
            document.querySelectorAll(".progress").forEach(el => {
                let percentage = el.id.includes("seconds") ? seconds / 60 : el.id.includes("minutes") ? minutes / 60 : el.id.includes("hours") ? hours / 24 : days / 30;
                el.style.strokeDashoffset = 314 - (314 * percentage);
                el.style.stroke = percentage > 0.5 ? "#4caf50" : percentage > 0.2 ? "#ffcc00" : "#ff0000";
            });
            
            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;
            
            setTimeout(updateTimer, 1000);
        } else {
            alert("Time's up!");
        }
    }
    updateTimer();
}