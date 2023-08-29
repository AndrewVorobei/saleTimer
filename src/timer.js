function startCountdown(minutes) {
  const targetTime = new Date();
  targetTime.setMinutes(targetTime.getMinutes() + minutes);

  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");

  function updateTimer() {
    const currentTime = new Date();
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
      startCountdown(minutes);
      return;
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

const timer = startCountdown(30);

export { timer };
