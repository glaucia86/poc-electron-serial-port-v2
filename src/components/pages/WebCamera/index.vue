<template>
<div class="webcam">
   <div class="row">
     <div class="col-md-6">
       <h2>WebCam</h2>
       <!-- Usando 'v-if' com intuito de identificar as câmeras disponíveis na aplicação -->
       <code v-if="device">{{ device.label }}</code>
       <div class="border">
         <web-cam
            width="100%"
            :deviceId="deviceId"
            @started="onStarted"
            @stopped="onStopped"
            @error="onError"
            @cameras="onCameras"
            @camera-change="onCameraChange"/>
       </div>

       <div class="row">
         <div class="col-md-12">
           <select v-model="camera">
             <option value="">-- Escolha a Câmera --</option>
             <option v-for="device in devices" :key="device.deviceId" :value="device.deviceId">{{ device.label }}</option>
           </select>
         </div>
         <div class="col-md-12">
           <button type="button" class="btn btn-primary" @click="onCapture">Tirar Foto</button>
           <button type="button" class="btn btn-danger" @click="onStop">Parar Câmera</button>
           <button type="button" class="btn btn-success" @click="onStart">Iniciar Câmera</button>
         </div>
       </div>
     </div>
     <div class="col-md-6">
       <h2>Capturar Foto</h2>
       <figure class="figure">
         <img :src="img" class="img-responsive">
       </figure>
     </div>
   </div>
</div>
</template>

<script src="./WebCamera.js" />

<style>
#camera {
  width: 320px;
  height: 240px;
  text-align: center;
  margin: 0 auto;
}
</style>

