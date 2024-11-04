// 定義動畫效果

function animateBox() {
    anime({
        targets: 'button',
        translateX: 500,
        scale: 2,
        rotate: '1turn',
        duration: 2000,
        easing: 'easeInOutQuad',
        complete: function (anim) {
            console.log("動畫完成");
            // 等待 2 秒後移動回去
            setTimeout(function () {
                anime({
                    targets: 'button',
                    translateX: 0, // 回到原位置
                    scale: 1, // 回到原大小
                    rotate: '0turn', // 回到原始角度
                    duration: 2000,
                    easing: 'easeInOutQuad'
                });
            }, 1000); // 等待 2000 毫秒（2 秒）
            setTimeout(function () {
                anime({
                    targets: '.box',
                    translateX: 500,
                    scale: 2,
                    rotate: '1turn',
                    duration: 2000,
                    easing: 'easeInOutQuad',
                    complete: function (anim) {
                        console.log("動畫完成");
                        // 等待 2 秒後移動回去
                        setTimeout(function () {
                            anime({
                                targets: '.box',
                                translateX: 0, // 回到原位置
                                scale: 1, // 回到原大小
                                rotate: '0turn', // 回到原始角度
                                duration: 2000,
                                easing: 'easeInOutQuad'
                            });
                        }, 1000); // 等待 2000 毫秒（2 秒）
                        setTimeout(function () {

                        }, 1000);
                    }

                });
            }, 1000);
        }

    });

}


// 為按鈕添加事件監聽
document.getElementById('startButton').addEventListener('click', animateBox);
