const currentDayOutput = document.getElementById("current-day-output");
const weekdayBtn = document.getElementById("weekday-btn");
const wrapper = document.getElementById("wrapper");
const dayAndTimeDescription = document.getElementById("time-description");

const currentDate = new Date();

switch (currentDate.getDay()) {
  case 0:
    currentDayOutput.innerText = "Today is sunday, the day for rest. No node today";
    break;
  case 1:
    currentDayOutput.innerText = "Today is not the day for Node Js, but you just wait until tommorow!";
    break;
  case 2:
    currentDayOutput.innerText = "Today is tuesday, AKA NODE DAY";
    break;
  case 3:
    currentDayOutput.innerText = "Nono, node was yesterday";
    break;
  case 4:
    currentDayOutput.innerText = "Atleast it's almost weekend, but no node unfortunately";
    break;
  case 5:
    currentDayOutput.innerText = "Weeks almost over, which means theres a new node lesson next week!";
    break;
  case 6:
    currentDayOutput.innerText = "Its saturday, chill, node is coming soon";
}

weekdayBtn.addEventListener("click", (e) => {
    const dateForBtn = new Date();
    dayAndTimeDescription.innerText = ""
    dayAndTimeDescription.innerText = `${dateForBtn}`;
    wrapper.appendChild(dayAndTimeDescription);

});

