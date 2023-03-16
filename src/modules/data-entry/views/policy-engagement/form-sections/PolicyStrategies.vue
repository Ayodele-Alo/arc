<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly attach or share link to where the attendance sheets and
          training report are stored, as a means of verification.
        </p>

        <p class="engagement-text">
          Capacity-building activities for APHRC staff on sustained engagement
          with decision makers on the APHRC’s signature issues/ focus areas:
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="header-width" scope="col">
              <p class="row-header">
                Themes and their signature issues/focus areas
              </p>
            </th>
            <th class="header-width" scope="col">
              <div class="partispant-wrapper h-100">
                <span class="row-header"> Number Of Participant </span>
                <div class="d-flex partispant">
                  <div class="w-50 left-item">Male</div>
                  <div class="right-item">Female</div>
                </div>
              </div>
            </th>

            <th class="header-width" scope="col">
              <span class="row-header">
                Purpose of the event/objectives
                <p class="row-sub-header">(or additional details)</p>
              </span>
            </th>
            <th class="header-width" scope="col">
              <span class="row-header">
                Project link to
                <p class="row-sub-header">(e.g. WASH)</p>
              </span>
            </th>
            <th class="header-width" scope="col">
              <span class="row-header"> Venue/country </span>
            </th>
          </tr>
          <tr v-for="(item, index) in capacity_building" :key="index">
            <th class="row-header py-1">
              <div class="d-flex align-items-center">
                <p class="mt-3">{{ index + 1 }}.</p>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.themes_and_signature"
                />
              </div>
            </th>
            <td>
              <div class="gender">
                <div class="male">
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.number_of_partispant.male"
                  />
                </div>
                <div class="female">
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.number_of_partispant.female"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="p-2">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.purpose_of_project"
                />
              </div>
            </td>
            <td>
              <div class="p-2">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.project_link"
                />
              </div>
            </td>
            <td class="wrapper">
              <div class="p-2">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.venue"
                />
              </div>
              <div
                v-if="capacity_building.length > 1"
                @click="removeCapacity(item)"
                class="remove-icon"
              >
                x
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p @click="addToCapacity()" class="add-more">+ Add more</p>

      <div class="text-start mt-5">
        <p class="engagement-text">
          Capacity strengthened activities of policy partners on policy
          engagement for a strengthened R&D ecosystem in Africa
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="header-width" scope="col">
              <p class="row-header">
                Themes and their signature issues/focus areas
              </p>
            </th>
            <th class="header-width" scope="col">
              <div class="partispant-wrapper h-100">
                <span class="row-header"> Number Of Participant </span>
                <div class="d-flex partispant">
                  <div class="w-50 left-item">Male</div>
                  <div class="right-item">Female</div>
                </div>
              </div>
            </th>

            <th class="header-width" scope="col">
              <span class="row-header">
                Purpose of the event/objectives
                <p class="row-sub-header">(or additional details)</p>
              </span>
            </th>
            <th class="header-width" scope="col">
              <span class="row-header">
                Project link to
                <p class="row-sub-header">(e.g. WASH)</p>
              </span>
            </th>
            <th class="header-width" scope="col">
              <span class="row-header"> Venue/country </span>
            </th>
          </tr>
          <tr
            v-for="(item, index) in capacity_strengthened_activities"
            :key="index"
          >
            <th class="row-header py-1">
              <div class="d-flex align-items-center">
                <p class="mt-3">{{ index + 1 }}.</p>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.themes_and_signature"
                />
              </div>
            </th>
            <td>
              <div class="gender">
                <div class="male">
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.number_of_partispant.male"
                  />
                </div>
                <div class="female">
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.number_of_partispant.female"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="p-2">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.purpose_of_project"
                />
              </div>
            </td>
            <td>
              <div class="p-2">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.project_link"
                />
              </div>
            </td>
            <td class="wrapper">
              <div class="p-2">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.venue"
                />
              </div>
              <div
                v-if="capacity_strengthened_activities.length > 1"
                @click="removeCapacityStrengthened(item)"
                class="remove-icon"
              >
                x
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p @click="addToCapacityStrengthened()" class="add-more">+ Add more</p>

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
  name: "PolicyStrategies",

  data() {
    return {
      capacity_building: [
        {
          id: 1,
          themes_and_signature: "",
          number_of_partispant: {
            male: null,
            female: null,
          },
          purpose_of_project: "",
          project_link: "",
          venue: "",
        },
      ],
      capacity_strengthened_activities: [
        {
          id: 1,
          themes_and_signature: "",
          number_of_partispant: {
            male: null,
            frmaile: null,
          },
          purpose_of_project: "",
          project_link: "",
          venue: "",
        },
      ],
    };
  },
  methods: {
    addToCapacity() {
      this.capacity_building.push({
        id: new Date().getTime(),
        themes_and_signature: "",
        number_of_partispant: {
          male: null,
          frmaile: null,
        },
        purpose_of_project: "",
        project_link: "",
        venue: "",
      });
    },

    removeCapacity(rowItem) {
      if (this.capacity_building.length > 1) {
        this.capacity_building = this.capacity_building.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    addToCapacityStrengthened() {
      this.capacity_strengthened_activities.push({
        id: new Date().getTime(),
        themes_and_signature: "",
        number_of_partispant: {
          male: null,
          frmaile: null,
        },
        purpose_of_project: "",
        project_link: "",
        venue: "",
      });
    },

    removeCapacityStrengthened(rowItem) {
      if (this.capacity_strengthened_activities.length > 1) {
        this.capacity_strengthened_activities =
          this.capacity_strengthened_activities.filter(
            (item) => item.id !== rowItem.id
          );
      }
    },

    saveForm() {
      this.capacity_building.forEach((item) => {
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

      this.capacity_strengthened_activities.forEach((item) => {
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
        capacity_strengthened_activities: this.capacity_strengthened_activities,
        capacity_building: this.capacity_building,
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
  padding: 0 15px;
  padding-top: 15px;
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
textarea,
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
.partispant {
  height: 70px;
}

.partispant-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left-item {
  border-right: 1px solid #7070706e;
  display: flex;
  justify-content: center;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
}
.right-item {
  display: flex;
  justify-content: center;
  width: 50%;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
}
.gender {
  height: 100px;
  display: flex;
  /* margin-top: -8px; */
  height: 100%;
}
.male {
  width: 50%;
  border-right: 1px solid #7070706e;
  height: 50px;
  padding: 10px;
}
.female {
  width: 50%;
  height: 50px;
  padding: 10px;
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
