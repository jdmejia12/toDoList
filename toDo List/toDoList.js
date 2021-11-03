const formJ = document.querySelector('form')
document.addEventListener('DOMContentLoaded', () =>{
    formJ.addEventListener('submit', (e)=>{
        e.preventDefault(); 
        handleToDo(e.target.textBoxtoDo.value)//takes evnt.target'textbox'.targetID.value of target
        formJ.reset()
    })
}) 

function handleToDo(todo){
    let p = document.createElement('p');
    let del = document.createElement('button');
    del.textContent = 'x';
    p.textContent = `${todo} `;
    p.appendChild(del);
    console.log(p)
    document.querySelector('#list_container').appendChild(p);
    
    del.addEventListener('click', ()=>{
        p.remove()
    })
}

//alternate to anonymous del function, create callback
// function delFunk(e){
//     e.target.parentNode.remove()
// }