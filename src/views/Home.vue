<template>

<header class="profile-container">
<img class="pfpic" v-for="user in users" :key="user" :src="user.picture" alt="Profile Picture"/>
<h1 class ="name" v-for="user in users" :key="user">Welcome {{user.fname}} {{user.lname}}!</h1>
<p v-for="user in users" :key="user">Team: {{user.team}}</p>
<p v-for="user in users" :key="user">Position: {{user.position}}</p>
<p v-for="user in users" :key="user">Specialties: {{user.specialties}}</p>
</header>
<News/>

</template>

<script>
import usersData from "../json/profile.json";

let select = 2;
let user = usersData.filter(e=> e.id == select)

import News from '@/views/News.vue'
import Profiles from '@/views/Profiles.vue'
export default {
  data() {
    return {
      users: user,
    }
  },
  components: {
    Profiles,
    News
  }
}
</script>

<style>
.profile-container {
  background-color: #253C50;
  height: 42vh;
  box-shadow: 0px 5px 20px black;
  font-family: 'Roboto', sans-serif;
  display: flex;
}
.pfpic {
  width: 300px;
  height: 180px;
  border-radius: 15px;
}

.name {
  font-size: 70px;
}
</style>