// shortcuts.js

function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichMessage)
{
    let result = console.log(whichMessage);
    return result;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// worldVariables.js

let timer001;// makeDateTimeDiv.js

function makeDateTimeDiv()
{
    let dateTimeDiv = ce('div');
    dateTimeDiv.id = 'dateTimeDiv';
    dateTimeDiv.title = 'dateTimeDiv';
    ge('mainDiv').append(dateTimeDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeInterface.js

function makeInterface()
{
    makeMainDiv();

    makeDateTimeDiv();

    makeClockContainer();
    makeTimeLine();
    makeSecondsRectangle();

    makeTitleOfApp();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeMainDiv.js

function makeMainDiv()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.title = 'mainDiv';
    mainDiv.className = 'mainDiv';
    mainDiv.style.position = 'absolute';
    mainDiv.style.top = 30 + 'px';
    ba(mainDiv);

    makeElementDraggable(mainDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeTitleOfApp.js

function makeTitleOfApp()
{
    let mainDiv = ce('div');
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = '20px';
    mainDiv.style.top = '2px';
    mainDiv.style.zIndex = 1;
    ba(mainDiv);

    //-//

    let titleOfApp = ce('a');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.textContent = 'Topalian JavaScript Clock with Moving Seconds';
    titleOfApp.href = 'https://github.com/christophertopalian/';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontSize = '17px';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.style.textDecoration = 'none';
    titleOfApp.style.color = 'rgb(100, 100, 100)';
    mainDiv.append(titleOfApp);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeClockContainer.js

function makeClockContainer()
{
    let clockContainer = ce('div');
    clockContainer.id = 'clockContainer';
    clockContainer.title = 'clockContainer';
    clockContainer.style.display = 'flex';
    clockContainer.style.flexDirection = 'column';
    ge('mainDiv').append(clockContainer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeSecondsRectangle.js

function makeSecondsRectangle()
{
    let secondsRectangle = ce('div');
    secondsRectangle.id = 'secondsRectangle';
    secondsRectangle.className = 'secondsRectangle';
    ge('clockContainer').append(secondsRectangle);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeTimeLine.js

function makeTimeLine()
{
    let timeLine = ce('div');
    timeLine.id = 'timeLine';
    timeLine.title = 'timeLine';
    timeLine.className = 'timeLine';
    ge('clockContainer').append(timeLine);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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

// getDayOfMonth.js

function getDayOfMonth()
{
    let dateTime = new Date();

    let dayOfMonth = dateTime.getDate();

    return dayOfMonth;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// getMonthName.js

function getMonthName()
{
    let dateTime = new Date();

    let month = dateTime.getMonth();

    if (month == 0)
    {
        return "January";
    }
    if (month == 1)
    {
        return "February";
    }
    if (month == 2)
    {
        return "March";
    }
    if (month == 3)
    {
        return "April";
    }
    if (month == 4)
    {
        return "May";
    }
    if (month == 5)
    {
        return "June";
    }
    if (month == 6)
    {
        return "July";
    }
    if (month == 7)
    {
        return "August";
    }
    if (month == 8)
    {
        return "September";
    }
    if (month == 9)
    {
        return "October";
    }
    if (month == 10)
    {
        return "November";
    }
    if (month == 11)
    {
        return "December";
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// getAmOrPm.js

function getAmOrPm()
{
    let amOrPm;

    // am or pm
    if (getHours() < 12)
    {
        amOrPm = "AM";
    }
    else
    {
        amOrPm = "PM"
    }

    return amOrPm;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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

// getSeconds.js

function getSeconds()
{
    let dateTime = new Date();

    let seconds = dateTime.getSeconds();

    return seconds;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// startTimer.js

function startTimer()
{
    timer001 = setInterval(function()
    {
        updateDateTime();
    }, 1000);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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

// makeElementDraggable.js

// creating event handler for mouse down
function createMouseDownHandler(element, state)
{
    return function(e)
    {
        // ignore mouse down events on textarea or input elements
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        state.startX = e.clientX;
        state.startY = e.clientY;

        document.onmousemove = createMouseMoveHandler(element, state);

        document.onmouseup = createMouseUpHandler();
    };
}

// creating event handler for mouse move
function createMouseMoveHandler(element, state)
{
    return function(e)
    {
        // ignore mouse move events on textarea or input elements
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        let deltaX = state.startX - e.clientX;
        let deltaY = state.startY - e.clientY;

        state.startX = e.clientX;
        state.startY = e.clientY;

        let newTop = element.offsetTop - deltaY;
        let newLeft = element.offsetLeft - deltaX;

        element.style.top = newTop + "px";
        element.style.left = newLeft + "px";
    };
}

// creating event handler for mouse up
function createMouseUpHandler()
{
    return function()
    {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}

// make an element draggable
function makeElementDraggable(element)
{
    let state = { startX: 0, startY: 0 };

    element.onmousedown = createMouseDownHandler(element, state);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    updateDateTime();

    startTimer();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
