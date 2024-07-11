document.addEventListener('scroll', function () {
    const svgContainer = document.querySelector('.castleLineContainer');
    const svgPath = document.querySelector('.castleLinePath');
    const rect = svgContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 컨테이너가 뷰포트에 있는지 확인
    if (rect.top <= windowHeight && rect.bottom >= 0) {
        setTimeout(() => {
            svgPath.style.strokeDashoffset = '0'; // 경로를 애니메이션으로 나타나게 함
        }, 500); // 0.5초 지연
    }
});