// Event Basics(click Event)

// creating

const ul = document.querySelector('ul');

let button = document.querySelector('.clickMe');
// console.log(eventElement);

button.addEventListener('click',function(){
    //console.log("Clicked Me");
   let li = document.createElement('li');
   li.textContent="somethings new added!"
   ul.append(li);  // add from last
   //ul.prepend(li) // add from start
})

// Removing of element

let elements = document.querySelectorAll('li');
console.log(elements);

elements.forEach(function(element){
    element.addEventListener('click',function(e){
       // console.log("item clicked!")
       console.log(e.target)
       e.target.style.textDecoration = "line-through"
       e.target.remove();
    })
})