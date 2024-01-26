<template>
    <div class="album py-5 bg-dark">

        <div class="container">
          <div class="d-flex justify-content-between align-items-center mt-5 mb-4 link">
            <h3 class="tulisan">Items</h3>
          </div>
    
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-6">
            

            
          </div>
        </div>
      </div>
</template>

<script setup>
  import ClothesList from "../products/ClothesList.vue";
  import { onMounted } from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const clothesListStatus = ref (false);
  const clothesList = ref();

  onMounted (async () => {
    try {
      await store.dispatch ("products/getClothesData");
      clothesListStatus.value = true;
      clothesList.value = store.state.products.clothes;
    } catch(error) {
      console.log(error);
    }
  })
</script>