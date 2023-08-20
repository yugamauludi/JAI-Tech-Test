<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
};
</script>

<template>
  <div style="background-color: aliceblue; height: 91vh;">
    <div class="container text-center" style="padding-top: 10px;">
      <h1>Welcome to Electronic Store</h1>
      <img
        src="https://png.pngtree.com/png-clipart/20230806/original/pngtree-electronic-store-logo-vector-png-image_9441137.png"
        class="img-fluid"
        alt="Sample image"
        style="max-width: 350px; margin: 20px;"
      />
      <h2>
        Kemewahan Teknologi untuk Masa Depan: Jelajahi Koleksi Elektronik
        Terbaik yang Mengubah Gaya Hidup di Toko Elektronik Kami!
      </h2>
      <p>Just enjoy the exploring and we hope your happiness will be fullfil</p>
      <p v-if="!isLogin" style="color: red">
        **Please Login For Add Product To Your Order List**
      </p>
    </div>
  </div>
</template>
