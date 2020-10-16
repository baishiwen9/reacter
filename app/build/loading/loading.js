(function(window) {
    window.UI = {
        loading: {
            target: null,
            isShow: true,
            show() {
                if (this.isShow) {
                    return;
                }
                if (!this.target) {
                    this.target = document.querySelector('.global-loading-warp');
                }
                this.target.classList.remove('hide');
                this.target.classList.add('show');
                this.isShow = true;
            },
            hide() {
                if (!this.isShow) {
                    return;
                }
                if (!this.target) {
                    this.target = document.querySelector('.global-loading-warp');
                }
                this.target.classList.remove('show');
                this.target.classList.add('hide');
                this.isShow = false;
            }
        }
    }
})(window);