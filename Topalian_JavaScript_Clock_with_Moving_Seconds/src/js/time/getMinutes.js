// getMinutes.js

function getMinutes()
{
    let dateTime = new Date();

    let minutes = dateTime.getMinutes();

    // add a zero if less than 10
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    return minutes;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

