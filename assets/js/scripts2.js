document.addEventListener('DOMContentLoaded', function () {
    // skill
    // 메인 성 이미지
    gsap.set(".skill .skillImg", { opacity: 0, y: 45 });
    // 메인 성 오브제
    gsap.set(".skill .window1", { opacity: 0, y: 5 });
    gsap.set(".skill .window2", { opacity: 0, y: 5 });
    gsap.set(".skill .window3", { opacity: 0, y: 5 });
    gsap.set(".skill .window4", { opacity: 0, y: 5 });
    gsap.set(".skill .window5", { opacity: 0, y: 5 });
    gsap.set(".skill .window6", { opacity: 0, y: 5 });
    gsap.set(".skill .window7", { opacity: 0, y: 5 });
    gsap.set(".skill .window8", { opacity: 0, y: 5 });
    gsap.set(".skill .ball", { opacity: 0 });
    gsap.set(".skill .ball2", { opacity: 0 });
    gsap.set(".skill .ball3", { opacity: 0 });
    // 아이콘
    gsap.set(".skill .js", { opacity: 0, y: -15 });
    gsap.set(".skill .css", { opacity: 0, y: -15 });
    gsap.set(".skill .figma", { opacity: 0, y: -15 });
    gsap.set(".skill .ja", { opacity: 0, y: -15 });
    gsap.set(".skill .git", { opacity: 0, y: -15 });
    gsap.set(".skill .ai", { opacity: 0, y: -15 });
    gsap.set(".skill .id", { opacity: 0, y: -15 });
    gsap.set(".skill .br", { opacity: 0, y: -15 });
    gsap.set(".skill .ps", { opacity: 0, y: -15 });
    gsap.set(".skill .mysql", { opacity: 0, y: -15 });
    gsap.set(".skill .notion", { opacity: 0, y: -15 });
    gsap.set(".skill .slack", { opacity: 0, y: -15 });
    gsap.set(".skill .click", { opacity: 0 });
    // 메인 새
    gsap.set(".skill .skillImg2", { opacity: 0, y: 45 });
    const tl = gsap.timeline();

    // skill
    // 메인 성 이미지
    setTimeout(() => {
        tl.to(".skill .skillImg", { opacity: 1, y: 0, stagger: 1, duration: 2, delay: 2, ease: "power4.out" });
        // 메인 성 오브제
        tl.to(".skill .window1", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".skill .window2", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".skill .window3", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".skill .window4", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".skill .window5", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".skill .window6", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".skill .window7", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".skill .window8", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".skill .ball", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".skill .ball2", { opacity: 1, stagger: 0.5, duration: 0.3 });
        tl.to(".skill .ball3", { opacity: 1, stagger: 0.5, duration: 0.3 });
        // 아이콘
        tl.to(".skill .js", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .css", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .figma", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .ja", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .git", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .ai", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .id", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .br", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .ps", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .mysql", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .notion", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .slack", { opacity: 1, y: 0, stagger: 0.5, duration: 0.2, ease: "power2.out" });
        tl.to(".skill .click", { opacity: 1, stagger: 0.5, duration: 0.1, ease: "power2.out" });
        // 매인 새
        tl.to(".skill .skillImg2", { opacity: 1, y: 0, stagger: 0.5, duration: 0.3, ease: "power2.out" });
    }, 1000);
});