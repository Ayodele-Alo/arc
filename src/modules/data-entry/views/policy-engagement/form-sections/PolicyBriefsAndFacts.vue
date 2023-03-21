<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly attach or share link to where the dissemination workshop
          reports/attendance list are stored, as a means of verification.
        </p>
      </div>
      <div class="">
        <div class="">
          <table class="table table-bordered mt-2">
            <tbody>
              <tr>
                <td>
                  <span class="row-header">
                    Themes
                    <p class="row-sub-header">
                      (Themes the research was conducted)
                    </p>
                  </span>
                </td>
                <td>
                  <span class="row-header">
                    Type of research outputs disseminated
                    <p class="row-sub-header">
                      (policy briefs/ fact sheet/ other material)
                    </p>
                  </span>
                </td>
                <td>
                  <span class="row-header">
                    Title of policy briefs/fact sheet/other material
                    disseminated
                  </span>
                </td>
                <td>
                  <span class="row-header">
                    Brief comment on the dissemination meeting (dates, who was
                    in the meeting etc.)
                  </span>
                </td>
              </tr>
              <tr v-for="(item, index) in engagements_form" :key="index">
                <td>
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ index + 1 }}.</p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.themes"
                    />
                  </div>
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.types_of_research_output"
                  />
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.title_of_policy_briefs"
                  />
                </td>

                <td class="wrapper">
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.brief_comment"
                  />
                  <div
                    v-if="engagements_form.length > 1"
                    @click="removeRow(item)"
                    class="remove-icon"
                  >
                    x
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p @click="addToPolicyBriefsForm()" class="add-more mx-3">+ Add more</p>
      <div class="d-flex justify-content-end">
        <button @click="saveForm()" class="btn btn-outline-primary">
          save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PolicyBtiefsAndFacts",

  data() {
    return {
      error: true,
      engagements_form: [
        {
          id: 1,
          themes: "",
          types_of_research_output: "",
          title_of_policy_briefs: "",
          brief_comment: "",
        },
      ],
    };
  },

  methods: {
    addToPolicyBriefsForm() {
      this.engagements_form.push({
        id: new Date().getTime(),
        themes: "",
        types_of_research_output: "",
        title_of_policy_briefs: "",
        brief_comment: "",
      });
    },

    removeRow(rowItem) {
      if (this.engagements_form.length > 1) {
        this.engagements_form = this.engagements_form.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    saveForm() {
      this.engagements_form.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;
            alert(`please ${property} cannot be blank `);
            return;
          } else {
            this.error = false;
            // console.log(this.engagements_form);
          }
        }
      });
      if (this.error) {
        return;
      }
      this.formatData();
    },

    formatData() {
      const data = {
        engagements_form: this.engagements_form,
      };

      console.log(data);
    },
  },
};
</script>

<style scoped>
.engagement-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 40px;
}
.header-width {
  width: 170px;
  height: 200px;
  text-align: left;
  padding: 4px 8px;
  padding: 15px;
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
.publication-iten {
  display: flex;
}
input {
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
}
.pub-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4px;
}
.add-more {
  cursor: pointer;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  width: fit-content;
}
.add-more:hover {
  color: red;
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
table {
  background-color: white;
}

table td {
  width: 230px;
}

.wrapper {
  position: relative;
}
.remove-icon {
  position: absolute;
  bottom: -5px;
  right: -5px;
  background-color: #f75d59;
  padding: 2px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}
</style>
