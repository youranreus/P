/**
 * @author 季悠然
 * @date 2020-12-20
 */

let app = new Vue({
    el: '#wrapper',
    data:{
        apiUrl: 'https://妹.space',
        sites: [],
        blog: [],
        status: [],
        gotBlog: false,
        gotStatus: false
    },
    methods:{
        getBlog: function (){
            let that = this;
            that.$nextTick(() => {
                axios.get(that.apiUrl + '/X/getBlogRSS?url=http://gundam.exia.xyz/feed')
                    .then((response) => {
                        that.blog = response.data;
                        that.gotBlog = true;
                    })
            })
        },
        getStatus: function (){
            let that = this;
            that.$nextTick(() => {
                axios.get(that.apiUrl + '/X/status')
                    .then((response)=>{
                        that.status = response.data;
                        that.gotStatus = true;
                    })
            })
        }
    },
    created(){
        let that = this;
        axios.get(that.apiUrl + '/X/getSites')
            .then((response)=>{
                that.sites = response.data;
            })
        that.getBlog();
        that.getStatus();
    }
});