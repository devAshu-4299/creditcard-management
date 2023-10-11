<template>
  <section class="card-management">
    <NavBar></NavBar>
    <div class="dashboard" >
      <div class="balance-card">
        <div class="balance">
          <span>Available balance</span><br>
          <div class="amount"><div class="icon-doller">S$</div><span>3000</span></div>
        </div>
        <Button label="New card" icon="pi pi-plus-circle" class="new-card-btn" />
      </div>
      <div class="card-tabs">
        <TabView>
          <TabPanel header="My debut cards">
            <Carousel :getCarouselData="sendCarouselData" > </Carousel>
          </TabPanel>
          <TabPanel header="All company cards">
          </TabPanel>
        </TabView>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from "../components/CardCarousel.vue";
import NavBar from "@/components/navBar.vue";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Button from "primevue/button"

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
    NavBar,
    TabPanel,
    TabView,
    Button
  },
};
</script>
