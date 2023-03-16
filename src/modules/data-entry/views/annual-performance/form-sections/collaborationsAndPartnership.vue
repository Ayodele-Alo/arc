<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Describe any upcoming collaborations, partnerships and alliances for
          2020. Describe new opportunities for the theme or the Center
          identified during this year. Please ensure to include all planned
          opportunities and prospects e.g. proposals prospects identified but
          yet to be developed.
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header w-50 p-5">
              <p class="row-header">Type of opportunity</p>
              <p class="row-sub-header">
                (Upcoming engagement, partnership development/collaborations,
                plans for proposals etc.)
              </p>
            </th>
            <th class="row-header p-5">
              <p class="row-header">Comments and Next Steps</p>
            </th>
          </tr>
          <tr v-for="(item, index) in collaborations_form" :key="index">
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">{{ index}}.</p>
                  <input placeholder="Type Here" class="px-1" type="text" v-model="item.opportunity_type" />
                </div>
              </div>
            </th>
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3"> {{ index}}.</p>
                  <input placeholder="Type Here" class="px-1" type="text" v-model="item.comments" />
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      <p class="add-more" @click="addToCollaborationsForm()">+ Add more</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "CollaborationsAndPartnerships",
  components: {},
  data() {
    return {
      formCount: 1,
      form: {
        1: {
          themes: "",
          engagement_type: "",
        },
      },
      collaborations_form: [
        {
          opportunity_type: "",
       comments: ""
        },
      ],
    };
  },

  methods: {
    addToCollaborationsForm() {
      this.collaborations_form.push({
       opportunity_type: "",
       comments: ""
      });
    },
  },
});
</script>

<style scoped>
.row-header {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  padding-top: 25px;
}
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}
table {
  background-color: white;
}
.row-header {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  padding-top: 15px;
}
.row-sub-header {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 300;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
}
.engagement-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 25px;
}
</style>
