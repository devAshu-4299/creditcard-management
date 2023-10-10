<template>
  <!-- <div> -->
    <!-- <div v-for="item in sendCarouselData" :key="item.name"> -->
      <Carousel :getCarouselData="sendCarouselData"> </Carousel>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import Carousel from "../components/CardCarousel.vue";

export default {
  data() {
    return {
      sendCarouselData: [
        {
          name: "Mark Henry",
          cardNumber: "1234 5678 8919 2345",
          validity: "07/25",
          cvv: 909,
          vcPhoneNumber: "9898989889",
        },
      ],
    };
  },
  components: {
    Carousel,
  },
};
</script>
