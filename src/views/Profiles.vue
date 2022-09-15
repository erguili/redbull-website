<template>
<div id='profile'>
    {{ fname }}
</div>
</template>

<script>
export default {
    props: ['profile'],
    data() {
        return {
            profiles: [
                { 
                id: 1,
                fname: 'Max', 
                lname: 'Verstappen', 
                team: 'Drivers', 
                position: '1st driver', 
                specialties: 'Driver insight, analytical, clear communicator',
                picture: '@/assets/DriverMV1.jpg'
                }
            ]
        }
    }
}
</script>

<style>

</style>