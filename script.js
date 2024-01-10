const inputBox = document.getElementById("input-box");
const ListContaoner = document.getElementById("list-container");

function addtask(){
    if(inputBox.value ===''){
        alert('You Must Write Something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        ListContaoner.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
document.getElementById("date").innerHTML = today.toDateString();

function time(){
    const data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    if(h < 10)
       h = "0" + h;
    if(m < 10)
       m = "0" + m;
    if(s < 10)
       s = "0" + s;

    document.getElementById("hour").innerHTML=h+":"+ m +":"+s;
    setTimeout('time()',500);
}

ListContaoner.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
} , false);

function saveData(){
    localStorage.setItem("data",ListContaoner.innerHTML);
}
function showTask(){
    ListContaoner.innerHTML = localStorage.getItem("data");
}
showTask();