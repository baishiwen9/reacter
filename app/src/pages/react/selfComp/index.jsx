import React, { Component } from 'react';
import PreviewImage, { updatePreviewImages } from './../../../component/PreviewImage';
import Code from './../../comp/Code';
import './../../comp/common/style.css';




export default class SelfComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">自定义组件---预览大图</span>
                </p>

                <p className="item-title">
                    <span className="textShadow">使用技术及方法</span>
                </p>

                <div className="article-desc">
                    react, antd-mobile(Carousel--走马灯组件), 订阅发布功能<br />
                    给将要预览的图片加上统一的类名（默认为preview-img）用来选取该元素。
                </div>


                <p className="item-title">
                    <span className="textShadow">使用实例</span>
                </p>

                <div className="article-desc">
                    点击任意图片，可以直接预览图片，并且可以左右滑动预览其他图片。<br />
                    <img className="article-img preview-img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593958939135&di=cb3dee315e0f312aab4e2fae136abca5&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0809%2FD5AD6058C6F7F813F01E0AF06364286B93F53E27_size21_w600_h399.jpeg" />
                    <img className="article-img preview-img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593958939136&di=84d3db1eaf300c7da975f9b77c4aeed7&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161019%2F38dae34b3f264fd39ce0de0d9ae613b7_th.jpeg" />
                    <img className="article-img preview-img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593958939134&di=7e4cb10cf71cd9fc5653d21ada0824db&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201403%2F20%2F20140320235526_QWwya.jpeg" />
                    <img className="article-img preview-img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593958939134&di=2eb3ae79c4e7d3fe858173d0e9d346cb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201612%2F05%2F20161205101430_QjPwv.thumb.700_0.jpeg" />
                </div>

                <p className="item-title">
                    <span className="textShadow">页面中图片增加或者删除后预览</span>
                </p>


                <div className="article-desc">
                    用订阅发布模式实现了当前页面中有图片增多或者减少时候的更新方法:  updatePreviewImages<br />
                </div>


                <p className="item-title">
                    <span className="textShadow">代码</span>
                </p>

                <Code code={`
// EventEmitter.js

/**
 * 实现一个简单的发布订阅
 */
export default class EventEmitter {
    constructor () {
        this.events = {};
    }

    on (type, cb) {
        if (!this.events[type]) {
            this.events[type] = [cb];
        } else {
            this.events[type].push(cb);
        }
    }

    off (type, cb) {
        if (!this.events[type]) {
            return;
        } else {
            this.events[type] = this.events[type].filter(fn => fn !== cb);
        }
    }

    emit (type, ...args) {
        if (this.events[type]) {
            this.events[type].map(fn => fn.apply(this, args));
        }
    }
}


// PreviewImage.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd-mobile';
import './index.scss';
import EventEmitter from './EventEmitter';

const eventEmitter = new EventEmitter();

function updatePreviewImages() {
    setTimeout(() => {
        eventEmitter.emit('update-previewImages');
    }, 300);
}

export {
    updatePreviewImages,
};
/**
 * 浏览大图组件
 * 使用：将组件引入当前页面即可对类名为preview-img的img生效
 * 属性：
 *   previewClass： 自定义要预览图片的className（默认为preview-img）
 *   rootClass：    只有父元素的className为rootClass的所有img（className为previewClass）才可以被预览（默认父元素为body）
 */
export default class PreviewImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            selectedIndex: 0,
            canPreviewImages: [],
            root: document.body, //要预览图片的祖父元素，只能预览root内的图片，默认为body
        };
    }

    componentDidMount() {
        let { root } = this.state;
        const { previewClass, rootClass = '' } = this.props;
        
        if (rootClass != '') {
            root = Array.from(document.querySelectorAll('.$ {rootClass}'));
        }
        const canPreviewImages = this.getCurrentPageImages(previewClass, root);
        this.setState({
            canPreviewImages,
            root,
        });
        window.addEventListener('click', this.previewImage.bind(this, root), false);
        eventEmitter.on('update-previewImages', this.update);
    }

    update = () => {
        const { previewClass } = this.props;
        const { root } = this.state;
        this.setState({
            canPreviewImages: this.getCurrentPageImages(previewClass, root),
        });
    }

    componentWillUnMount() {
        window.removeEventListener('click', this.previewImage.bind(this, []));
        eventEmitter.off('update-previewImages', this.update);
    }

    previewImage(root, e) {
        const { previewClass } = this.props;
        if (e.target.nodeName.toLowerCase() === 'img' 
            && e.target.classList.value.indexOf(previewClass) > -1 
                && this.isChildNode(root, e.target)) {
            const index = e.target.getAttribute('data-preview-index');
            console.log('---index---', index);
            this.setState({
                show: true,
                selectedIndex: index,
            });
            window.addEventListener('touchmove', this.preventDefault, {
                passive: false
            });
        }
    }

    //获取当前页面所有可以预览的图片
    getCurrentPageImages(selectorClassName, root) {
        const imageNodes = Array.from(document.querySelectorAll(.$ {selectorClassName}'));
        const canPreviewImages = [];
        //从所有指定类名的img中筛选出可以预览的图片
        imageNodes.filter((item, index) => {
            if (item.nodeName.toLowerCase() === 'img' && this.isChildNode(root, item)) {
                return item;
            }
        }).forEach((node, one) => {
            const src = node.getAttribute('src');
            node.setAttribute('data-preview-index', one);
            canPreviewImages.push({
                src,
                index: one,
            });
        });
        return canPreviewImages;
    }


    //阻止默认事件
    preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }


    //判断是否为子节点
    isChildNode(root, child) {
        let res = false;
        if (!child instanceof Node) {
            return false;
        }
        if (root instanceof Array) {
            for (let i = 0; i < root.length; i++) {
                if (root[i] instanceof Node && root[i].contains(child)) {
                    res = true;
                    break;
                }
            }
        }
        if (root instanceof Node) {
            res = root.contains(child);
        }
        return res;
    }

    close() {
        this.setState({
            show: false,
        });
        window.removeEventListener('touchmove', this.preventDefault);
    }

    render() {
        const { show, selectedIndex, canPreviewImages } = this.state;
        if (!show) {
            return null;
        }
        return (
            <div className="component-previewImage" onClick={() => this.close()}>
                <Carousel
                    ref="previewImage"
                    selectedIndex={selectedIndex}
                    dots={false}
                    autoplay={false}
                    infinite={false}
                    // afterChange={index => console.log('slide to', index)}
                >
                    {
                        canPreviewImages.map((item, index) => {
                            return (
                                <div className="previewImage-wrap" key={index}>
                                    <img 
                                        className="previewImage-img" 
                                        src={item.src} 
                                        alt="" 
                                    />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

/**
 * rootClass: 只有class为rootClass的元素里面的img才可以被预览，默认是空（表示：body下的class为previewClass的img都可以预览）
 * previewClass: 要预览的图片的class类名，默认为preview-img
 */
PreviewImage.propTypes = {
    rootClass: PropTypes.string,
    previewClass: PropTypes.string,
};
    
PreviewImage.defaultProps = {
    rootClass: '',
    previewClass: 'preview-img',
};

// PreviewImage.sass

.component-previewImage{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
    z-index: 999;
    left: 0;
    top: 0;
    .previewImage-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        .previewImage-img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
                `} />


                <PreviewImage />
            </div>
        )
    }
}