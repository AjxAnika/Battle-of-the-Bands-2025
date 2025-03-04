// Countdown Timer
const eventDate = new Date("July 20, 2025 18:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "🎉 The battle begins!";
    }
}

setInterval(updateCountdown, 1000);
