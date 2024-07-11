document.addEventListener('DOMContentLoaded', function () {
    const svgPath = document.querySelector('.castleLinePath');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    svgPath.style.strokeDashoffset = '0'; // 경로를 애니메이션으로 나타나게 함
                }, 500); // .5초 지연
            } else {
                svgPath.style.strokeDashoffset = '5000'; // 경로를 숨기기 위해 초기 상태로 되돌림
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(document.querySelector('.castleLineContainer'));
});