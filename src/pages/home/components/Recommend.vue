<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>

            </li>
        </ul>
    </div>
        
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return{
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
                title: '鼓浪屿',
                desc: '琴之岛，乐之屿'
            }, {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/91/919987896bca93ba3.img.jpg_200x200_adfcb3af.jpg',
                title: '厦门园林植物园',
                desc: '俗称“万石植物园”'
            }, {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1909/a3/a30be9e11758d2b7a3.img.jpg_110x110_e559938f.jpg',
                title: '厦门市园博苑',
                desc: '厦门国际园林博览苑'
            }, ]
        }
        
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top .2rem
        line-height .8rem
        background-color #eee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                line-height .44rem
                margin-top .16rem
                background-color #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff
</style>