let donetask = document.querySelector("#done");
let input = document.querySelector("#add-task");
let list = document.querySelector("#list-container");


function rr(){

if(input.value === ""){
    alert("enter the task first");
}
else{

    let newlist = document.createElement('li');
    newlist.innerHTML = `${input.value}
    <i class='bx bx-trash'></i>`;
    list.appendChild(newlist);
    input.value = "";
    newlist.querySelector('i').addEventListener('click', ()=>{

        newlist.remove();
        done();
        done(newlist.textContent.trim());
        // newlist.style.textDecoration = "line-through";
        // newlist.querySelector('i').remove();
    })      

}
}

function done(task){
        let doneelem = document.createElement('li');
        doneelem.textContent= task;
        donetask.appendChild(doneelem);
}