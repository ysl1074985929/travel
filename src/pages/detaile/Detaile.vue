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
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
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