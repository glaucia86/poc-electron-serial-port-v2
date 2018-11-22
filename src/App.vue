<template>
      <div id="wrapper">
      <div class="overlay"></div>

      <!-- Início Sidebar -->
      <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
        <ul class="nav sidebar-nav">
          <li class="sidebar-brand"><a href="#">Zoox | Brand</a></li>
          <li><router-link to="/">Página Principal</router-link></li>
          <li><router-link to="/registration">Cadastro</router-link></li>
          <li><router-link to="/checkin">Check-in</router-link></li>
          <li><router-link to="/webcamera">Webcam</router-link></li>
          <li><router-link to="/about">Sobre</router-link></li>
          <li><router-link to="/contactus">Entre em Contato</router-link></li>
          <li><router-link to="/configuration">Configuração App</router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
      <!-- /# Fim Sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">
        <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
          <span class="hamb-top"></span>
          <span class="hamb-middle"></span>
          <span class="hamb-bottom"></span>
        </button>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
    <!-- /#wrapper -->
</template>

<script></script>

<style></style>

