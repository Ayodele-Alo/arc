<template>
  <header class="main">
    <nav class="nav-header navbar navbar-expand-lg shadow bg-white py-lg-3 fixed-top">

      <div class="container-fluid px-lg-5 h-100">
        <router-link
          exact
          exact-active-class="active"
          class="navbar-brand"
          to="/"
        >
          <div class="title_container">
            <img
              :src="require(`@/assets/aphrc_logo@2x.png`)"
              alt="logo.jpg"
              width="50"
            />
            <div class="pipe" />
            <p>
              Welcome to the African<br />
              Population and Health Research Centre.
            </p>
          </div>
        </router-link>
     
   <div>Admin</div>
      </div>
    </nav>
            <br><br><br><br>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "Header-Layout",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setLoginModal"]),
    handleLoginType(type: string) {
      this.setLoginModal(type);
    },
  },
});
</script>

<style lang="scss" scoped>
h6 {
  font-size: 1rem;
  font-family: Montserrat;
  font-weight: bold;
  letter-spacing: 0;
  color: #303030;
  text-align: left;
  margin-left: 0.5rem;
  margin-bottom: 0;
}
div.title_container {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-family: Montserrat;
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0px;
    color: #707070;
    margin-bottom: 0;
  }

  div.pipe {
    border: 1px solid #707070;
    height: 2.5rem;
  }
}


@media only screen and (max-width: 700px) {
  div.title_container {
    p,
    div.pipe {
      display: none;
    }
  }
}
</style>
