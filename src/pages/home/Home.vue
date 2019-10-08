<template>
    <div>
        <div class='home'>home</div>
        <router-link to='/About' class='home'>点击跳转到about</router-link>
    </div>
    
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
    .home{
        font-size: 50px;
    }
</style>