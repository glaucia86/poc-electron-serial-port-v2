<template>
    <div class="container-full jumbotron">
    <div class="container">
      <div class="col-lg-12 text-center">
        <h1 class="text-center"><span class="glyphicon glyphicon-log-in" aria-hidden="true"></span> Identificador de
          Portas USB
        </h1>
        <p class="text-center">
          <img src="https://bit.ly/2P72NJb" alt="logo">
        </p>
        <h2 class="text-center">POC | Demo</h2>
          <br /><br />
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="https://github.com/glaucia86/poc-electron-serial-port" role="button">Documentação
              da Aplicação</a>
          </p>
      </div>

      <!-- Início select usando o 'node-usb'-->
      <div class="row">
        <div class="col-md-12">
          <div class="form-group row">
            <div class="col-xs-4">
              <label for="sel1">Lista de Dispositivos USB Disponíveis:</label>
              <select class="form-control" id="display"></select>
            </div>
          </div>
        </div>
      </div>
      <!-- Fim select usando o 'node-usb'-->
      <br />

      <!-- Início select usando o 'serialport'-->
      <div class="row">
        <div class="col-md-12">
          <div class="form-group row">
            <div class="col-xs-4">
              <label for="sel2">Lista de Portas Seriais Disponíveis:</label>
              <select class="form-control" id="displaySerialPort"></select>
            </div>
          </div>
        </div>
      </div>
      <!-- Fim select usando o 'serialport'-->
      <br />

      <!-- Início textarea - comment'-->
      <div class="form-group">
        <label for="comment">Escreva Algo Aqui:</label>
        <textarea class="form-control" name="" id="pdf-path" rows="10"></textarea>
      </div>
      <!-- Fim textarea - comment'-->

      <button class="btn btn-primary" id="print-pdf">Imprimir</button>
    </div>
  </div>   
</template>

<script>
</script>

<style></style>


