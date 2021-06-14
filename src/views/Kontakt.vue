<template>
  <div class="section">
    <form class="kontakt" id="email_form" >
      <label for="email"> Podaj swojego maila: </label>
      <input type="email" placeholder="adres email" id="email">
      <label for="temat"> Temat wiadomości: </label>
      <input type="text" placeholder="temat" id="temat">
      <label for="tresc"> Treść wiadomości: </label>
      <textarea form="email_form" id="tresc" placeholder="tresc">

    </textarea>
      <button> Send </button>
    </form>
<p class="paragraf">
  <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
</p>
  </div>
</template>

<script>
export default {
  name: "Kontakt.vue"
}
</script>

<style scoped>

.paragraf {
  bottom: 10px;
}

textarea {
  height: 200px;
  width: 400px;
}

.kontakt {
  background-color: white;
  height: auto;
  width: 1000px;

}
* {
  /*background-color: darkgreen;*/
}

form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
  border: 1px solid  black;
  background: white;
}
input, textarea, select {
  border: 0;
  border-bottom: 1px solid black;
  padding: 10px;
  outline: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
}
</style>