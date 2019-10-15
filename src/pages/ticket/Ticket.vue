<template>
    <div>
        <ticket-header></ticket-header>   
        <ticket-content></ticket-content> 
    </div>    
</template>

<script>
import TicketHeader from './components/Header'
import TicketContent from './components/Content'
export default {
    name: 'Ticket',
    components: {
        TicketHeader,
        TicketContent
    }
}
</script>

<style lang="stylus" scoped>

</style>

