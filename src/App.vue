<template>
    <div class="main">
        <Navbar/>

    </div>

</template>

<script>

import Navbar from '@/views/Navbar.vue'
import Profiles from '@/views/Profiles.vue'
import Login from '@/views/Login.vue'

export default {
    components: {
        Navbar,
        Profiles,
        Login
        }
}

</script>

<style>
body{
    height: 100vh;
    background-color: #001931;
    color: white;
}
</style>