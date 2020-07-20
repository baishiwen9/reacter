import React, { Component } from 'react';
import Code from './../../comp/Code';
// import './../../comp/common/style.css';

import LightImage from './../../../component/LightImage';


export default class LightImageFn extends Component {
    constructor(props) {
        super(props);
       
    }

    componentDidMount() {
        new LightImage();
    }

    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">点亮图片</span>
                </p>

                <div className="article-desc">
                    点击图片, 将会点亮图片<br />
                    <img className="article-img preview-img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593958939135&di=cb3dee315e0f312aab4e2fae136abca5&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0809%2FD5AD6058C6F7F813F01E0AF06364286B93F53E27_size21_w600_h399.jpeg" />
                    <img className="article-img preview-img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593958939136&di=84d3db1eaf300c7da975f9b77c4aeed7&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161019%2F38dae34b3f264fd39ce0de0d9ae613b7_th.jpeg" />
                    <img className="article-img preview-img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593958939134&di=7e4cb10cf71cd9fc5653d21ada0824db&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201403%2F20%2F20140320235526_QWwya.jpeg" />
                    <img className="article-img preview-img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593958939134&di=2eb3ae79c4e7d3fe858173d0e9d346cb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201612%2F05%2F20161205101430_QjPwv.thumb.700_0.jpeg" />
                    <img className="article-img preview-img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594202302213&di=9b7676b88364df814275b304690a3f4d&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1901%2F05%2Fc1%2F126971444_1546641805999_mthumb.jpg" />
                </div>

                <p className="item-title">
                    <span className="textShadow">代码</span>
                </p>

                <Code code={`
/**
 * 实现图片点亮功能
 * 模拟：https://mp.weixin.qq.com/s/jkUmXL7RYCgN_LLrDJgwcg
 */

class LightImage {
    constructor() {
        this.init();
    }

    init() {
        //设置样式
        const style = document.createElement('style');
        style.type = 'text/css';
        const gray_css = 'img.img-gray{filter: grayscale(1);}';
        const light_css = 'img.img-light{animation-duration: 2.6s;animation-fill-mode: both;animation-name: imageLight;}';
        const animation = '@keyframes imageLight {from {filter: grayscale(1);}to {filter: grayscale(0);}}';  
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
                `} />
            </div>
        )
    }
}