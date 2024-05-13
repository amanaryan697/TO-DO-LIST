const textarea = document.querySelector(".text");

const but = document.querySelector(".but")


const list = document.querySelector(".tolist")

but.addEventListener("click" ,todolist);
function todolist(){

     const to =document.createElement("div");
     to.classList.add("itemall");
     const item =document.createElement("p");
     item.innerHTML=textarea.value;
     item.classList.add("item");

     to.appendChild(item);
     if (textarea.value=='') return;
     
     const dele= document.createElement("button");
     to.appendChild(dele);

     dele.innerHTML='<i class="fa-solid fa-trash"></i>';
     dele.classList.add("trash");

     list.appendChild(to);
     textarea.value='';
   
}

// for deleting purpose
list.addEventListener("click" ,deleteitem);
function deleteitem(e){
    const item =e.target;
    console.log(item);

    if(item.classList[0] ==="trash"){
        const parent =item.parentElement;
        parent.remove();
    }

}


