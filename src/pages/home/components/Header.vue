<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-back">&#xe667;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe63f;</span>
            输入城市/景点/游玩主题
            </div>
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'HomeHeader',
    props: {
        city: String
    }
}
</script>

<style lang='stylus' scoped>
    @import "~styles/varibles.styl"
    .header
        display flex
        line-height 0.86rem
        background-color $bgColor
        color #fff
        .header-left
            width 0.64rem
            float left
            .icon-back{
                text-align center
                font-size .4rem
            }
        .header-input
            flex 1
            height .64rem
            line-height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            background-color #fff
            border-radius .1rem
            color #ccc
        .header-right
            width 1.24rem
            float right
            text-align center
            .arrow-icon
                font-size .24rem
                margin-left -.04rem
</style>