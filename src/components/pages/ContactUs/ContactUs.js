/**
 * Arquivo: src/components/pages/ContactUs/ContactUs.js
 * Data: 12/11/2018
 * Descrição: arquivo responsável por tratar a lógica do 'ContactUs.js'
 * Author: Glaucia Lemos
 */

import Vue from "vue";

export default {
  name: "ContactUs",
  data() {
    return {
      printing: false,
      textarea_field: ""
    };
  },
  methods: {
    PrintTextAreaContent: function() {
      this.printing = true;
      print();
    }
  }
};
