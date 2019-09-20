function insertActivity(){
    const text = document.getElementById('activityText').value;
    if(text != null && text != "" && text != " "){
        const currentList = document.getElementsByClassName('currentList');
        const newId = currentList.length;
        const todoList = document.querySelector('.todoList');
        const listItem = document.createElement('p');
        const listDiv = document.createElement('div');
        listDiv.setAttribute("class", "currentList");
        listDiv.setAttribute("id", newId);
        const btnEdit = document.createElement("input");
        btnEdit.setAttribute("type", "button");
        btnEdit.setAttribute("value", "editar");
        btnEdit.setAttribute("name", "edit");
        btnEdit.setAttribute("onclick", `replaceActivity("${newId}")`);
        btnEdit.setAttribute("class", "btn btn-outline-warning")
        const btnDelete = document.createElement("input");
        btnDelete.setAttribute("type", "button");
        btnDelete.setAttribute("value", "eliminar");
        btnDelete.setAttribute("name", "delete");    
        btnDelete.setAttribute("onclick", `deleteActivity("${newId}")`);
        btnDelete.setAttribute("class", "btn btn-outline-danger");
        listItem.textContent = text;
        listDiv.appendChild(listItem);
        listDiv.appendChild(btnDelete);
        listDiv.appendChild(btnEdit);
        todoList.appendChild(listDiv);
    }
}
function replaceActivity(divId){
    const text = document.getElementById(divId).firstChild.innerHTML;
    const listItem = document.getElementById(divId).firstChild;
    var doc = prompt("Edita la actividad", text); 
    if(doc != null && doc != "" && doc != " "){ 
        listItem.textContent = doc; 
    }
}
function deleteActivity(divId){
    const parentDiv = document.querySelector('.todoList')
    const divToDelete = document.getElementById(divId);
    parentDiv.removeChild(divToDelete);
    const currentList = document.getElementsByClassName('currentList');
    for(var i=0; i<currentList.length; i++){
        currentList[i].setAttribute("id", i);
        const btnEdit = currentList[i].children[2];
        btnEdit.setAttribute("onclick", `replaceActivity("${i}")`);
        const btnDelete = currentList[i].children[1];
        btnDelete.setAttribute("onclick", `deleteActivity("${i}")`);
    }
}