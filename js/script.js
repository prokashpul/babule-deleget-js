const articleTags = document.getElementsByTagName("article");
for (const art of articleTags) {
    art.style.backgroundColor = "#3A3B3C";
    art.style.color = "white";
    art.style.paddingBottom = "20px";
    art.style.marginBottom = "20px";
    art.style.borderRadius = "10px";
}
const myTags = document.getElementsByTagName("h3");
console.log(myTags)

for (const tag of myTags) {
    tag.style.color = "red";
    tag.style.border = "2px solid red";
    tag.style.padding = "10px"
    tag.style.backgroundColor = "yellow";
}

const myClass = document.getElementsByClassName("blogs");
for (const blog of myClass) {
    blog.style.backgroundColor = "green";
    blog.style.padding = "10px";
}
const selector = document.querySelectorAll(".blog p");
for (const p of selector) {
    p.style.margin = "14px";
}


// create a item and and add
const item = document.createElement("li"); //create a element li
item.classList.add("blog-item");
item.innerText = "blog-6"; // add text in element
const ul = document.getElementById("blogname"); //target at ul tag
ul.appendChild(item); // add item in ul tag
ul.setAttribute("title", "hello")
const blogItem = document.querySelector(".blog-item").style.color = "red";