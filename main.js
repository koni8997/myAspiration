//다크모드 버튼
const toggle=document.querySelector('#toggle');
const body=document.querySelector('body');
const section=document.querySelectorAll('.section');
const a=document.querySelectorAll('a');
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

    // card 변경
    for(i=0;i<card.length;i++){
        card[i].classList.toggle('active');
    };

    
});



// // 웰컴 인사 타이핑 효과
// const content = "안녕하시렵니까,\n역동적인 프론트 개발자\n 김영건입니다.";
// const text = document.querySelector(".greetingText");
// let i = 0;

// function typing(){
//     let txt = content[i++];
//     text.innerHTML += txt=== "\n" ? "<br/>": txt;
//     if (i > content.length) {
//         text.textContent = "";
//         i = 0;
//     }
// }
// setInterval(typing, 200)




// 개발새발 텍스트 이동
// $(window).on("mousemove",function(event){
//     var valueY=event.pageY;
//     // console.log("y좌표",valueY);
//     if(valueY>900){
//         $(".one").animate({fontSize:"1.2em"},1000);
// 		$(".two").animate({fontSize:"1.2em"},2000);
//         $(".three").animate({fontSize:"1.2em"},3000);
//         $(".four").animate({fontSize:"1.2em"},4000);

//     }else if(valueY>1000){
//         $(".one").animate({color: 'red',fontSize:"2em"});
//     }
// });

// document.addEventListener("mousemove",function(e){
// 	var body=document.querySelector('.introduce'); /*바태그*/
// 	var heart=document.createElement('span'); /*하트*/
// 	heart.classList.add('heart');
// 	var x=e.offsetX;
// 	var y=e.offsetY;
// 	heart.style.left = x+'px'; /*하트의 x 좌표*/
// 	heart.style.top = y+'px'; /*하트의 y 좌표*/
// 	var size=Math.random()*100; /*2자리 숫자*/
// 	heart.style.width=10+size+'px'; /*하트의 너비는 10+랜덤*/
// 	heart.style.height=10+size+'px';/*하트의 높이는 10+랜덤*/
// 	body.appendChild(heart); /*바디에 하트를 하나씩 붙임*/
// 	setTimeout(function(){
// 		heart.remove(); /*5초 뒤에 바디의 하트를 하나씩 떼어버림*/
// 	},5000);
// })
