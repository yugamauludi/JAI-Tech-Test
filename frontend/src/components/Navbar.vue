<script>
    import { mapActions, mapState } from "pinia";
    import { useCounterStore } from "../stores/counter";
    export default {
    name: "Navbar",
    computed:{
        ...mapState(useCounterStore, ['isLogin'])
    },
    methods: {
        ...mapActions(useCounterStore, ['handleLogout'])
    }
}
</script>

<template>
    <!-- Navbar-->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid justify-content-between">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
      <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#" @click.prevent="this.$router.push('/')">
        <img
          src="https://png.pngtree.com/png-clipart/20230806/original/pngtree-electronic-store-logo-vector-png-image_9441137.png"
          height="20"
          alt="MDB Logo"
          loading="lazy"
          style="margin-top: 2px;"
        />Elctronic Store
      </a>
    </div>
    <!-- Left elements -->

    <!-- Center elements -->
    <ul class="navbar-nav flex-row d-none d-md-flex">
      <li class="nav-item me- me-lg-1">
        <a class="nav-link" href="#" @click.prevent="this.$router.push('/')">
          <span>Home</span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#" @click.prevent="this.$router.push('/products')">
          <span>Phone List</span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#" v-if="isLogin" @click.prevent="this.$router.push('/orderList')">
          <span>Order List</span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#" v-if="isLogin" @click.prevent="this.$router.push('/addProduct')">
          <span>Add Product</span>
        </a>
      </li>
    </ul>
    <!-- Center elements -->

    <!-- Right elements -->
    <ul class="navbar-nav flex-row">
      <li class="nav-item me-3 me-lg-1" v-if="!isLogin">
        <a class="nav-link" href="#"  @click.prevent="this.$router.push('/login')">
          <span>Login</span>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-1" v-if="!isLogin">
        <a class="nav-link" href="#"  @click.prevent="this.$router.push('/register')">
          <span>SignUp</span>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-1" v-if="isLogin">
        <a class="nav-link" href="#"  @click.prevent="handleLogout">
          <span>Logout</span>
        </a>
      </li>
    </ul>
    <!-- Right elements -->
  </div>
</nav>
</template>