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
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/06e65ace8dce3638e847b04e975489d1.jpg_750x200_a2dcb0a4.jpg'
            },{
                id: '0002',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/c3635f8f6ac6a40f5069cd1b2b896100.jpg_750x200_0e548e3b.jpg'
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