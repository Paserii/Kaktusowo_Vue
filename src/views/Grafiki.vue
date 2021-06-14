<template >
  <div class="section grafiki">
    <h1> GRAFIKI </h1>
    <h2> Na zamówienie </h2>
    <div class="row_grafika">

      <a href="#" target="_blank" class="button"> Miniaturki </a>

      <a href="#" target="_blank" class="button"> Banery </a>

      <a href="#" target="_blank" class="button"> Emojiii </a>
  </div>

  </div>
</template>

<script>
export default {
  name: "Grafiki.vue"
}
</script>

<style scoped>
.button {
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  color: black;
  height: 120px;
  width: 180px;
  margin-left:30px;
  border: none;
  text-align: center;
  border-radius: 20px;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}


.button:hover {
  background-color: black;
  color: white;
}

.grafiki {
  background-color: darkolivegreen;
}


.row_grafika {
  display: flex;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 5%;
}

</style>