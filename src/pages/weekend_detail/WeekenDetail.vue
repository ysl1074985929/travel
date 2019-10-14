<template>
    <div class="weekend-detail">
        <div class="header-fixed">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe667;</div>
            </router-link>
            厦门必打卡
        </div>

        <div class="weekend-address" v-for="(item) of address" :key='item.id'>
            <img class="weekend-img" :src="item.imgUrl">
            <div class="weekend-address-info">
                <div class="weekend-price">
                    <span class="font-color">￥</span><span class="font-color big-font">{{item.price}}</span> 
                    起
                </div>
                <div class="weekend-text">
                    <h1 class="weekend-address-title">
                        {{item.title}}
                    </h1>
                    <p class="weekend-address-desc">
                        {{item.desc}}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'WeekendDetail',
    data () {
        return {
            address: this.address
        }
    },
    methods:{
        getWeekendDetailInfo () {
            axios.get('/api/weekend-detail.json',)
                .then(this.handleGetWeekenfInfoSucc)
        },
        handleGetWeekenfInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.address = data.address
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
    @import '~styles/mixins.styl'
    @import '~styles/varibles.styl'
    .weekend-detail
        background-color #eee
        .header-fixed
            height $headerHeight
            line-height $headerHeight
            text-align center
            color #fff
            background-color $bgColor
            font-size .32rem
            .header-fixed-back
                position absolute
                top 0
                left 0
                width 0.64rem
                text-align center
                font-size .4rem
                color #fff
        .weekend-address
            margin-bottom .3rem
            background-color white
            .weekend-img
                width 100%
            .weekend-address-info
                padding .2rem .3rem
                .weekend-price
                    margin-top .2rem
                    float right
                    .font-color
                        color $themeColor
                    .big-font
                        font-size .5rem
                .weekend-text
                    .weekend-address-title
                        font-size .36rem
                        line-height  .54rem
                    .weekend-address-desc
                        font-size .26rem
                        line-height  .45rem
                        color $lightTextColor
                        ellipsis()
            
</style>