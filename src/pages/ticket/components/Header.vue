<template>
    <div class="header border-bottom">
        <router-link class="header-left" to='/'>
            <div class="iconfont icon-back">&#xe667;</div>
        </router-link>
        <input class="header-input" type="text" placeholder="输入城市或景点">
            
        <div class="header-right">
            搜索
        </div>
        
    </div>
    
</template>

<script>
export default {
    name: 'TicketHeader'
}
</script>

<style lang='stylus' scoped>
    @import "~styles/varibles.styl"
    .border-bottom
        &:before
            border-color #ccc
    .header
        display flex
        line-height $headerHeight
        background-color white
        color #fff
        .header-left
            width 0.64rem
            float left
            color $bgColor
            .icon-back
                text-align center
                font-size .4rem
        .header-input
            text-align center
            flex 1
            height .64rem
            line-height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            background-color #f2f2f2
            border-radius .6rem
            font-size .28rem
        .header-right
            min-width 1.04rem
            padding 0 .1rem
            float right
            text-align center
            color $bgColor
            
</style>