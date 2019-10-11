<template>
    <div>
        <div class="banner" @click='handleBannerClick'>
            <img class='banner-img' src="//img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_600x330_ae0eb039.jpg">
            <div class="banner-info">
                <div class="banner-title">
                    鼓浪屿(AAAAA景区)
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe674;</span>
                    34
                </div>
            </div>
        </div>
        <common-gallary
            :imgs='imgs' 
            v-show='showGallary'
            @close='handleGallaryClose'
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetaileBanner',
    data () {
        return {
            showGallary: false,
            imgs: ['http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_r_800x800_94ccd288.jpg',
                 'http://img1.qunarzz.com/sight/p0/1905/70/706135ad3f10c621a3.img.jpg_r_800x800_666c144b.jpg']
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    },
    components: {
        CommonGallary
    }
}
</script>

<style lang='stylus' scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                height 0.32rem
                margin-top .14rem
                padding 0 .4rem
                line-height .32rem
                border-radius .2rem
                background-color rgba(0, 0, 0, .8)
                font-size .24rem
                .banner-icon
                    font-size .24rem

</style>