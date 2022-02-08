//getElementsByClassName get catch all ite class
const items = document.getElementsByClassName("item");
//apply all single item
// for (const item of items) {
//     //event handel in current items
//     item.addEventListener('click', function (event) {
//         //event.target and remove current items  
//         event.target.parentNode.removeChild(event.target);
//     });
// };

// catch button id by getElementById event 
document.getElementById('additem').addEventListener('click', function () {
    //creat a html element tag
    const liTag = document.createElement('li');
    liTag.innerText = 'Add New item';
    const addItem = document.getElementById('items');
    addItem.appendChild(liTag);

});
document.getElementById('items').addEventListener('click', function (event) {
    //delegate parent to child items
    event.target.parentNode.removeChild(event.target);
})