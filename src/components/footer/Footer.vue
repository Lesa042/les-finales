<template>
  <div v-if="!(route.path.toLowerCase() == '/login' || route.path.toLowerCase() == '/register')">
    <div class="b-example-divider"></div>
    <div class="futer-heder">
        <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-3 mb-3">
              <h5 class="text-light">Vantage</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                    <router-link
                    to="/home"
                    class="nav-link p-0 text-light"
                    >
                    About Us
                    </router-link>
                </li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Sustainability</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Blog</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Advertising</a></li>
              </ul>
            </div>
      
            <div class="col-6 col-md-3 mb-3">
              <h5 class="text-light">Discover</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">How it works</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Help center</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Infoboard</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Mobile apps</a></li>
              </ul>
            </div>
      
            <div class="col-6 col-md-3 mb-3">
              <h5 class="text-light">Help</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Help center</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Buying</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Trust &amp; Safety</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About</a></li>
              </ul>
            </div>

            <div class="col-6 col-md-3 mb-3">
                <h5 class="text-light">Community</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Forum</a></li>
                </ul>
            </div>
          </div>
      
          <div class="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top text-light">

            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="#"><ion-icon name="logo-whatsapp" size="large"></ion-icon></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><ion-icon name="logo-instagram" size="large"></ion-icon></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><ion-icon name="logo-linkedin" size="large"></ion-icon></a></li>
            </ul>
            <p>© 2022 Vantage, Inc. All rights reserved.</p>
          </div>
        </footer>
        </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  await router.isReady()
});
</script>