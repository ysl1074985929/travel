<template>
    <div>
        <ticket-header></ticket-header>   
        <ticket-content :list='detaileList'></ticket-content> 
    </div>    
</template>

<script>
import TicketHeader from './components/Header'
import TicketContent from './components/Content'
import axios from 'axios'
export default {
    name: 'Ticket',
    data () {
        return {
            detaileList: {}
        }
    },
    components: {
        TicketHeader,
        TicketContent
    },
    methods:{
        handleGetDataSucc (res) {
            this.detaileList = res.data.data
            console.log(this.detaileList)
        
        }
    },
    mounted () {
        axios.get('/api/detail.json')
            .then(this.handleGetDataSucc)
    }
}
</script>

<style lang="stylus" scoped>

</style>

