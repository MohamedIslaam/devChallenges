const f_name=document.getElementById("name");
const f_mail=document.getElementById("mail");
const f_btn=document.getElementById("f-btn");
const s_btn=document.getElementById("s-btn");
const inc=document.getElementById("inc");
const nm=document.getElementById("nm");
const ml=document.getElementById("ml");
const show=document.getElementById("list");
const con=document.getElementsByClassName("container");
const dot=document.getElementsByClassName("d");
const skill=document.getElementsByClassName("op");

let pg=0;
con[pg].style.display="block"
let skillarr=[];
let obj={};

function creat(pos){
    const itm=document.createElement("li");
    show.appendChild(itm);
    itm.id="list"+(pg+1);
    itm.innerHTML=skillarr[pos]
}

function navi(){
    for(let i=0;i<=pg;i++){
        dot[i].style.backgroundColor="#753EE4"
        dot[i].style.boxShadow="none";
    }
    dot[pg].style.boxShadow="0px 0px 1px 5px #342D61";
}

var dis=()=>{
    inc.innerHTML=pg+1;
    for(let i=0;i<con.length;i++){
        con[i].style.display="none"
    }
    con[pg].style.display="block"
    navi();
}

for(let i=0;i<skill.length;i++){
    skill[i].addEventListener('click',()=>{
        skillarr.push(skill[i].innerHTML)
    })
}

f_btn.addEventListener('click',()=>{
    obj["name"]=f_name.value;
    obj["mail"]=f_mail.value;
    pg++;
    console.log(pg)
    dis();
});

s_btn.addEventListener('click',()=>{
    nm.innerHTML=obj["name"]
    ml.innerHTML=obj["mail"]
    for(let i=0;i<skillarr.length;i++){
        creat(i);
    }
    pg++;
    dis();
});

document.getElementById("fn-btn").addEventListener('click',()=>{window.location.reload()})