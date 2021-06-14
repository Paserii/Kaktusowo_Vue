<template >
  <div class="section">
    <h1> YOUTUBE </h1>
    <h2> Kaktus </h2>
    <button class="button_yt" type="button" >
      <a href="https://www.youtube.com/channel/UCo-lA-94nl-ZmR9t4BFtykA" target="_blank"> Subscribe</a>
    </button>

    <div class="row">
      <div class="column miniaturki_all">
        <a href="https://www.youtube.com/watch?v=6fwOQlvfROY&t=4s"><img src="../assets/miniaturka1.jpg" style="width:100%"></a>
      </div>
      <div class="column">
        <a href="https://www.youtube.com/watch?v=0uZCH0Wjq9A&t=24s"><img src="../assets/miniaturka2.jpg" style="width:100%"></a>
      </div>
      <div class="column">
        <a href="https://www.youtube.com/watch?v=InLaDy4q8kE"><img src="../assets/miniaturka3.jpg" style="width:100%"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Youtube.vue"
}
</script>

<style scoped>
.button_yt {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgba(220, 0, 0, 1);
  background-image: linear-gradient(to top left,
  rgba(0, 0, 0, .2),
  rgba(0, 0, 0, .2) 30%,
  rgba(0, 0, 0, 0));
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
  inset -2px -2px 3px rgba(0, 0, 0, .6);
}

a {
  text-decoration: none;
  text-transform: uppercase;
  color: white;
}

.button_yt:hover {
  background-color: rgba(255, 0, 0, 1);
}

.button_yt:active {
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
  inset 2px 2px 3px rgba(0, 0, 0, .6);
}

.miniaturki_all {
  padding: 5%;
}

.column {
  float: left;
  width: 33.33%;
  padding: 1%;
  flex: 33.33%;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

.row {
  display: flex;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 5%;
}

</style>