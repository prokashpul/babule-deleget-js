// delete info button

document.getElementById("delete-btn").addEventListener('click', function () {
    document.getElementById('delete').style.display = 'none';
});

// focus input 

document.getElementById("inputid").addEventListener('focus', function () {
    document.body.style.backgroundColor = "red";
});
// blur element handel
document.getElementById("inputid").addEventListener('blur', function () {
    document.body.style.backgroundColor = "transparent";
});
// keyup element handel & event 
document.getElementById("inputid").addEventListener('keyup', function (event) {
    const inputValue = document.getElementById("inputid");
    if (event.target.value == 'delete') {
        document.getElementById('delete-btn').removeAttribute('disabled');
    } else {
        document.getElementById('delete-btn').setAttribute('disabled', true);
    };

});
// change event handel 
document.getElementById("inputid").addEventListener('change', function () {
    const inputValue = document.getElementById("inputid");
    console.log(inputValue.value)
});



// bubble use

document.getElementById("second-item").addEventListener('click', function (event) {
    console.log("secound item click");
    event.stopPropagation();
});
// parents setup
document.getElementById("items").addEventListener('click', function () {
    console.log("ul item click");
    event.stopImmediatePropagation();
});
document.getElementById("section-container").addEventListener('click', function () {
    console.log("section-container item click");
});