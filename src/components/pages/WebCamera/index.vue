<template>
   <div class="webcam">
      <div class="container">
         <div class="col-lg-12">
            <h1>WebCam</h1>
            <!-- Usando 'v-if' com intuito de identificar as câmeras disponíveis na aplicação -->
            <code v-if="device">{{ device.label }}</code>
            <div class="border">
               <web-cam
               ref="webcam"
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
                  <div class="form-group row">
                     <div class="col-xs-4">
                        <select class="form-control" v-model="camera">
                           <option value="">-- Escolha a Câmera --</option>
                           <option v-for="device in devices" :key="device.deviceId" :value="device.deviceId">{{ device.label }}</option>
                        </select>
                     </div>
                  </div>
               </div>
               <div class="col-md-12">
                  <button type="button" class="btn btn-primary" @click="onCapture">Tirar Foto</button>
                  <button type="button" class="btn btn-danger" @click="onStop">Parar Câmera</button>
                  <button type="button" class="btn btn-success" @click="onStart">Iniciar Câmera</button>
               </div>
            </div>
         </div>
         <div class="col-lg-6">
            <h2>Capturar Foto</h2>
            <figure class="figure">
               <img :src="img" class="img-responsive">
            </figure>
         </div>
      </div>
   </div>
</template>

<script src="./WebCamera.js"/>

<style></style>
