let displayLeft  = document.getElementById("display_left")
let displayRight = document.getElementById("display_right")

let left_count = 0;
let right_count = 0;


function add1_left(){ left_count += 1;
displayLeft.innerText = left_count;
}
function add2_left(){left_count += 2;displayLeft.innerText = left_count;}
function add3_left(){left_count += 3;displayLeft.innerText = left_count;}

function add1_right(){right_count += 1;displayRight.innerText = right_count;}
function add2_right(){right_count += 2;displayRight.innerText = right_count;}
function add3_right(){right_count += 3;displayRight.innerText = right_count;}

displayLeft.innerText = left_count;
displayRight.innerText = right_count;