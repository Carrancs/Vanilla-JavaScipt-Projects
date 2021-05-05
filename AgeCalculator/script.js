
// alert("I am connected!");



const months = [31,28,31,30,31.30,31,31,30,31,30,31];

function ageCalculate() {
    // alert("Hi");
    // alert(document.getElementById("date-input").value);
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);

    let birthMonth;
    let birthDate;
    let birthYear;

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    }

    // alert(birthDetails.date);

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    // Validate Input Date
    if (birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) || (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)) {
        alert("Not Born Yet!");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }
    console.log(birthYear + " Years,", birthMonth + " Months,", birthDate + " Days");

    displayResult(birthYear, birthMonth, birthDate);
}

// Display the result function
function displayResult(bYear, bMonth, bDate) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}


// Check for a leap year function
let yearType;
function leapChecker(year) {
    if (year % 4 == 00 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
        yearType = "Leap Year";
    }

    console.log(year, yearType);
}
