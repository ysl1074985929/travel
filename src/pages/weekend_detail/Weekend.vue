<template>
    <div>
        <weekend-detail :info='pageInfo'></weekend-detail>
    </div>
</template>

<script>
import WeekendDetail from './components/Detail'
import axios from 'axios'

export default {
    name: 'Weekend',
    components: {
        WeekendDetail,
    },
    data () {
        return {
            pageInfo: {}
        }
       
    },
    methods:{
        getWeekendDetailInfo () {
            axios.get('/api/weekend-detail.json', {
                params: {
                    id: this.$route.params.id
                }
            })
                .then(this.handleGetWeekenfInfoSucc)
                
        },
        handleGetWeekenfInfoSucc (res) {
            
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
                let arrId = parseInt(dataId)
                let dataName = "data." + Address[arrId]
                data = eval(dataName)
                this.pageInfo = data
                
            }
        }
    },
    mounted () {
        // mounted的时候请求 ajax，获取数据
        this.getWeekendDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
            
</style>