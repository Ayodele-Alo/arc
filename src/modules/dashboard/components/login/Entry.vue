<template>
  <section class="login_modal_entry">
    <div class="main_form">
      <div class="close_button" @click.prevent="setLoginModal('')">
        <el-icon :size="25"><Close /></el-icon>
      </div>
      <div class="header">
        <img
          :src="require(`@/assets/aphrc_logo@2x.png`)"
          alt="logo.jpg"
          width="50"
        />
        <h6>African Population and Health Research Centre.</h6>
      </div>
      <div class="body">
        <p class="title mt-3 mb-4">Data Entry Module</p>

        <form action="">
          <div class="group">
            <el-input
              v-model="loginDetails.username"
              placeholder="Email Address"
              class="input-with-select"
              size="large"
            >
              <template #prepend>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
            <small><i>Email address should include @</i></small>
          </div>

          <div class="group">
            <el-input
              v-model="loginDetails.password"
              placeholder="Password"
              type="password"
              show-password
              class="input-with-select"
              size="large"
            >
              <template #prepend>
                <el-icon><Unlock /></el-icon>
              </template>
            </el-input>
          </div>

          <div class="text-center py-4">
            <button class="btn btn_aphrc">
              Login into APHRC - Data Entry Module
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "Entry-Login-Modal",
  data() {
    return {
      loginDetails: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations(["setLoginModal"]),
  },
});
</script>

<style lang="scss" scoped>
@import "@/modules/dashboard/style/login_modal.scss";
</style>
