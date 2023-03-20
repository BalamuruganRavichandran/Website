let clickme1El=document.getElementById('clickme1');
let clickme2El=document.getElementById('clickme2');
let clickme3El=document.getElementById('clickme3');
let clickme4El=document.getElementById('clickme4');
let clickme5El=document.getElementById('clickme5');


let buttEl1=document.getElementById('butt1');
let buttEl2=document.getElementById('butt2');
let buttEl3=document.getElementById('butt3');
let buttEl4=document.getElementById('butt4');
let buttEl5=document.getElementById('butt5');

let fstEl=document.getElementById('fst')
let btnEl1=document.getElementById('btn1')
let btnEl2=document.getElementById('btn2')

function buttNone(){
    fstEl.style.fontFamily='Roboto'
    buttEl1.style.display='none'
    clickme1El.style.backgroundColor='#c4b8b8'
    buttEl2.style.display='none'
    clickme2El.style.backgroundColor='#c4b8b8'
    buttEl3.style.display='none'
    clickme3El.style.backgroundColor='#c4b8b8'
    buttEl4.style.display='none'
    clickme4El.style.backgroundColor='#c4b8b8'
    buttEl5.style.display='none'
    clickme5El.style.backgroundColor='#c4b8b8'
}
buttNone()

clickme1El.onclick=function(){
    buttNone()
    buttEl1.style.display='block'
    fstEl.style.fontFamily='Roboto'
    clickme1El.style.backgroundColor='blue'
    btnEl1.style.fontFamily='Roboto'
    btnEl2.style.fontFamily='Roboto'
    
}
clickme2El.onclick=function(){
    buttNone()
    buttEl2.style.display='block'
    fstEl.style.fontFamily="Nunito"
    clickme2El.style.backgroundColor='blue'
    btnEl1.style.fontFamily='Nunito'
    btnEl2.style.fontFamily='Nunito'
    
}
clickme3El.onclick=function(){
    buttNone()
    buttEl3.style.display='block'
    fstEl.style.fontFamily="Montserrat"
    clickme3El.style.backgroundColor='blue'
    btnEl1.style.fontFamily='Montserrat'
    btnEl2.style.fontFamily='Montserrat'
    
}
clickme4El.onclick=function(){
    buttNone()
    buttEl4.style.display='block'
    fstEl.style.fontFamily='Playfair Display'
    clickme4El.style.backgroundColor='blue'
    btnEl1.style.fontFamily='Playfair Display'
    btnEl2.style.fontFamily='Playfair Display'
    
}
clickme5El.onclick=function(){
    buttNone()
    buttEl5.style.display='block'
    fstEl.style.fontFamily='Roboto Mono'
    clickme5El.style.backgroundColor='blue'
    btnEl1.style.fontFamily='Roboto Monoy'
    btnEl2.style.fontFamily='Roboto Mono'
    
}
