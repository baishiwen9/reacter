/**
 * 实现图片点亮功能
 * 模拟：https://mp.weixin.qq.com/s/jkUmXL7RYCgN_LLrDJgwcg
 */

export default class LightImage {
    constructor() {
        this.init();
    }

    init() {
        //设置样式
        const style = document.createElement('style');
        style.type = 'text/css';
        const gray_css = 'img.img-gray{filter: grayscale(1);}';
        const light_css = `img.img-light{animation-duration: 2.6s;animation-fill-mode: both;animation-name: imageLight;}`;
        const animation = `@keyframes imageLight {from {filter: grayscale(1);}to {filter: grayscale(0);}}`;  
        style.innerText = gray_css + light_css + animation;
        document.getElementsByTagName('head')[0].appendChild(style);
        
        const allImages = document.querySelectorAll('img');
        if (allImages) {
            const allImagesList = Array.prototype.slice.call(allImages);
            if (allImagesList && allImagesList.length > 0) {
                allImagesList.map(item => {
                    //设置成灰色
                    item.classList.add('img-gray');

                    //点击变亮
                    item.addEventListener('click', function(e) {
                        if (e.target.nodeName === 'IMG') {
                            e.target.classList.remove('img-gray');
                            e.target.classList.add('img-light');
                        }
                    }, false);
                });
            }
        }
    }
}