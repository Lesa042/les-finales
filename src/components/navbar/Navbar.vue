<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top futer-heder" aria-label="Eighth navbar example" v-if="!(route.path.toLowerCase() == '/login' || route.path.toLowerCase() == '/register')">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vantage</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse ms-4" id="navbarsExample07">
        <search></search>
        <third-section></third-section>
      </div>
    </div>
  </nav>
  
</template>

<script setup>
import Search from './Search.vue'
import ThirdSection from './ThirdSection.vue'
import {onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  await router.isReady()
});

</script>