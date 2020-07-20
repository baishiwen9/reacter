(function(window) {
    // CO: come on
    window.CO.loading = {
        target: null,
        isShow: false,
        show() {
            if (this.isShow) {
                return;
            }
            if (!this.target) {
                this.target = document.querySelector('.co-ui-loading');
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
                this.target = document.querySelector('.co-ui-loading');
            }
            this.target.classList.remove('show');
            this.target.classList.add('hide');
            this.isShow = false;
        }
    }

})(window);