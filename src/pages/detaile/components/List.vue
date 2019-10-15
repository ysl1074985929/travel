<template>
    <div>
        <div class="min-title border-bottom">去哪儿推荐</div>
        <div 
            class="item border-bottom" 
            v-for="(item, index) of list" 
            :key="index"
        >
            <div class="item-title">
                <span class="item-title-icon"></span>
                {{item.title}}
                <div class="item-min desc">
                    <img class="item-min-mig" :src="item.img">
                    {{item.time}}
                </div>
                <ul>
                    <span 
                        class="item-min ulSpan" 
                        v-for="(item, index) of item.ps"
                        :key="index"
                    >
                        {{item}}
                    </span>
                </ul>
            </div>
            <div class="item-price-btn">
                <p class="item-price">
                    ￥
                    <span class="item-price-num">{{item.price}}</span>
                </p>
                <button class="item-btn">{{item.btn}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetaileList', 
    props: {
        list: Array
    } 
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-bottom
        &:before
            border-color #ccc
    .min-title
        line-height .8rem
        background-color #eee
        text-indent .2rem
    .item
        position relative
        .item-title
            padding .2rem
            width 5rem
            line-height .52rem
            font-size .32rem
            .item-title-icon
                position relative
                left 0.06rem
                top 0.06rem
                display: inline-block
                width: .36rem
                height: .36rem
                background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
                margin-right: .1rem
                background-size: .4rem 3rem
            .item-min
                color  $bgColor
                margin  .2rem 0
                font-size .24rem
                .item-min-mig
                    width .2rem
                    margin-top -.05rem
            .desc
                margin-left .2rem
            .ulSpan
                margin-left .2rem
                border-radius .06rem
                border 1px solid $bgColor
            .item-title
                line-height .8rem
                font-style .32rem
                padding 0 .2rem
            .item-children
                padding 0 .2rem
        .item-price-btn
            text-align center
            position absolute
            top 50%
            right -5%
            transform  translate(-50%, -50%)
            .item-price
                color $themeColor
                .item-price-num
                    font-size .5rem
            .item-btn
                line-height .44rem
                background-color $themeColor
                padding 0 .4rem
                border-radius .06rem
                color #fff

        
</style>