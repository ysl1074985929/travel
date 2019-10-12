<template>
    <div>
        <detaile-banner></detaile-banner>
        <detaile-header></detaile-header>
        <div class="content"></div>
    </div>
</template>

<script>
import DetaileBanner from './components/Banner'
import DetaileHeader from './components/Header'
export default {
    name: 'Detaile',
    components: {
        DetaileBanner,
        DetaileHeader
    }
}
</script>

<style lang='stylus' scoped>
     .content
        height 50rem
</style>