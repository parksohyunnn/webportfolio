
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

// 성과 새가 날아오는 이미지
document.addEventListener('DOMContentLoaded', function () {
    const castle1 = document.querySelector('.castle1');
    const castle2 = document.querySelector('.castle2');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // .castle1이 화면에 보이면 애니메이션 적용
                castle1.style.right = '10vw'; // 오른쪽에서 나타남 (뷰포트 너비의 10% 지점에 배치)
                castle1.style.opacity = '1';
                castle1.classList.add('bounce-animation');

                // .castle1이 나타난 후에 .castle2 애니메이션 시작
                setTimeout(() => {
                    castle2.style.opacity = '1';
                    castle2.classList.add('fly-animation');

                    // fly-animation이 끝난 후 bounce-animation 추가
                    castle2.addEventListener('animationend', () => {
                        castle2.classList.add('bounce-animation');
                    });
                }, 2000); // .castle1 애니메이션 시간과 맞추기 위해 2초 지연
            } else {
                // 화면에서 벗어나면 애니메이션 초기화 (필요 시)
                castle1.style.right = '-50vw';
                castle1.style.opacity = '0';
                castle1.classList.remove('bounce-animation');

                castle2.style.opacity = '0';
                castle2.classList.remove('fly-animation');
                castle2.classList.remove('bounce-animation');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(document.querySelector('.castle-img'));
});

// 
document.addEventListener('DOMContentLoaded', function () {
    const castle1 = document.querySelector('.castle1');
    const castle3 = document.querySelector('.castle3');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // .castle1이 화면에 보이면 애니메이션 적용
                castle1.style.right = '10vw'; // 오른쪽에서 나타남 (뷰포트 너비의 10% 지점에 배치)
                castle1.style.opacity = '1';

                // .castle1이 나타난 후에 .castle3 위치를 고정하고 나타나게 함
                setTimeout(() => {
                    // .castle1의 위치와 크기를 기준으로 .castle3의 위치를 설정
                    const castle1Rect = castle1.getBoundingClientRect();
                    castle3.style.left = `${castle1Rect.right + 20}px`; // .castle1의 오른쪽에 위치
                    castle3.style.top = `${castle1Rect.top + (castle1Rect.height / 2) - (castle3.clientHeight / 2)}px`; // 수직 중앙 정렬
                    castle3.style.opacity = '1';
                }, 2000); // .castle1 애니메이션 시간과 맞추기 위해 2초 지연
            } else {
                // 화면에서 벗어나면 애니메이션 초기화 (필요 시)
                castle1.style.right = '800px';
                castle1.style.opacity = '0';

                castle3.style.opacity = '0';
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(document.querySelector('.castle-img'));
});