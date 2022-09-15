<template>
<h1 class="newsHead">News</h1>
  <ul class="newslist">
      <li> <h1>{{ news[0].title }}</h1> <p>{{ news[0].newsItem }}</p> </li>
      <li> <h1>{{ news[0].title }}</h1> <p>{{ news[0].newsItem }}</p> </li>
      <li> <h1>{{ news[0].title }}</h1> <p>{{ news[0].newsItem }}</p> </li>
      <li> <h1>{{ news[0].title }}</h1> <p>{{ news[0].newsItem }}</p> </li>
  </ul>
</template>

<script>
export default {   
    data() {
        return {
            news: [
                { 
                id: 1,
                title: 'Title', 
                newsItem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus neque in blandit accumsan. Praesent eget eros nisi. Maecenas fringilla nibh efficitur rutrum suscipit.'
                }
            ]
        }
    }

}
</script>

<style>
    .newsHead {
    padding: 50px 43px 0px 43px;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    font-size: 65px;
    }

    .newslist h1 {
    margin: 0px;
    padding: 8px 0px 11px 0px;
    color: crimson;

    }
    .newslist p {
    color: rgb(180, 180, 180);
    padding: 7px;
    margin: -5px 10px 10px 0px;
    
    
    }
    .newslist {
    display: inline-flex;
    list-style-type: none;
    font-family: 'Roboto', sans-serif;

    }

    .newslist li {
    border: 5px solid rgb(255, 255, 255);
    padding: 22px;
    margin: 42px;
    border-radius: 18px;
    height: auto;
    width: auto;
    background-color: white;
    }
</style>