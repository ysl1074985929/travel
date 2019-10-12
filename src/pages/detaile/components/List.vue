<template>
    <div>
        <div 
            class="item" 
            v-for="(item, index) of list" 
            :key="index"
        >
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detaile-list :list='item.children'></detaile-list>
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
    .item-title
        line-height .8rem
        font-style .32rem
        padding 0 .2rem
    .item-children
        padding 0 .2rem
        
</style>