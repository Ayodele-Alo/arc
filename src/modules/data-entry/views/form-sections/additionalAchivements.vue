<template>
  <div class="row w-100">
    <div class="col text-start">
      <p class="engagement-text">
        Describe other key achievements or updates by the theme that were not
        planned, if any, with respect to the center’s strategic objectives and
        goals of the theme. E.g. any trainings attended by staff etc.
      </p>
      <textarea
        name=""
        placeholder="Type Here"
        id=""
        cols="30"
        rows="5"
        v-model="additional_achievements"
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
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export default defineComponent({
  name: "AdditionalAchievementsComponent",
  components: {},
  props: {
    period: String,
  },

  data() {
    return {
      additional_achievements: "",
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      const newItem = {
        component: this.period,
        type: "report",
        item: {
          name: "additionalAchievement",
          form: this.additional_achievements,
        },
      };
      this.SAVE_DATA(newItem);
      // console.log(this.additional_achievements);
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
}

textarea ::placeholder {
  color: #70707069;
}
</style>
