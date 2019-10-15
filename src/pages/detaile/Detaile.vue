<template>
    <div>
        <detaile-banner
            :sightName='sightName'
            :bannerImg='bannerImg'
            :bannerImgs='gallaryImgs'
        ></detaile-banner>
        <detaile-header></detaile-header>
        <div class="content">
            <detaile-list :list='list'></detaile-list>
        </div>
    </div>
</template>

<script>
import DetaileBanner from './components/Banner'
import DetaileHeader from './components/Header'
import DetaileList from './components/List'
import axios from 'axios'
export default {
    name: 'Detaile',
    components: {
        DetaileBanner,
        DetaileHeader,
        DetaileList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    methods: {
        getDetaileInfo () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            console.log(res)

            let Address = ['']
            //获取跳转地址
            // console.log(this.$route.params.id)
            for(var item in res.data.data){
                //获取json中所有的详情页面名字，封装到数组中,方便选择跳转
                Address.push(item)
                // console.log(Address)
            }
            
            const dataId = this.$route.params.id
            res = res.data
            if (res.ret && res.data) {
                let data = res.data

                // 根据路由得到的id 拼接所要跳转页面的字符串
                // console.log(parseInt(dataId))
                let arrId = parseInt(dataId)
                // console.log("data." + Address[arrId])
                let dataName = "data." + Address[arrId]
                data = eval(dataName)
                // if(dataId === data.guLangYu.id){
                //     data = data.guLangYu
                // }


                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted () {
        this.getDetaileInfo ()
    }
}
</script>

<style lang='stylus' scoped>
     .content
        height 50rem
</style>