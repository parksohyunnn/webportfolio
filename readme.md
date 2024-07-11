# 위아래 에니메이션

````css
{
    animation: moveUpDown 2s infinite;
}

@keyframes moveUpDown {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
        /* 위로 20px 이동 */
    }

    100% {
        transform: translateY(0);
    }
}
````

# 좌우 에니메이션

````css
    {
    animation: moveLeftRight 5s infinite;
}

@keyframes moveLeftRight {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(100px);
    }

    100% {
        transform: translateX(0);
    }
}

````

````
