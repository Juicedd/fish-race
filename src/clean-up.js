setInterval(() => {
    if (winner) {
        clearInterval(movingFish1);
        clearInterval(movingFish2);
        clearInterval(movingFish3);
        clearInterval(movingFish4);  
    }
}, time);