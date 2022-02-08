function bgColorChang() {
    document.body.style.backgroundColor = "red";
}



const blueButton = document.getElementById("bluebutton");
// handle the button click by function name
blueButton.onclick = funName;


function funName() {
    document.body.style.backgroundColor = "blue";
    document.getElementById("textcolor").style.color = "#fff";
}


const yellowButton = document.getElementById("yellowbutton");
// anonymous function 
yellowButton.onclick = function () {
    document.body.style.backgroundColor = "yellow";

}


// addEventListener use direct 


document.getElementById("pinkbutton").addEventListener('click', function () {
    document.body.style.backgroundColor = "pink";
})

// input text change

document.getElementById("clickChange").addEventListener('click', function () {
    const inputText = document.getElementById("input-text");
    document.getElementById("chang-text").innerHTML = inputText.value;
    inputText.value = "";
});

// addEventListener  for comment Box
document.getElementById("commernt-submit").addEventListener('click', function () {
    // get user comment 
    const commentBox = document.getElementById("comment-box");
    //create a event 
    const userComment = document.createElement("p");
    // add value in user comment element
    userComment.innerText = commentBox.value;
    commentBox.value = "";
    // show comment in display
    const comments = document.getElementById("comments");
    comments.appendChild(userComment);

});