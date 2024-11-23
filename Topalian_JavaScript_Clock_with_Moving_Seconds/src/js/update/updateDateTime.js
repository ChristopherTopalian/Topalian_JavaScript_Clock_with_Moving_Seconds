// updateDateTime.js

function updateDateTime()
{
    if (ge("dateTimeDiv"))
    {
        ge("dateTimeDiv").innerHTML = 
        getHours() + ":" + getMinutes() + " " + getAmOrPm() + ', ' +
        getDayName() + ", " +
        getMonthName() + " " +
        getDayOfMonth();
    }

    //-//

    // adjust size of secondsRectangle
    let theElement = ge("secondsRectangle");
    theElement.style.backgroundColor = "rgb(128, 128, 128)";

    if (getSeconds() == 0)
    {
        theElement.style.width = 0 + "px";
    }
    else
    {
        theElement.style.width = getSeconds() + "px";
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

