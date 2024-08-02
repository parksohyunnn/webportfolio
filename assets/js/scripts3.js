document.addEventListener('DOMContentLoaded', function () {
    // skill
    // 메인 큐브 이미지
    gsap.set(".prGachaBg .pr-gacha", { opacity: 0, y: 45 });
    // 메인 큐브 안 볼
    gsap.set(".prGachaBg .prGacha3", { opacity: 0, y: 5 });
    // 양 옆 큰 오브제
    gsap.set(".prGachaBg .pr-Img1", { opacity: 0, y: 5 });
    gsap.set(".prGachaBg .pr-Img2", { opacity: 0, y: 5 });
    // 양 옆 작은 오브제
    gsap.set(".prGachaBg .pr-Img3", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .pr-Img4", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .pr-Img5", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .pr-Img6", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .pr-Img7", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .pr-Img8", { opacity: 0 });
    gsap.set(".prGachaBg .pr-Img9", { opacity: 0 });
    // 메인 공
    gsap.set(".prGachaBg .GachaBigbal1", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .GachaBigbal2", { opacity: 0, x: -15 });
    gsap.set(".prGachaBg .GachaBigbal3", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .GachaBigbal4", { opacity: 0, x: -15 });
    gsap.set(".prGachaBg .GachaBigbal5", { opacity: 0, x: 15 });
    gsap.set(".pr-button-container2 .pr-button2", { opacity: 0, x: 15 });
    const tl = gsap.timeline();

    // skill
    // 메인 큐 이미지
    setTimeout(() => {
        tl.to(".prGachaBg .pr-gacha", { opacity: 1, y: 0, stagger: 1, duration: 2, delay: 2, ease: "power4.out" });
        // 메인 큐브 안 볼
        tl.to(".prGachaBg .prGacha3", { opacity: 1, stagger: 0.5, duration: 0.8 });
        // 양 옆 큰 오브제
        tl.to(".prGachaBg .pr-Img1", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".prGachaBg .pr-Img2", { opacity: 1, stagger: 0.5, duration: 0.3 });
        // 양 옆 작은 오브제
        tl.to(".prGachaBg .pr-Img3", { opacity: 1, stagger: 0.5, duration: 0.2, x: 0 });
        tl.to(".prGachaBg .pr-Img4", { opacity: 1, stagger: 0.5, duration: 0.2, x: 0 });
        tl.to(".prGachaBg .pr-Img5", { opacity: 1, stagger: 0.5, duration: 0.2, x: 0 });
        tl.to(".prGachaBg .pr-Img6", { opacity: 1, stagger: 0.5, duration: 0.2, x: 0 });
        tl.to(".prGachaBg .pr-Img7", { opacity: 1, stagger: 0.5, duration: 0.2, x: 0 });
        tl.to(".prGachaBg .pr-Img8", { opacity: 1, stagger: 0.5, duration: 0.2 });
        tl.to(".prGachaBg .pr-Img9", { opacity: 1, stagger: 0.5, duration: 0.2 });
        // 메인 큐브 안 볼
        tl.to(".prGachaBg .GachaBigbal1", { opacity: 1, stagger: 0.5, duration: 0.8, x: 0 });
        tl.to(".prGachaBg .GachaBigbal2", { opacity: 1, stagger: 0.5, duration: 0.8, x: 0 });
        tl.to(".prGachaBg .GachaBigbal3", { opacity: 1, stagger: 0.5, duration: 0.8, x: 0 });
        tl.to(".prGachaBg .GachaBigbal4", { opacity: 1, stagger: 0.5, duration: 0.8, x: 0 });
        tl.to(".prGachaBg .GachaBigbal5", { opacity: 1, stagger: 0.5, duration: 0.8, x: 0 });
        tl.to(".pr-button-container2 .pr-button2", { opacity: 1, stagger: 0.5, duration: 0.8, x: 0 });
    }, 1000);
});

//팝업__1_왼쪽 디자인 부분
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.pr-button1');
    const popup = document.querySelector('.prModal6');
    const close = document.querySelector('.close6');

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

//팝업__1_왼쪽 contect
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.pr-button2');
    const popup = document.querySelector('.prModal7');
    const close = document.querySelector('.close7');

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

//모달_pr_1
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.GachaBigbal1');
    const popup = document.querySelector('.prModal1');
    const close = document.querySelector('.prClose1');

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

//모달_pr_2
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.GachaBigbal2');
    const popup = document.querySelector('.prModal2');
    const close = document.querySelector('.prClose2');

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

//모달_pr_3
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.GachaBigbal3');
    const popup = document.querySelector('.prModal3');
    const close = document.querySelector('.prClose3');

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

//모달_pr_4
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.GachaBigbal4');
    const popup = document.querySelector('.prModal4');
    const close = document.querySelector('.prClose4');

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

//모달_pr_5
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.GachaBigbal5');
    const popup = document.querySelector('.prModal5');
    const close = document.querySelector('.prClose5');

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