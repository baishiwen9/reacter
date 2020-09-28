

import React, { Component } from 'react';
import Code from '../../comp/Code';
import {Table} from 'antd';
import cache1 from '../../../img/cache-1.jpg';
import cache2 from '../../../img/cache-2.jpg';
import cache3 from '../../../img/cache-3.jpg';

export default class BrowserCache extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const columns = [
            {
                title: '缓存位置',
                dataIndex: 'position',
                key: 'position',
            },
            {
                title: '说明',
                dataIndex: 'desc',
                key: 'desc',
            },
        ];

        const dataSource = [
            {
                key: '1',
                position: 'Service Worker',
                desc: 'Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。',
            },
            {
                key: '2',
                position: 'Memory Cache',
                desc: '内存中的缓存,主要包含的是当前中页面中已经抓取到的资源,例如页面上已经下载的样式、脚本、图片等。读取内存中的数据肯定比磁盘快,内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。',
            },
            {
                key: '3',
                position: 'Disk Cache',
                desc: '存储在硬盘中的缓存, 读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上.',
            },
            {
                key: '4',
                position: 'Push Cache',
                desc: 'Push Cache（推送缓存）是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在Chrome浏览器中只有5分钟左右，同时它也并非严格执行HTTP头中的缓存指令。',
            },
        ];
        const columns_cache_control = [
            {
                title: 'cache-control指令',
                dataIndex: 'cachekey',
                key: 'cachekey',
            },
            {
                title: '说明',
                dataIndex: 'desc',
                key: 'desc',
            },
        ];

        const dataSource_cache_control = [
            {
                key: '1',
                cachekey: 'public',
                desc: '表示响应可以被客户端和代理服务器缓存',
            },
            {
                key: '2',
                cachekey: 'private',
                desc: '表示响应只可以被客户端缓存',
            },{
                key: '3',
                cachekey: 'max-age=300',
                desc: '缓存300秒后过期，需要重新请求',
            },{
                key: '4',
                cachekey: 's-maxage=300',
                desc: '覆盖max-age，作用一样，只在代理服务器中生效',
            },{
                key: '5',
                cachekey: 'no-store',
                desc: '不缓存任何响应',
            },{
                key: '6',
                cachekey: 'no-cache',
                desc: '资源被缓存，但是立即失效，下次会发起请求验证资源是否过期',
            },{
                key: '7',
                cachekey: 'max-stale=30',
                desc: '30秒内即使过期，也使用缓存',
            },{
                key: '8',
                cachekey: 'min-fresh=30',
                desc: '希望在30秒内获取最新的响应',
            },
        ];
                        
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">浏览器缓存</span></p>
                <div className="quote">
                    参考文档： https://juejin.im/post/5c417993f265da61285a6075<br />
                    参考文档： https://www.jianshu.com/p/54cc04190252<br />

                    缓存的优点：缓存是性能优化中简单高效的一种优化方式，一个优秀的缓存策略可以缩短网页请求时间，减少延迟，由于缓存文件可以重复利用，还可以减少带宽，降低网络负荷。
                </div>

                <h3>1. 缓存的位置</h3>
                <div className="quote">
                    1. service worker<br />
                    2. memory cache<br />
                    3. disk cache<br />
                    4. push cache<br />

                    <Table 
                        dataSource={dataSource} 
                        columns={columns} 
                        pagination={false} 
                    />
                </div>

                <h3>2. 缓存过程</h3>
                <div className="quote">
                    浏览器第一次向服务器发起请求后拿到请求结果，将结果和缓存标识存入浏览器缓存中，浏览器对于缓存的处理是根据第一次请求资源时返回的响应头来确定的。<br />
                    <img className="middle-img" alt="" src={cache1} style={{height: '100%'}}/>
                </div>

                <h3>3. 强缓存</h3>
                <div className="quote">
                    强缓存不会向服务器发送请求，直接从缓存中读取资源，请求返回200的状态码，size显示为from disk cache或from memory cache。<br />
                    强缓存可以通过设置HTTP Header实现： Expires 和 Cache-Control。<br /><br />

                    1. Expires： 缓存过期时间，用来指定资源的到期时间，是服务器的具体时间点。<br />
                    expires是http/1 的产物，受限于本地时间，如果修改了本地时间，可能会造成缓存失效。<br /><br />

                    2. Cache-Control：是http/1.1的重要规则，主要用于控制网页缓存。<br />

                    <Table 
                        dataSource={dataSource_cache_control} 
                        columns={columns_cache_control} 
                        pagination={false} 
                    /><br />

                    3. Expires 和 Cache-Control对比<br />
                    expires是http/1.0的产物，cache-control是http/1.1的产物，两者同时存在的话，cache-control优先级高于expires。<br />
                    强缓存是否缓存得的依据是是否超过某个时间，而不关心服务器文件是否更新，这可能就会导致加载文件不是最新的内容。
                </div>

                <h3>4. 协商缓存</h3>
                <div className="quote">
                    当强缓存失效后，浏览器携带缓存标示向服务器发起请求，有服务器根据缓存标示决定是否要使用缓存的过程。<br />
                    1. 协商缓存生效：返回304和Not Modified<br />
                    2. 协商缓存失效： 返回200和请求资源<br />
                    <img className="middle-img" alt="" src={cache2} style={{height: '100%'}}/>
                    <img className="middle-img" alt="" src={cache3} style={{height: '100%'}}/>
                    <br /><br />

                    协商缓存可以通过设置两种HTTP Header实现：Last-Modified 和 ETag<br /><br />
                    1. Last-Modified和 If-Modified-Since<br />
                    浏览器在第一次访问资源时，服务器返回资源的同时，在response header中添加last-modified的header，值是这个而资源在服务器上最后的修改时间。<br />
                    浏览器下一次请求资源时，浏览器检测到右last-modified这个header，于是添加If-Modified-Since这个header，值就是Last-Modified的值。服务器拿到这个值会和最后修改时间做对比，如果没有变化就返回304和空的响应体，直接从缓存读取，如果If-Modified-Since的值小于服务器中这个资源的最后修改时间，说明文件有更新，返回新的资源和200。<br /><br />

                    Last-Modified的缺点：如果本地打开缓存文件，即使没有对文件做修改，但是还是会造成Last-Modified被修改，服务器不能命中缓存导致发送相同的资源。另外因为Last-Modified只能以秒为单位，如果在小于1s内修改文件，那么服务端还是会命中缓存。<br /><br />

                    2. ETag 和 If-None-Match<br />
                    ETag是服务器响应请求时候，返回当前资源文件的一个唯一标识（由服务器生成），只要资源有变化，ETag就会重新生成，浏览器在下一次加载资源时向服务器发送请求时会带上上一次的ETag的值放到request header里的If-None-Match里，服务器只需要对比客户端传来的If-None-Match 和服务器中的ETag是否一致，如果匹配不上说明文件有更新，返回新的资源和200，否则返回304和空响应体。<br /><br />


                    3. ETag 和 Last-Modified对比：<br />
                    在精度上：ETag高于Last-Modified<br />
                    在性能上：Last-Modified高于ETag<br />
                    在优先级上：ETag高于Last-Modified
                </div>

                <h3>5. 缓存机制</h3>
                <div className="quote">
                    强缓存优先于协商缓存，如果强缓存生效直接使用缓存，如果强缓存失效则进行协商缓存，协商缓存由服务器决定是否使用缓存，如果协商缓存失效，说明请求的缓存失效，返回200，重新返回资源和缓存标示，再存入到浏览器缓存中，生效则返回304.<br />
                </div>

                <h3>6. 使用缓存机制的场景</h3>
                <div className="quote">
                    1. 频繁变动的资源：Cache-Control: no-cache; 是浏览器每次都请求服务器，配合ETag或者Last-Modified来验证数据是否有效。可以减少响应数据大小。<br />
                    2. 不常变化的资源：Cache-Control: max-age=31536000; 这样相同的请求都会命中强缓存。
                </div>

                <h3>7. 用户行为对缓存的影响</h3>
                <div className="quote">
                    1. 打开网页：地址栏输入url，查找disk cache中是否有匹配，有则使用，没有则发送请求。<br />
                    2. 普通刷新（f5）：因为进程没有结束，因此memory cache是可用的，会被优先使用，其次是disk cache。<br />
                    3. 强制刷新（ctrl+f5）：浏览器不使用缓存
                </div>
            </div>
        )
    }
}