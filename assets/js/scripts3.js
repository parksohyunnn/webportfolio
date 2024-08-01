document.addEventListener('DOMContentLoaded', function () {
    // skill
    // 메인 큐브 이미지
    gsap.set(".prGachaBg .pr-gacha", { opacity: 0, y: 45 });
    // 메인 큐브 안 볼
    gsap.set(".prGachaBg .prGacha3", { opacity: 0, y: 5 });
    gsap.set(".prGachaBg .prGacha2", { opacity: 0, y: 5 });
    // 양 옆 큰 오브제
    gsap.set(".prGachaBg .pr-Img1", { opacity: 0, y: 5 });
    gsap.set(".prGachaBg .pr-Img2", { opacity: 0, y: 5 });
    // 양 옆 작은 오브제
    gsap.set(".prGachaBg .pr-Img3", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .pr-Img4", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .pr-Img5", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .pr-Img6", { opacity: 0, x: 15 });
    gsap.set(".prGachaBg .pr-Img7", { opacity: 0, x: 15 });
    const tl = gsap.timeline();

    // skill
    // 메인 큐 이미지
    setTimeout(() => {
        tl.to(".prGachaBg .pr-gacha", { opacity: 1, y: 0, stagger: 1, duration: 2, delay: 2, ease: "power4.out" });
        // 메인 큐브 안 볼
        tl.to(".prGachaBg .prGacha3", { opacity: 1, stagger: 0.5, duration: 0.8 });
        tl.to(".prGachaBg .prGacha2", { opacity: 1, stagger: 0.5, duration: 0.8 });
        // 양 옆 큰 오브제
        tl.to(".prGachaBg .pr-Img1", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".prGachaBg .pr-Img2", { opacity: 1, stagger: 0.5, duration: 0.3 });
        // 양 옆 작은 오브제
        tl.to(".prGachaBg .pr-Img3", { opacity: 1, stagger: 0.5, duration: 0.2, y: 0 });
        tl.to(".prGachaBg .pr-Img4", { opacity: 1, stagger: 0.5, duration: 0.2, y: 0 });
        tl.to(".prGachaBg .pr-Img5", { opacity: 1, stagger: 0.5, duration: 0.2, y: 0 });
        tl.to(".prGachaBg .pr-Img6", { opacity: 1, stagger: 0.5, duration: 0.2, y: 0 });
        tl.to(".prGachaBg .pr-Img7", { opacity: 1, stagger: 0.5, duration: 0.2, y: 0 });
    }, 1000);
});