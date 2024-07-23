
const targets = gsap.utils.toArray(".split");
let SplitClient = new SplitType(targets, { type: "lines, words, chars" });
let lines = SplitClient.lines;
let words = SplitClient.words;
let chars = SplitClient.chars;

gsap.set(".aboutTextwrap .aboutSubtittle .char", { opacity: 0, y: 10 });
gsap.set(".flowerTextwrap .ab__Text .line", { opacity: 0, y: 5 });
gsap.set(".navUl li", { opacity: 0, y: 5 });
gsap.set(".h2Textwrap .aboutTittle .char", { y: 200 });

const tl = gsap.timeline();

setTimeout(() => {
    tl.to(".aboutTextwrap .aboutSubtittle .char", { opacity: 1, y: 0, stagger: 0.03, duration: 0.5, ease: "power4.out" });
    tl.to(".flowerTextwrap .ab__Text .line", { opacity: 1, y: 0, stagger: 0.5, duration: 0.5, ease: "power2.out" });
    tl.to(".navUl li", { opacity: 1, y: 0, stagger: 0.5, duration: 0.5, ease: "power2.out" });
    tl.to(".h2Textwrap .aboutTittle .char", { y: 0, stagger: 0.02, duration: 0.5, ease: "power4.out" });
}, 1000);