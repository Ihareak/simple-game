class ActionOption{
    text;
    constructor(text){
        this.text=text;
    }
}

let optionIndex=0,options=[],logDiv,selectText;
function start(){
    document.getElementById("start").style.display="none";
    document.getElementById("game").style.display="block";
    logDiv=document.getElementById("logDiv"),selectText=document.getElementById("selectText");
}

function moveSelect(d){
    optionIndex+=d;
    if(optionIndex<0){
        optionIndex=options.length-1;
    }else if(optionIndex>=options.length){
        optionIndex=0;
    }
    selectText.textContent=options[optionIndex].text;
}

function addLog(text){
    logDiv.appendChild(document.createTextNode(text));
    logDiv.appendChild(document.createElement("br"));
}