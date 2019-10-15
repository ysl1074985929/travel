<template>
    <div class="content">
        <router-link 
            tag='div'
            class="content-wrapper" 
            v-for="item of list" 
            :key='item.id'
            :to="'/detaile/' + item.id"
        >

            <div class="content-top border-bottom">
                <div class="content-img">
                    <img class="imgIn" :src="item.minImg">
                </div>
                <div class="content-desc">
                    <p class="content-add-name">{{item.sightName}}</p>
                    <p class="content-add-price">
                        <span class="font-color">￥</span><span class="font-color big-font">{{item.minPrice}}</span> 
                    起
                    </p>
                    <ul>
                        <span class="ulSpan" v-for="(item, index) of item.categoryList" :key='index'>
                            {{item.ps[0]}}
                        </span>
                    </ul>
                </div>
                
            </div>
        </router-link>
    </div>    
</template>

<script>

export default {
    name: 'TicketContent',
    props: {
        list: Object
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-bottom
        &:before
            border-color #ccc
    .content
        .content-wrapper
            border-bottom .4rem solid #f2f2f2
            .content-top
                display flex
                padding .2rem .4rem
                .content-desc
                    flex 3
                    padding .2rem .2rem 0 .2rem
                    line-height .44rem
                    font-size .24rem
                    .content-add-name
                        font-size .32rem
                    .content-add-price
                        margin-top .63rem 
                        .font-color
                            color $themeColor
                        .big-font
                            font-size .5rem
                    .ulSpan
                        margin-left .2rem
                        border-radius .06rem
                        border 1px solid $bgColor
                .content-img
                    flex 1
            .content-ticket-list
                padding .2rem .4rem
                font-size .28rem
                line-height .56rem
                .conten-ticket-price
                    float right
                    color $themeColor
                    .ticket-price-font
                        font-size .35rem


            
</style>

