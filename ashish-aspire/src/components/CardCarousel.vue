<template>
  <div>
    <Carousel :value="getCarouselData">
      <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2 text-center py-5 px-3 credit-card">
               <div class="mb-3">
                  <img src="../assets/icons/AspireLogo-1.png" />
               </div>
               <div>
                  <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                  <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                  <!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" /> -->
                  <div class="mt-5">
                        <Button icon="pi pi-search" rounded class="mr-2" />
                        <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                        <Button icon="pi pi-cog" rounded severity="help" />
                  </div>
               </div>
            </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "primevue/carousel";
import Button from "primevue/button"

export default {
  name: "CardCarousel",
  components: {
    Carousel,
    Button  
  },
  props:{
   getCarouselData:{
      default:{},
      type:Object
   }
  }
};
</script>
