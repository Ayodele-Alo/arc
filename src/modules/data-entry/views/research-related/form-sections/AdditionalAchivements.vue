<template>
  <div class="mt-4">
    <div class="">
      <h3 class="heading">
        Describe other key achievements or updates by the theme that were not
        planned, if any, with respect to the center’s strategic objectives and
        goals of the theme. E.g. any trainings attended by staff etc.
      </h3>
      <div class="wrapper">
        <textarea
          name=""
          id=""
          v-model="additionalAchivements"
          rows="10"
        ></textarea>
      </div>
    </div>

    <div class="d-flex justify-content-end mt-4">
      <div @click="saveForm()" class="save-icon">
        <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
        <h5>save</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export default defineComponent({
  setup() {
    const toast = (title, desc, type) => {
      createToast(
        {
          title: title,
          description: desc,
        },
        {
          type: type,
          transition: "zoom",
          hideProgressBar: true,
          showIcon: true,
          timeout: 3000,
          position: "top-right",
        }
      );
    };
    return {
      toast,
    };
  },

  data() {
    return {
      additionalAchivements: null,
    };
  },
  methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      const newItem = {
        component: "resource_related",
        item: {
          name: "additionalAchivements",
          form: this.additionalAchivements,
        },
      };
      if (this.additionalAchivements === null) {
        // alert("Complete form");
        this.toast("Warning", "Fill form completely", "warning");
      } else {
        this.SAVE_DATA(newItem);
      }
    },
  },
});
</script>

<style scoped>
.wrapper textarea {
  background-color: transparent;
  width: 100%;
  border: 1px solid #707070ab;
}
.wrapper textarea:focus {
  outline: none !important;
  border: 3px solid #719ece;
}

.heading {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: normal;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
}
</style>
