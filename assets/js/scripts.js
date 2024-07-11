
// 성 밖에 배경 흰색선이 내려오는 효과
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

// 성 이미지 등장 효과
document.addEventListener('DOMContentLoaded', function () {
    const castle1 = document.querySelector('.castle1');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 화면에 보이면 애니메이션 적용
                castle1.style.right = '200px';
                castle1.style.opacity = '1';
                castle1.classList.add('bounce-animation');
            } else {
                // 화면에서 벗어나면 애니메이션 초기화 (필요 시)
                castle1.style.right = '-1000px';
                castle1.style.opacity = '0';
                castle1.classList.remove('bounce-animation');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(document.querySelector('.castle-img'));
});
