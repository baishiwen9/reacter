import axios from 'axios';
import config from '../utils';

const appKey = config.appInfo.APPKEY;

export const getTodayVideo = () => {
    return new Promise((resolve, reject) => {
        const url = `https://api.apiopen.top/getJoke?page=1&count=10&type=video`;
        axios.get(url).then(res => {
            if (res && res.status === 200 && res.data) {
                const { code, result } = res.data;
                if (code === 200) {
                    resolve(result);
                }
            } else {
                reject({
                    code: -1,
                    msg: '获取每日段子出错~~~',
                })
            }
        }).catch(err => {
            console.log(err);
            reject({
                code: -1,
                msg: err && err.message
            })
        });
    })
};


