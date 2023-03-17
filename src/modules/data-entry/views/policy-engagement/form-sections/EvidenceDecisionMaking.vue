<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly attach or share link to where the attendance sheets and
          training report are stored, as a means of verification.
        </p>
      </div>

      <table class="table table-bordered mt-4">
        <tbody>
          <tr>
            <th class="header" scope="col">
              <span class="row-header">
                List of forums held for sharing lessons with staff on how the
                Center’s models and tools perform in achieving EIDM
              </span>
            </th>
          </tr>
          <tr v-for="(item, index) in stored_link_location" :key="index">
            <td class="row-header wrapper py-3">
              <div class="row w-100">
                <div class="w-100 col d-flex align-items-center text-start">
                  <p class="mt-3 mx-2">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.periodic_reviews"
                  />
                </div>
              </div>
              <div
                v-if="stored_link_location.length > 1"
                @click="removeStoredLinkLocation(item)"
                class="remove-icon"
              >
                x
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <p @click="addToStoredLinkLocation()" class="add-more">+ Add more</p>

      <table class="table table-bordered mt-4">
        <tbody>
          <tr>
            <th class="header" scope="col">
              <span class="row-header">
                List of periodic reviews conducted on how the Center’s models
                and tools perform in achieving EIDM
              </span>
            </th>
          </tr>
          <tr v-for="(item, index) in formula_list_form" :key="index">
            <td class="row-header wrapper py-3">
              <div class="row w-100">
                <div class="w-100 col d-flex align-items-center text-start">
                  <p class="mt-3 mx-2">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.periodic_formula"
                  />
                </div>
              </div>
              <div
                v-if="formula_list_form.length > 1"
                @click="removeFromFormulaList(item)"
                class="remove-icon"
              >
                x
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p @click="addToFormulaList()" class="add-more">+ Add more</p>

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
  name: "EvidenceDecisionMaking",

  data() {
    return {
      error: true,
      stored_link_location: [
        {
          id: 1,
          periodic_reviews: "",
        },
      ],
      formula_list_form: [
        {
          id: 1,
          periodic_formula: "",
        },
      ],
    };
  },

  methods: {
    addToStoredLinkLocation() {
      this.stored_link_location.push({
        id: new Date().getTime(),
        periodic_reviews: "",
      });
    },

    addToFormulaList() {
      this.formula_list_form.push({
        id: new Date().getTime(),
        periodic_formula: "",
      });
    },

    removeStoredLinkLocation(rowItem) {
      if (this.stored_link_location.length > 1) {
        this.stored_link_location = this.stored_link_location.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    removeFromFormulaList(rowItem) {
      if (this.formula_list_form.length > 1) {
        this.formula_list_form = this.formula_list_form.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    saveForm() {
      this.stored_link_location.forEach((item) => {
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

      this.formula_list_form.forEach((item) => {
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
        stored_link_location: this.stored_link_location,
        formula_list_form: this.formula_list_form,
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
.header {
  width: 100%;
  height: 80px;
  text-align: left;
  padding: 4px 8px;
  padding: 0 15px;
  display: flex;
  align-items: center;
}
.row-header {
  display: flex;
  align-items: center;
  width: 100%;
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

.wrapper {
  position: relative;
}
.remove-icon {
  position: absolute;
  bottom: -5px;
  right: -5px;
  background-color: #f75d59;
  /* padding: 2px; */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  line-height: 10px;
}
</style>
