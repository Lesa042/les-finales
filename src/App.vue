<template>
  <navbar></navbar>
  <router-view></router-view>
  <footerer></footerer>
</template>

<script setup>
import Navbar from './components/navbar/Navbar.vue'
import Footerer from './components/footer/Footer.vue'
</script>