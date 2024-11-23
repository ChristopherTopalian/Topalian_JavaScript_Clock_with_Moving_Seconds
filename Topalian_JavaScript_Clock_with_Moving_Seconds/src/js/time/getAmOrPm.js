// getAmOrPm.js

function getAmOrPm()
{
    let hours = new Date().getHours();

    let amOrPm;

    if (hours < 12)
    {
        amOrPm = "AM";
    }
    else
    {
        amOrPm = "PM";
    }

    return amOrPm;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
