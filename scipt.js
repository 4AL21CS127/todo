const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('listContainer');

function addTask(){
    if(inputBox.value===''){
        alert('You must write something!');
    }

    else{
        let li=document.createElement('li'); //creates list
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span')
        span.innerHTML='\u00d7';   //  x symbol is displayed
        li.appendChild(span);
    }

    inputBox.value=''    //removes after adding in the text-box
    saveData();
}

listContainer.addEventListener('click',function(e){  
    if(e.target.tagName === 'LI'){        //if we clicked on LI
        e.target.classList.toggle('checked'); //it will add check className,if it is already added it removes bacause of toggle
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){ //if we clicked on span
        e.target.parentElement.remove();  //it will remove parent element and remove li
        saveData();
    }

},false);


//it will be stored as it is even the web page is refreshed

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

//to display the data whenever we open the same web page

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}

showTask();