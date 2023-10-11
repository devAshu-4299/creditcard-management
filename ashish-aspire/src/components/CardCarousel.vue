<template>
  <div class="card shadow-2">
    <div class="show-card-number"><span class="pi pi-eye">&nbsp;Show card number</span></div>
    <Carousel :value="getCarouselData" :showNavigators="false">
      <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2 text-center py-5 px-3 credit-card">
               <div class="mb-3">
                  <img src="../assets/icons/AspireLogoWhite.svg" />
               </div>
               <div class="card-details">
                  <span class="user_name">{{ slotProps.data.name }}</span>
                  <span class="card_number">{{ slotProps.data.cardNumber }}</span>
                  <div class="cvv">
                    <span>Thru: {{ slotProps.data.validity }}</span>
                    <span>CVV: {{ slotProps.data.cvv }}</span>
                  </div>
               </div>
               <div class="agg-logo">
                <img src="../assets/icons/VisaLogo.svg" />
               </div>
            </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "primevue/carousel";
import Button from "primevue/button"
import Card from 'primevue/card';


export default {
  name: "CardCarousel",
  components: {
    Carousel,
    Button  ,
    Card
  },
  props:{
   getCarouselData:{
      default:{},
      type:Object
   }
  }
};
</script>
