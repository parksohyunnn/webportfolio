//팝업_어바웃_1_왼쪽 디자인 부분
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.button');
    const popup = document.querySelector('.abtextWrap1');
    const close = document.querySelector('.close');

    button.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // 팝업창 외부를 클릭하면 팝업창을 닫음
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

//팝업_어바웃_2_왼쪽 
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.button2');
    const popup = document.querySelector('.persona1');
    const close = document.querySelector('.close2');

    button.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // 팝업창 외부를 클릭하면 팝업창을 닫음
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

//팝업_어바웃_3_왼쪽 
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.button3');
    const popup = document.querySelector('.persona2');
    const close = document.querySelector('.close3');

    button.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // 팝업창 외부를 클릭하면 팝업창을 닫음
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

//팝업_어바웃_1_오른쪽 
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.button4');
    const popup = document.querySelector('.abtextWrap2');
    const close = document.querySelector('.close4');

    button.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // 팝업창 외부를 클릭하면 팝업창을 닫음
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

//팝업_어바웃_2_오른쪽 
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.button5');
    const popup = document.querySelector('.abtextWrap3');
    const close = document.querySelector('.close5');

    button.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // 팝업창 외부를 클릭하면 팝업창을 닫음
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

//gsap시작
const targets = gsap.utils.toArray(".split");
let SplitClient = new SplitType(targets, { type: "lines, words, chars" });
let lines = SplitClient.lines;
let words = SplitClient.words;
let chars = SplitClient.chars;

// 글
gsap.set(".aboutTextwrap .aboutSubtittle .char", { opacity: 0, y: 10 });
gsap.set(".flowerTextwrap .ab__Text .line", { opacity: 0, y: 5 });
gsap.set(".navUl li", { opacity: 0, y: 5 });
gsap.set(".h2Textwrap .aboutTittle .char", { y: 200 });
// 액자 프레임
gsap.set(".ab-Img1 .ab-frame", { opacity: 0 });
// 사진 배경 그라데이션
gsap.set(".ab-Img2", { opacity: 0 });
// 사진
gsap.set(".ab-Img2 .ab-pofile", { opacity: 0 });
// 꽃
gsap.set(".pofile .ab-Img3", { opacity: 0 });
gsap.set(".pofile .ab-Img4", { opacity: 0 });
gsap.set(".pofile .ab-Img5", { opacity: 0 });
gsap.set(".pofile .ab-Img6", { opacity: 0 });
gsap.set(".pofile .ab-Img7", { opacity: 0 });
gsap.set(".pofile .ab-Img8", { opacity: 0 });
gsap.set(".pofile .ab-Img9", { opacity: 0 });
gsap.set(".pofile .ab-Img10", { opacity: 0 });
gsap.set(".pofile .ab-Img11", { opacity: 0 });
gsap.set(".pofile .ab-Img12", { opacity: 0 });
gsap.set(".pofile .ab-Img13", { opacity: 0 });
gsap.set(".pofile .ab-Img14", { opacity: 0 });
gsap.set(".pofile .ab-Img15", { opacity: 0 });
gsap.set(".pofile .ab-Img16", { opacity: 0 });
gsap.set(".pofile .ab-Img17", { opacity: 0 });
gsap.set(".pofile .ab-Img18", { opacity: 0 });
gsap.set(".pofile .ab-Img19", { opacity: 0 });
gsap.set(".pofile .ab-Img20", { opacity: 0 });
gsap.set(".pofile .ab-Img21", { opacity: 0 });
gsap.set(".pofile .ab-Img22", { opacity: 0 });
gsap.set(".pofile .ab-Img23", { opacity: 0 });
gsap.set(".pofile .ab-Img24", { opacity: 0 });
gsap.set(".pofile .ab-Img25", { opacity: 0 });
gsap.set(".pofile .ab-Img26", { opacity: 0 });
gsap.set(".pofile .ab-Img27", { opacity: 0 });
gsap.set(".pofile .ab-Img28", { opacity: 0 });
gsap.set(".pofile .ab-Img29", { opacity: 0 });
gsap.set(".pofile .ab-Img30", { opacity: 0 });
gsap.set(".pofile .ab-Img31", { opacity: 0 });
gsap.set(".pofile .ab-Img32", { opacity: 0 });
gsap.set(".pofile .ab-Img33", { opacity: 0 });
gsap.set(".pofile .ab-Img34", { opacity: 0 });
//버튼
gsap.set(".button-container .button", { opacity: 0, y: 10 });
gsap.set(".button-container2 .button2", { opacity: 0, y: 10 });
gsap.set(".button-container3 .button3", { opacity: 0, y: 10 });
gsap.set(".button-container4 .button4", { opacity: 0, y: 10 });
gsap.set(".button-container5 .button5", { opacity: 0, y: 10 });
//꽃 깜빡임
gsap.set(".pofile .ab-Img8-1", { opacity: 0 });
gsap.set(".pofile .ab-Img17-1", { opacity: 0 });
gsap.set(".pofile .ab-Img19-1", { opacity: 0 });
gsap.set(".pofile .ab-Img22-1", { opacity: 0 });
gsap.set(".pofile .ab-Img33-1", { opacity: 0 });

