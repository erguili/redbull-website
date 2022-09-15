<template>
<div class="navbar">
    <nav class="nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/leden">Leden</router-link>
        <router-link to="/races">Races</router-link>
        <router-link to="/autos">Auto's</router-link>
        <router-link to="/coureurs">Coureurs</router-link>
        <router-link to="/stats">Stats</router-link>
    </nav>
</div>
<router-view/>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    .navbar {
        line-height: 2;
        height: 70px;
        background-color: #001120;

    }
    .navbar a:focus {
        color: red;
        border-bottom: 3px red solid;
    }
    .nav a{
        text-decoration: none;
        text-align: center;
        box-sizing: border-box;
        padding: 10px 8px;
        margin: 0 25px -8px 25px;
        color: white;       
        }
    .nav {

        height: 50px;
        width: 100%;
        padding: 10px 10px;
        display: inline-flex;
        justify-content: center;
    }
    .navbar {
        font-family: 'Roboto', sans-serif;
        font-size: 90%;
        max-width: auto;
        overflow: auto;
        margin: 0 auto;
    }
</style>