const span=document.querySelector('.randomWord');
const button=document.querySelector('.hidenBtn');
const bg=document.querySelector('.whoAmI');

function randomPick(arr){
  const random=Math.floor(Math.random()*arr.length);
  return arr[random]
}

var wordArray=['활발한','성실한','호기심이 많은','열정적인','유쾌한','엉뚱한','몰입하는','조화로운','끈덕진','해야할 것을 아는','주체적인'];


let time = 1000;
    setInterval( 
        function(){
            if(time > 0){ 
                time = time-1;
                button.click();
            }
        },500
    )
button.addEventListener('click',function(){
  span.innerText=randomPick(wordArray);
bg.style.backgroundColor="#"+Math.round(Math.random()*0xffffff).toString(16);
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
