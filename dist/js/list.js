const app = {
    data() {
        return {
            page: 0,
            list: []
        }
    },
    mounted() {
        this.getlist();
    },
    methods: {
        //格式时间
        formatDate(time) {
            return dayjs(time).format("YYYY-MM-DD");
        },
        setStr(url) {
            if (url.substr(0, 7).toLowerCase() == "http://" || url.substr(0, 8).toLowerCase() == "https://") {
                url = url;
            } else {
                url = baseDomain + url;
            }
            return url;
        },
        //获取list
        getlist() {
            let url = baseUrl;
            this.page++;
            axios.post(url, {
                    p: this.page
                })
                .then(res => {
                    if (res.data.list.length == 0) {
                        alert('没有更多啦!');
                    }
                    this.list = this.list.concat(res.data.list || []);
                }).catch(function(error) {
                    console.log(error);
                });
        },
        //鼠标经过
        addClass($event) {
            $event.currentTarget.className = "card mb-3 position-relative border-0 shadow";
        },
        removeClass($event) {
            $event.currentTarget.className = "card mb-3 position-relative border-0";
        }
    }
}
Vue.createApp(app).mount('#app');