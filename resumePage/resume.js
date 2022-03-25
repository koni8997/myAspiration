//스크롤에 따른 텍스트 효과 적용

const firstExperience=document.querySelector('.firstExperience');
const secondExperience=document.querySelector('.secondExperience');
const thirdExperience=document.querySelector('.thirdExperience');
const fourthExperience=document.querySelector('.fourthExperience');

const letsGoTxt=document.querySelectorAll('.letsGo span');

window.addEventListener('scroll',function(event){
    let y=window.pageYOffset;
    
    if(y<100){
        firstExperience.style.opacity="0.2";
        secondExperience.style.opacity="0.2";
        thirdExperience.style.opacity="0.2";
        fourthExperience.style.opacity="0.2";

    }else if(y>100){
        firstExperience.style.animation="slide-in-left 2s ease-in-out both";
        secondExperience.style.animation="slide-in-right 4s ease-in-out both";
        thirdExperience.style.animation="slide-in-left 6s ease-in-out both";
        fourthExperience.style.animation="slide-in-right 8s ease-in-out both";
    }else if(y>3000){
        letsGoTxt[0].style.animation="leftToRight 1s forwards";
        letsGoTxt[1].style.animation="rightToLeft 2s forwards";
        letsGoTxt[2].style.animation="leftToRight 3s forwards";
        letsGoTxt[3].style.animation="rightToLeft 4s forwards";

    }
}
)

//타이핑 효과
const content = "개 발 자.";
const text = document.querySelector(".wrapper1");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 500)