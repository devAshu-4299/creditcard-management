<template>
    <div class="sidebar-nav">
        <div class="aspire-logo">
            <img src="../assets/icons/AspireLogo.svg" width="125" height="35" />
            <div class="tagline">Trusted way of banking for 3,000+ SMEs and startups in Singapore</div>
        </div>
        <div class="menu-bar">
            <div class="menu" v-for="menu in menuList" :key="menu.name">
                <img :src="require(`../assets/icons/${menu.icon}`)" width="24" height="24"/>
                <span :class="menu.name=='Cards'? 'active-menu' : ''">{{menu.name}}</span>
            </div>
             
        </div>
    </div>
</template>
  
  <script>
  
import Menu from 'primevue/menu';
  
  export default {
    data() {
      return {
        menuList: [
          {
            name: "Home",
            icon: "Home.svg",
          },
          {
            name: "Cards",
            icon: "Card.svg",
          },
          {
            name: "Payments",
            icon: "Payments.svg",
          },
          {
            name: "Credit",
            icon: "Credit.svg",
          },
          {
            name: "Settings",
            icon: "user.svg",
          },
        ],
        active:false
      };
    },
    components: {
      Menu,
    },
    methods:{

    }
  };
  </script>

  