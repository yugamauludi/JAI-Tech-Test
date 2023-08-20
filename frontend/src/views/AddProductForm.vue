<script>
  import { mapActions } from 'pinia';
  import { useCounterStore } from '../stores/counter';

  export default{
    data(){
      return {
        value: {
          name: '',
          imgUrl: '',
          price: 0,
          quantity: 0
        }
      }
    },
    methods: {
      ...mapActions(useCounterStore, ['handleAddProduct'])
    }
  }
</script>

<template>
    <!--login-->
<section class="vh-120" style="background-color: #db640f;">
  <div class="container  h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 2rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Add New Product</h3>
            <form @submit.prevent="handleAddProduct(this.value)">
              <div class="form-group">
                <label for="exampleInputEmail1" class="pb-2">Product's Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ex : Iphone 14" v-model="value.name">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" class="pt-4 pb-2">Image Url</label>
                <input type="text" class="form-control" placeholder="ex : https://www.apple.com/id..." v-model="value.imgUrl" >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" class="pt-4 pb-2">Price</label>
                <input type="number" class="form-control" placeholder="ex : 100000" v-model="value.price" >
              </div>
              <div class="form-group pb-5">
                <label for="exampleInputPassword1" class="pt-4 pb-2">Quantity</label>
                <input type="Number" class="form-control" placeholder="ex : 20" v-model="value.quantity" >
              </div>

              <button class="btn btn-primary btn-lg btn-block" type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>