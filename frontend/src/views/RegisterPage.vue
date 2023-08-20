<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";


export default {
  data() {
    return {
      value: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleRegister"]),
  },
};
</script>

<template>
  <!--regist-->
  <section class="vh-100" style="background-color: #db640f">
    <div class="container py-5  h-200">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <form
                    class="mx-1 mx-md-4"
                    @submit.prevent="handleRegister(this.value)"
                  >
                    <div
                      class="d-flex flex-row align-items-center mb-4 bg-warning"
                      style="border-radius: 10px"
                    >
                      <div class="form-outline flex-fill mb-0">
                        <label
                          class="form-label"
                          style="padding-left: 10px"
                          for="form3Example3c"
                          >Email</label
                        >
                        <input
                          type="email"
                          id="form3Example3c"
                          class="form-control bg-light"
                          v-model="value.email"
                        />
                      </div>
                    </div>

                    <div
                      class="d-flex flex-row align-items-center mb-4 bg-warning"
                      style="border-radius: 10px"
                    >
                      <div class="form-outline flex-fill mb-0">
                        <label
                          class="form-label"
                          style="padding-left: 10px"
                          for="form3Example4c"
                          >Password</label
                        >
                        <input
                          type="password"
                          id="form3Example4c"
                          class="form-control bg-light"
                          v-model="value.password"
                        />
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <label class="form-check-label" for="form2Example3">
                        <a
                          href="#!"
                          @click.prevent="this.$router.push('/login')"
                          >Already have account?</a
                        >
                      </label>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button type="submit" class="btn btn-primary btn-lg">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://png.pngtree.com/png-clipart/20230806/original/pngtree-electronic-store-logo-vector-png-image_9441137.png"
                    class="img-fluid"
                    alt="Sample image"
                    style="max-width: 400px; margin-left: 100px;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
