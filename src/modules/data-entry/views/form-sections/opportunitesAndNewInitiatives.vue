<template>
  <div class="row w-100">
    <div class="col text-start">
      <p class="engagement-text">Describe any other opportunities identified</p>
      <textarea
        name=""
        placeholder="Type Here"
        id=""
        cols="30"
        rows="5"
        v-model="opportunities"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end mt-4">
      <div @click="saveForm()" class="save-icon">
        <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
        <h5>save</h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "OpportunitiesAndNewInitiatives",
  components: {},
  data() {
    return {
      opportunities: "",
    };
  },

  methods: {
    saveForm() {
      console.log(this.opportunities);
    },
  },
});
</script>

<style scoped>
.engagement-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 20px;
}

textarea {
  border: 1px solid #707070ab;
  width: 100%;
  margin: 5px 0;
  padding: 20px;
  border-radius: 5px;
}

textarea ::placeholder {
  color: #70707069;
}
</style>
