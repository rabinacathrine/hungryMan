/*The keycodes are:

left = 37
up = 38
right = 39
down = 40

*/
var objImage = null;
var fooImage = null;
var enemy = null;
var score = 20;
var level = 1;

function init() {
    objImage = document.getElementById("man");
    fooImage = document.getElementById("burger");
    enemy = document.getElementById("enemy");
    enemy.style.position = "relative";
    objImage.style.position = 'relative';
    objImage.style.left = '0px';
    objImage.style.top = '0px';
    fooImage.style.top = "-370px";
    fooImage.style.left = "1180px";
    enemy.style.top = "-460";
    enemy.style.left = "0px";
}

function move(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
    }
}

function moveLeft() {
    if ((parseInt(objImage.style.left) - 5) >= -45)
        objImage.style.left = parseInt(objImage.style.left) - 10 + 'px';
    console.log(objImage.style.left)
    Win()
}

function moveUp() {
    if ((parseInt(objImage.style.top) - 5) >= -460)
        objImage.style.top = parseInt(objImage.style.top) - 10 + 'px';
    console.log(objImage.style.top)
    Win()
}

function moveRight() {
    if ((parseInt(objImage.style.left) + 5) < 1245)
        objImage.style.left = parseInt(objImage.style.left) + 10 + 'px';
    console.log(parseInt(objImage.style.left))
    Win()
}

function moveDown() {
    if ((parseInt(objImage.style.top) + 5) <= 5)
        objImage.style.top = parseInt(objImage.style.top) + 10 + 'px';
    console.log(objImage.style.top)
    Win()
}




function Win() {
    var fooImage = document.getElementById("burger");
    var scores = document.getElementById("score");
    if (((parseInt(objImage.style.top) <= -370) && (parseInt(objImage.style.left) >= 1200)) || ((parseInt(objImage.style.top) <= -370) && (parseInt(objImage.style.left) >= 1180))) {
        fooImage.style.display = "none";
        scores.innerHTML = score;
        window.alert("Congratulations You win the  level " + level);
        level++;
        score += 20;
        init();
        fooImage.style.display = "";
        //enemyFire();
    } else
        return true
}



/*function random() {
    return Math.ceil(Math.random() * 100)*10;
}



function enemyFire(){
var enemy = document.getElementById("enemy");
for(var )
enemy.style.left=random();
}*/









window.onload = init;