const tl = gsap.timeline();

setTimeout(() => {
    tl.to(".aboutTextwrap .aboutSubtittle .char", { opacity: 1, y: 0, stagger: 0.03, duration: 0.3, ease: "power4.out" });
    tl.to(".flowerTextwrap .ab__Text .line", { opacity: 1, y: 0, stagger: 0.5, duration: 0.5, ease: "power2.out" });
    tl.to(".navUl li", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    tl.to(".h2Textwrap .aboutTittle .char", { y: 0, stagger: 0.02, duration: 0.5, ease: "power4.out" });
    // 사진 배경 그라데이션
    tl.to(".ab-Img2", { opacity: 1, duration: 0.01 });
    // 사진
    tl.to(".ab-Img2 .ab-pofile", { opacity: 1, duration: 0.01 });
    // 액자 프레임
    tl.to(".ab-Img1 .ab-frame", { opacity: 1, duration: 1 });
    // 꽃
    tl.to(".pofile .ab-Img3", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img4", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img5", { opacity: 1, duration: 0.5 });
    tl.to(".pofile .ab-Img6", { opacity: 1, duration: 0.5 });
    tl.to(".pofile .ab-Img7", { opacity: 1, duration: 0.4 });
    tl.to(".pofile .ab-Img8", { opacity: 1, duration: 0.4 });
    tl.to(".pofile .ab-Img9", { opacity: 1, duration: 0.3 });
    tl.to(".pofile .ab-Img10", { opacity: 1, duration: 0.3 });
    tl.to(".pofile .ab-Img11", { opacity: 1, duration: 0.4 });
    tl.to(".pofile .ab-Img12", { opacity: 1, duration: 0.4 });
    tl.to(".pofile .ab-Img13", { opacity: 1, duration: 0.3 });
    tl.to(".pofile .ab-Img14", { opacity: 1, duration: 0.3 });
    tl.to(".pofile .ab-Img15", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img16", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img17", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img18", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img19", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img20", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img21", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img22", { opacity: 1, duration: 0.03 });
    tl.to(".pofile .ab-Img23", { opacity: 1, duration: 0.02 });
    tl.to(".pofile .ab-Img24", { opacity: 1, duration: 0.01 });
    tl.to(".pofile .ab-Img25", { opacity: 1, duration: 0.01 });
    tl.to(".pofile .ab-Img26", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img27", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img28", { opacity: 1, duration: 0.3 });
    tl.to(".pofile .ab-Img29", { opacity: 1, duration: 0.4 });
    tl.to(".pofile .ab-Img30", { opacity: 1, duration: 0.5 });
    tl.to(".pofile .ab-Img31", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img32", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img33", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img34", { opacity: 1, duration: 1 });
    //버튼
    tl.to(".button-container .button", { opacity: 1, y: 0, stagger: 0.03, duration: 0.3, ease: "power4.out" });
    tl.to(".button-container2 .button2", { opacity: 1, y: 0, stagger: 0.03, duration: 0.3, ease: "power4.out" });
    tl.to(".button-container3 .button3", { opacity: 1, y: 0, stagger: 0.03, duration: 0.3, ease: "power4.out" });
    tl.to(".button-container4 .button4", { opacity: 1, y: 0, stagger: 0.03, duration: 0.3, ease: "power4.out" });
    tl.to(".button-container5 .button5", { opacity: 1, y: 0, stagger: 0.03, duration: 0.3, ease: "power4.out" });
    //꽃 깜빡임
    tl.to(".pofile .ab-Img8-1", { opacity: 1, duration: 0.01 });
    tl.to(".pofile .ab-Img17-1", { opacity: 1, duration: 0.01 });
    tl.to(".pofile .ab-Img19-1", { opacity: 1, duration: 0.01 });
    tl.to(".pofile .ab-Img22-1", { opacity: 1, duration: 0.01 });
    tl.to(".pofile .ab-Img33-1", { opacity: 1, duration: 0.01 });
}, 1000);