import {
  defineStore
} from 'pinia'
import axios from 'axios'


const baseUrl = 'http://localhost:3000';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isLogin: false,
    products: [],
    detailProduct: {},
    orderList: []

  }),
  actions: {
    handleRegister(input) {
      axios({
          method: 'POST',
          url: `${baseUrl}/users/register`,
          data: input
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: `Halo ${res.data.email}`,
            text: 'Your register successfully!'
          });
          this.router.push("/login")
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Ooops...",
            text: error.response.data.message
          });
        })
    },

    handleLogin(input) {
      axios({
          method: "POST",
          url: `${baseUrl}/users/login`,
          data: input,
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: `Halo ${res.data.email}`,
            text: 'Rent for your ego!'
          });
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("email", res.data.email);
          this.router.push("/products");
          this.isLogin = true;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Something wrong!",
            text: err.response.data.message
          });
        });
    },

    loginByGoogle(res){
      axios({
        method: "POST",
        url: `${baseUrl}/users/googleSignIn`,
        headers: {
          google_token: res.credential,
        },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Hey! " + res.data.email,
          text: "Wellcome to Toko Elektronik"
        })
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('email', res.data.email);
        this.router.push("/products");
        this.isLogin = true;
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "There is something error",
          text: error.response.data.message
        });
      });
    },

    handleLogout() {
      Swal.fire({
        icon: "success",
        title: "Thanks for visiting us",
        text: 'See you next time'
      });
      localStorage.clear();
      this.router.push("/");
      this.isLogin = false;
    },

    fetchDataProduct() {
      axios({
          method: "get",
          url: `${baseUrl}/products`,
        })
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `Something wrong`,
            text: err.response.data.message
          });
        });
    },

    rupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },

    // HANDLE ORDER
    handleAddOrder(productId) {
      axios({
          method: "POST",
          url: `${baseUrl}/products/addOrder/${productId}`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: 'Added to your erder list'
          });
          this.fetchDataProduct()
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Something wrong",
            text: err.response.data.message
          });
        })
    },

    handleFetchOrderList() {
      axios({
        method: "GET",
        url: `${baseUrl}/products/orderedProduct`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
      .then((res) => {
        this.orderList = res.data
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Something Wrong",
          text: err.response.data.message
        });
      })
    },

    handleAddProduct(input) {
      axios({
          method: 'POST',
          url: `${baseUrl}/products/addProduct`,
          data: input,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: `Yeay`,
            text: 'Success Input New Product!'
          });
          this.router.push("/products")
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Ooops...",
            text: error.response.data.message
          });
        })
    },
  }
})