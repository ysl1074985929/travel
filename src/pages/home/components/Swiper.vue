<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key='item.id'>
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data: function(){
        return{
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/13/3f8c61c90ca78b02.jpg_750x200_de87b792.jpg'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/b6/1552bceb1cf7d002.jpg_750x200_d4cfad3e.jpg'
            }]
        }
    }
}
</script>

<style scoped lang='stylus'>
    .wrapper >>> .swiper-pagination-bullet-active
        background-color #fff 
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 26.7%
        background-color #eee
        .swiper-img
            width 100%
</style>