// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
// function addTask(){
//     if(inputBox.value === ''){
//         alert("You must write something!");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHtml = "appendChild(node:any):any
//         li.appendChild(span);
//     }
//     inputBox.value= "";
// }




const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        // Creating a span to hold a delete button
        let span = document.createElement("span");
        span.textContent = "❌";  // A simple delete button (you can use text or an icon)
        span.style.cursor = "pointer";  // Indicate that it's clickable
        span.style.marginLeft = "10px"; // Add some space between the task and the delete button

        // Adding an event listener to the span to remove the task
        span.addEventListener('click', function() {
            listContainer.removeChild(li);
        });

        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

