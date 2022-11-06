<script setup lang="ts">
import DTextField from "@/components/form/DTextField.vue";
</script>

<template>
  <div>
    <h1>Hello</h1>
    <h2>Hello</h2>
    <h3>Hello</h3>
    <h4>Hello</h4>
    <h5>Hello</h5>
    <h6>Hello</h6>
    <d-row dense justify="start" align="center">
      <d-col col="12" xs="6" sm="4" md="3" lg="4" xl="3" xxl="12">
        <d-text-field
            type="text"
            rounded
            outlined
            large
            validation="required|min:4|max:8"
        ></d-text-field>
      </d-col>
      <d-col col="12" xs="6" sm="4" md="3" lg="4" xl="6" xxl="12">
        <d-text-field
            type="text"
            rounded
            outlined
            large
            validation="required|min:4|max:8"
        ></d-text-field>
      </d-col>
      <d-col col="12" xs="6" sm="4" md="3" lg="4" xl="6" xxl="12">
        <h1>The accent-color Property</h1>

        <h3>Accent color for checkboxes:</h3>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked>
        <label for="vehicle1"> I have a bike</label><br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked>
        <label for="vehicle2"> I have a car</label><br><br>

        <h3>Accent color for radiobuttons:</h3>
        <input type="radio" id="html" name="fav_language" value="HTML">
        <label for="html">HTML</label><br>
        <input type="radio" id="css" name="fav_language" value="CSS" checked>
        <label for="css">CSS</label><br>

        <h3>Accent color for a range field:</h3>
        <label for="vol">Volume:</label>
        <input type="range" id="vol" name="vol" min="0" max="50">

        <h3>Accent color for a progress element:</h3>
        <label for="file">Downloading progress:</label>
        <progress id="file" value="72" max="100"> 72% </progress>
      </d-col>
    </d-row>
  </div>
</template>
