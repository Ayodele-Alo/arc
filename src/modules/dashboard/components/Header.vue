<template>
  <header>
    <nav class="navbar navbar-expand-lg shadow bg-white py-lg-3 fixed-top">
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
        <button
          class="navbar-toggler border-0 shadow-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#aphrcToggle"
          aria-controls="aphrcToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="aphrcToggle"
        >
          <div class="navbar-nav mt-lg-0 mt-3">
            <router-link
              exact
              exact-active-class="active"
              class="nav-link"
              to="/"
              type="button"
              @click="handleLoginType('entry')"
            >
              <h6>Data Entry</h6>
            </router-link>
            <router-link
              exact
              exact-active-class="active"
              class="nav-link"
              to="/"
              type="button"
              @click="handleLoginType('import')"
            >
              <h6>Data Import</h6>
            </router-link>
            <router-link
              exact
              exact-active-class="active"
              class="nav-link"
              to="/"
              type="button"
              @click="handleLoginType('report')"
            >
              <h6>Data Report</h6>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
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
