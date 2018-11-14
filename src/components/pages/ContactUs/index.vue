<template>
  <div class="contactus">
    <div class="container">
      <div class="col-lg-12">
        <h1>Esta é a Página Entre em Contato</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      </div>

      <!-- Início textarea - comment'-->
       <div class="form-group">
        <label for="comment">Escreva Algo Aqui:</label>
           <textarea v-model="textarea_field" class="form-control" name="" rows="5" cols="30"></textarea>
      </div>
      <!-- Fim textarea - comment'-->

      <button class="btn btn-primary" @click="PrintTextAreaContent()">Imprimir</button>
    </div>
    <div v-if="printing" class="container">
      <div style="white-space:pre-line;">
        {{textarea_field}}
      </div>
    </div>
  </div>
</template>

<script src="./ContactUs"/>

<style scoped>
</style>

