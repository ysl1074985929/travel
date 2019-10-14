<template>
    <div class="guess">
        <div class='title'>猜你喜欢</div>
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <div  class="guess-wrapper">
                    <img class="guess-img" :src="item.imgUrl">
                    <p class="guess-addTitle">{{item.title}}</p>
                    <p class="guess-price">￥{{item.price}}</p>
                </div>
            </swiper-slide>  
            
        </swiper>
    </div>
    
</template>

<script>
export default {
    name: 'Guess',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                slidesPerView: 3
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .guess
        .title
            margin-top .2rem
            line-height .8rem
            background-color #eee
            text-indent .2rem
        .guess-wrapper
            text-align center
            margin  .2rem 0 0 .2rem
            .guess-img
                width 100%
            p
                padding .1rem 0
            .guess-price
                color red
            


</style>