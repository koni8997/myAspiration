//다크모드 버튼
const toggle=document.querySelector('#toggle');
const body=document.querySelector('body');
const section=document.querySelectorAll('.section');
const a=document.querySelectorAll('a');
const li=document.querySelectorAll('li');
const h1=document.querySelectorAll('h1');
const spanList=document.querySelectorAll('span');
const card=document.querySelectorAll('.card');



const copyRight=document.querySelector('.copyRight');
const headWrapper=document.querySelector('.header-wrapper');

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active'); //버튼컬러도 변경
    body.classList.toggle('active'); //바디컬러도 변경
    copyRight.classList.toggle('active');//카피라잇텍스트
    headWrapper.classList.toggle('active');//네브바

    //queryselectall 즉, 2개 이상 요소 선택 시에는 반복문 필수
    //section 배경 변경
    for(i=0;i<section.length;i++){
        section[i].classList.toggle('active');
    };

    // span 변경
    for(i=0;i<spanList.length;i++){
        spanList[i].classList.toggle('active');
    };

    //a 변경
    for(i=0;i<a.length;i++){
        a[i].classList.toggle('active');
    };

    //li 변경
    for(i=0;i<li.length;i++){
        li[i].classList.toggle('active');
    };

    //h1 변경
    for(i=0;i<h1.length;i++){
        h1[i].classList.toggle('active');
    };

    //card 변경
    for(i=0;i<card.length;i++){
        card[i].classList.toggle('active');
    };
   
});


//스크롤에 따른 텍스트 효과 적용

const firstExperience=document.querySelector('.firstExperience');
const secondExperience=document.querySelector('.firstExperience');
const thirdExperience=document.querySelector('.thirdExperience');
const fourthExperience=document.querySelector('.fourthExperience');

window.addEventListener('scroll',function(event){
    let y=window.pageYOffset;

    if(y<300){
        firstExperience.style.opacity="0.2";
    }else if(y>300){
        firstExperience.style.animation="slide-in-left 1s ease-in-out both";
    }
}
)