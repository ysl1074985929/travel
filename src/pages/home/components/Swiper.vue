<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            
            <swiper-slide v-for="item of list" :key='item.id'>
                <router-link :to="'/detaile/' + item.id">
                    <img class="swiper-img" :src="item.imgUrl">
                </router-link>
            </swiper-slide>
            
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data: function(){
        return{
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }
        }
    },
    computed: {
        showSwiper () {
            return this.list.length
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