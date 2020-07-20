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
            root = Array.from(document.querySelectorAll(`.${rootClass}`));
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

    // componentWillUnMount() {
    //     window.removeEventListener('click', this.previewImage.bind(this, []));
    //     eventEmitter.off('update-previewImages', this.update);
    // }

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
            // window.addEventListener('touchmove', this.preventDefault, {
            //     passive: false
            // });
        }
    }

    //获取当前页面所有可以预览的图片
    getCurrentPageImages(selectorClassName, root) {
        const imageNodes = Array.from(document.querySelectorAll(`.${selectorClassName}`));
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
    // preventDefault(e) {
    //     e = e || window.event;
    //     if (e.preventDefault) {
    //         e.preventDefault();
    //     } else {
    //         e.returnValue = false;
    //     }
    // }
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
        // window.removeEventListener('touchmove', this.preventDefault);
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
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
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
