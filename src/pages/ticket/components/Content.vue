<template>
    <div class="content">
        <div class="content-wrapper">

            <div class="content-top border-bottom">
                <div class="conten-img">
                    <img src="https://imgs.qunarzz.com/sight/p0/1902/91/919987896bca93ba3.img.jpg_110x110_510b7f01.jpg">
                </div>
                <div class="content-desc">
                    <p class="content-add-name">鼓浪屿</p>
                    <p class="content-add-price">
                        <span class="font-color">￥</span><span class="font-color big-font">39</span> 
                    起
                    </p>
                    <ul>
                        <span>
                            条件退 无需换票
                        </span>
                    </ul>
                </div>
                
            </div>

            <div class="content-ticket-list border-bottom">
                <div class="conten-ticket-price">
                    ￥<span class="ticket-price-font">30</span>
                </div>
                <div class="content-ticket-name">厦门植物园</div>
            </div>

            <div class="content-ticket-list border-bottom">
                <div class="conten-ticket-price">
                    ￥<span class="ticket-price-font">30</span>
                </div>
                <div class="content-ticket-name">厦门植物园</div>
            </div>

        </div>
    </div>    
</template>

<script>
export default {
    name: 'TicketContent'
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
                .conten-img
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

