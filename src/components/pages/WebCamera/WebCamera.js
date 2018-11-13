/**
 * Arquivo: src/components/pages/WebCamera/WebCamera.js
 * Data: 12/11/2018
 * Descrição: arquivo responsável por tratar a lógica do 'WebCamera.js'
 * Author: Glaucia Lemos
 */

import { WebCam } from "vue-web-cam";
import { find, head } from "lodash";

export default {
  name: "app",
  components: {
    WebCam
  },
  data() {
    return {
      img: null,
      camera: null,
      deviceId: null,
      devices: []
    };
  },
  computed: {
    device: function() {
      return find(this.devices, n => n.deviceId == this.deviceId);
    }
  },
  watch: {
    camera: function(id) {
      this.deviceId = id;
    },
    devices: function() {
      // Once we have a list select the first one
      let first = head(this.devices);
      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    }
  },
  methods: {
    onCapture() {
      this.img = this.$refs.webcam.capture();
    },
    onStarted(stream) {
      console.log("On Started Event", stream);
    },
    onStopped(stream) {
      console.log("On Stopped Event", stream);
    },
    onStop() {
      this.$refs.webcam.stop();
    },
    onStart() {
      this.$refs.webcam.start();
    },
    onError(error, stream) {
      console.log("On Error Event", error, stream);
    },
    onCameras(cameras) {
      this.devices = cameras;
      console.log("On Cameras Event", cameras);
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
      console.log("On Camera Change Event", deviceId);
    }
  }
};
