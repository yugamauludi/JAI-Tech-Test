<script>
    import { mapActions } from 'pinia';
    import { useCounterStore } from '../stores/counter';

    export default {
        props: ['item'],
        methods: {
            ...mapActions(useCounterStore, ['handleFetchOrderList', "rupiah"])
        },
        created(){
            this.handleFetchOrderList()
        }
    }
</script>

<template>
    <div class="col-md-3 mb-5">
      <div class="card-sl">
        <div class="card-image d-flex justify-content-center" style="height: 200px;  ">
          <img
            :src="item.Product.imgUrl" />
        </div>
          <div class="card-heading">
            {{ item.Product.name }}
          </div>
          <div class="card-text">
            {{ rupiah(item.Product.price) }}
          </div>
          <div class="card-text">
          </div>
      </div>
    </div>
</template>