window.onload = function () {
  // 웰컴 인사 타이핑 효과
  const content = "안녕하시렵니까,\n역동적인 프론트 개발자\n 김영건입니다.";
  const text = document.querySelector(".greetingText");
  let i = 0;

  function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i > content.length) {
      text.textContent = "";
      i = 0;
    }
  }
  setInterval(typing, 200);

  //다크모드 버튼
  const toggle = document.querySelector("#toggle");
  const body = document.querySelector("body");
  const section = document.querySelectorAll(".section");
  const a = document.querySelectorAll("a");
  const spanList = document.querySelectorAll("span");
  const card = document.querySelectorAll(".card");
  const copyRight = document.querySelector(".copyRight");
  const headWrapper = document.querySelector(".header-wrapper");
  const li = document.querySelectorAll("li");
  const h1 = document.querySelectorAll("h1");
  // const sendMail = document.querySelector("#sendMail");
  const footer = document.querySelector("footer");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active"); //버튼컬러도 변경
    body.classList.toggle("active"); //바디컬러도 변경
    copyRight.classList.toggle("active"); //카피라잇텍스트
    headWrapper.classList.toggle("active"); //네브바
    // sendMail.classList.toggle("active");
    footer.classList.toggle("active");

    //queryselectall 즉, 2개 이상 요소 선택 시에는 반복문 필수
    //section 배경 변경
    for (i = 0; i < section.length; i++) {
      section[i].classList.toggle("active");
    }

    // span 변경
    for (i = 0; i < spanList.length; i++) {
      spanList[i].classList.toggle("active");
    }

    // card 변경
    for (i = 0; i < card.length; i++) {
      card[i].classList.toggle("active");
    }
    //li 변경
    for (i = 0; i < li.length; i++) {
      li[i].classList.toggle("active");
    }

    //h1 변경
    for (i = 0; i < h1.length; i++) {
      h1[i].classList.toggle("active");
    }

    //a 변경
    for (i = 0; i < a.length; i++) {
      a[i].classList.toggle("active");
    }
  });

  const span=document.querySelector('.randomWord');
const button=document.querySelector('.hidenBtn');
const bg=document.querySelector('.randomWord');

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
bg.style.color="#"+Math.round(Math.random()*0xffffff).toString(16);
});


// 스크롤 위치에 따른 텍스트 효과
ScrollReveal({ reset: true });
ScrollReveal().reveal(".show", { delay: 500 });
ScrollReveal().reveal(".letsGo1", { delay: 350 });
ScrollReveal().reveal(".letsGo2", { delay: 700 });
ScrollReveal().reveal(".letsGo3", { delay: 1050 });
ScrollReveal().reveal(".letsGo4", { delay: 1400 });


};

// 캐러셀/
$(".carousel1").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});
