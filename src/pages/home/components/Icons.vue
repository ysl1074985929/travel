<template>
    <div class="Icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div 
                    class="icon" 
                    v-for='item of page'
                    :key='item.id'
                >
                    <router-link to='/ticket'>
                        <div class="icon-img">
                            <img class="icon-img-content" :src="item.imgUrl">
                        </div>
                        <p class="icon-desc">{{item.desc}}</p>
                    </router-link>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                autoplay: false
            }
        }
    },
    computed: {
        pages () {
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
        .Icons >>> .swiper-pagination
            position relative
            bottom -3.5rem
        .Icons >>> .swiper-pagination-bullet-active
            background-color $themeColor
        .Icons >>> .swiper-container
            height 0
            padding-bottom 50%
        .Icons
            margin-top .1rem
            .icon
                position relative
                overflow hidden
                float left
                width 25%
                height 0
                padding-bottom 25%
                .icon-img
                    position absolute
                    top 0
                    left 0
                    right 0
                    bottom 0.44rem
                    box-sizing border-box
                    padding .1rem
                    .icon-img-content
                        display block
                        margin 0 auto
                        height 100%
                .icon-desc
                    position absolute
                    left 0
                    right 0
                    bottom 0
                    height  0.44rem
                    line-height 0.44rem
                    color $bgColor
                    text-align center
                    ellipsis()
</style>