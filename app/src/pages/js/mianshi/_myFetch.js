

function myFetch(urls, max, callback) {
    let pending_count = 0;
    const allUrls = [...urls];
    
    async function _fetch(url) {
        if (!url) {
            return;
        }
        pending_count++;
        await fetch(url);
        pending_count--;
        _fetch(allUrls.shift());
        pending_count || callback && callback();
    }
    while(pending_count < max) {
        _fetch(allUrls.shift());
    }
}