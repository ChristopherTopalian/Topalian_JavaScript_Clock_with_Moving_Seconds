// getDayName.js

function getDayName()
{
    let dateTime = new Date();

    let day = dateTime.getDay();

    if (day == 0)
    {
        return "Sunday";
    }
    if (day == 1)
    {
        return "Monday";
    }
    if (day == 2)
    {
        return "Tuesday";
    }
    if (day == 3)
    {
        return "Wednesday";
    }
    if (day == 4)
    {
        return "Thursday";
    }
    if (day == 5)
    {
        return "Friday";
    }
    if (day == 6)
    {
        return "Saturday";
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

