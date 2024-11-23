// getHours.js

function getHours()
{
    let dateTime = new Date();

    let hours = dateTime.getHours();

    // convert from military time
    if (hours > 12)
    {
        hours -= 12;
    }
    else if (hours === 0)
    {
        hours = 12;
    }

    return hours;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

