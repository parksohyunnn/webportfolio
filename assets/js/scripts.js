
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

const tl = gsap.timeline();

setTimeout(() => {
    tl.to(".aboutTextwrap .aboutSubtittle .char", { opacity: 1, y: 0, stagger: 0.03, duration: 0.5, ease: "power4.out" });
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
    tl.to(".pofile .ab-Img3", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img4", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img5", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img6", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img7", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img8", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img9", { opacity: 1, duration: 0.2 });
    tl.to(".pofile .ab-Img10", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img11", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img12", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img13", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img14", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img15", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img16", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img17", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img18", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img19", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img20", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img21", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img22", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img23", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img24", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img25", { opacity: 1, duration: 0.08 });
    tl.to(".pofile .ab-Img26", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img27", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img28", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img29", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img30", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img31", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img32", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img33", { opacity: 1, duration: 0.1 });
    tl.to(".pofile .ab-Img34", { opacity: 1, duration: 0.1 });
}, 1000);