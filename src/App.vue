<template>
  <div class="all">
<!--    <link rel="icon" href="./assets/discord.svg">-->
  <div class="navbar">
    <ul>
      <li><router-link to="/">Serwer</router-link></li>
      <li><router-link to="/youtube">Youtube</router-link></li>
      <li><router-link to="/grafiki">Grafiki</router-link></li>
      <li><router-link to="/kontakt">Kontakt</router-link> </li>
    </ul>
    <a href="https://discord.gg/TnXPTaqh58" target="_blank"><img class="img" src="./assets/discord.svg"></a>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.img {
  padding-top: 20px;
  padding-right: 20px;
  height: 50px;
  width: 50px;
}

.all {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  overflow: hidden ;
}
body {
  font-family: Arial;
  background: gray;
  color: aliceblue;
  line-height: 1.6;
  height: 100vh;

}

.navbar {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 80px;
  background:black ;
  justify-content: space-between;
}

.navbar ul {
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: center;
}


.navbar ul li {
  margin: 0 1 rem;
  padding: 1rem;
  font-size: 30px;
  display: flex; align-items: center;
}

.navbar ul li a {
  text-decoration: none;
  text-transform: uppercase;
  color: white;
}

.navbar ul li a:hover {
  color: green;
}


.navbar ul li ul {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  display: none;
}

.navbar ul li:hover > ul,
.navbar ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;

}

.navbar ul li ul li {
  clear: both;
  width: 100%;

}
.content {
  position: relative;
  width: 100%;
  height: 100%;
  top:80px;
  scroll-behavior: smooth;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
}

.section h1 {
  font-size: 6rem;
  text-shadow: 18px 18px 18px black;
}

.section h2 {
  text-shadow: 8px 8px 8px black;
}

.section p {
  font-size: 1.5 rem;
  text-shadow: 8px 8px 8px black;
}


</style>
