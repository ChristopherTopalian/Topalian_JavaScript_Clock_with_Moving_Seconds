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

