<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  props: ["item"],
  methods: {
    ...mapActions(useCounterStore, ["handleAddOrder", "rupiah"]),
  },
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
};
</script>

<template>
  <div class="col-md-3 gap-3 mb-5">
    <div class="card-sl">
      <div
        class="card-image d-flex justify-content-center"
        style="height: 200px"
      >
        <img :src="item.imgUrl" />
      </div>
      <div class="card-heading" style="max-height: 40px; margin-bottom: 30px;">
        {{ item.name }}
      </div>
      <div class="card-text">
        {{ rupiah(item.price) }}
      </div>
      <div class="card-text">Stock : {{ item.quantity }}</div>
      <a href="" class="card-button2" @click.prevent="handleAddOrder(item.id)">
        Add to Order
      </a>
    </div>
  </div>
</template>
