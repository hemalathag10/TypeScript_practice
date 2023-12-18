
// SIMPLE SWITCH CASE

// Function to get the day of the week based on the day number
function getDayOfWeek(dayNumber: number): string {
    let dayName: string;

    switch (dayNumber) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        case 7:
            dayName = 'Sunday';
            break;
        default:
            dayName = 'Invalid day';
    }

    return dayName;
}

// Day numbers
const dayNumber1 = 3;
const dayNumber2 = 6;
const dayNumber3 = 8;

// Display day of the week for each day number
console.log(`Day ${dayNumber1} is ${getDayOfWeek(dayNumber1)}.`);
console.log(`Day ${dayNumber2} is ${getDayOfWeek(dayNumber2)}.`);
console.log(`Day ${dayNumber3} is ${getDayOfWeek(dayNumber3)}.`);

// GROUP CASE

// Function to get the type of the day (Weekday or Weekend)
function getDayType(dayNumber: number): string {
    let dayType: string;

    switch (dayNumber) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            dayType = 'Weekday';
            break;
        case 6:
        case 7:
            dayType = 'Weekend';
            break;
        default:
            dayType = 'Invalid day';
    }

    return dayType;
}

// Display the type of the day for each day number
console.log(`Day ${dayNumber1} is a ${getDayType(dayNumber1)}.`);
console.log(`Day ${dayNumber2} is a ${getDayType(dayNumber2)}.`);
console.log(`Day ${dayNumber3} is ${getDayType(dayNumber3)}.`);
