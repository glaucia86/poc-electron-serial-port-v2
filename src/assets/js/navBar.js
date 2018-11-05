/**
 * Arquivo: src/assets/js/navBar.js
 * Data: 05/11/2018
 * Descrição: arquivo responsável por tratar o efeito 'hamburguer' do navbar da aplicação.
 * Author: Glaucia Lemos
 */

$(document).ready(() => {
  const trigger = $('.hamburger');
  const overlay = $('.overlay');
  let isClosed = false;

  trigger.click(() => {
    // eslint-disable-next-line no-use-before-define
    hamburgerCross();
  });

  function hamburgerCross() {
    if (isClosed === true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(() => {
    $('#wrapper').toggleClass('toggled');
  });
});
