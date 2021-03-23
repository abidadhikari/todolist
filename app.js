const newTxt=document.querySelector("input");
const btn=document.querySelector("button");
btn.addEventListener('click',()=>{
    let checkTxt=newTxt.value.replace(" ","");
    if(checkTxt.length>0){
        const ul=document.querySelector("ul");
        ul.appendChild(createNewToDoList(newTxt.value));
        console.log(ul)
        newTxt.value="";
    }
    else{
        alert("Text field should not be empty")
        
    }

})
const createNewToDoList=(i)=>{
    let li=document.createElement("li");
    li.setAttribute("class", "listclass");
    li.textContent=i;
    var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("X"));
	li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",()=>{
        li.style.display="none";
    });
    return li;
}
