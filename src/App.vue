<template>
      <div id="wrapper">
      <div class="overlay"></div>

      <!-- Início Sidebar -->
      <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
        <ul class="nav sidebar-nav">
          <li class="sidebar-brand"><a href="#">Zoox | Brand</a></li>
          <li><router-link to="/">Página Principal</router-link></li>
          <li><router-link to="/about">Cadastro</router-link></li>
          <li><router-link to="/about">Check-in</router-link></li>
          <li><router-link to="/about">Sobre</router-link></li>
          <li><a href="http://zooxsmart.com/pt-br/">Entre em Contato</a></li>
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
