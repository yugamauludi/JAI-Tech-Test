<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import CardOrderList from "../components/CardOrderList.vue";

export default {
  components: {
    CardOrderList,
  },
  computed: {
    ...mapState(useCounterStore, ["orderList", "isLogin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["handleFetchOrderList"]),
  },
  created() {
    this.handleFetchOrderList();
  },
};
</script>

<template>
  <!--home-->
  <div v-if="orderList.length === 0" class="empty-message" style="flex-direction: column;;">
    <img src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png" alt="halaman kosong" style="max-width: 200px;">
    <h1 >Order list anda masih kosong</h1>
  </div>

  <div v-else class="container" style="margin-top: 50px">
    <div class="row">
      <CardOrderList v-for="item in orderList" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<style>

body {
  font-family: Varela Round;
  background: #f1f1f1;
}

a {
  text-decoration: none;
}

/* Card Styles */

.card-sl {
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card-image img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 8px 8px 0px 0;
}

.card-action {
  position: relative;
  float: right;
  margin-top: -25px;
  margin-right: 20px;
  z-index: 2;
  color: #e26d5c;
  background: #fff;
  border-radius: 100%;
  padding: 15px;
  font-size: 15px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
}

.card-action:hover {
  color: #fff;
  background: #e26d5c;
  -webkit-animation: pulse 1.5s infinite;
}

.card-heading {
  font-size: 18px;
  font-weight: bold;
  background: #fff;
  padding: 10px 15px;
}

.card-text {
  padding: 10px 15px;
  background: #fff;
  font-size: 14px;
  color: #636262;
}

.card-button2 {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  background-color: #1f487e;
  color: #fff;
  border-radius: 0 0 10px 10px;
}

.card-button {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  background-color: #1f487e;
  color: #fff;
}

.card-button:hover {
  text-decoration: none;
  background-color: #1d3461;
  color: #fff;
}

@-webkit-keyframes pulse {
  0% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  70% {
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(90, 153, 212, 0);
  }

  100% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
  }
}

.empty-message {
  display: flex;
  justify-content: center; /* Untuk mengatur tengah secara horizontal */
  align-items: center; /* Untuk mengatur tengah secara vertikal */
  height: 86vh; /* Mengisi tinggi viewport */
  margin: 0; /* Menghilangkan margin default */
  font-size: 24px; /* Sesuaikan ukuran font */
  color: #555; /* Sesuaikan warna teks */
}
</style>
