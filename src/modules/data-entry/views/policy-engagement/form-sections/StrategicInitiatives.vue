<template>
  <div class="row px-2">
    <div class="col text-start">
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
          <tr v-for="(item, index) in strategic_initiatives" :key="index">
            <td class="row-header wrapper py-3">
              <div class="row w-100">
                <div class="w-100 col d-flex align-items-center text-start">
                  <p class="mt-3 mx-2">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.designed_initiatives"
                  />
                </div>
              </div>
              <div
                v-if="strategic_initiatives.length > 1"
                @click="removeStrategicInitiatives(item)"
                class="remove-icon"
              >
                x
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p @click="addToStrategicInitiatives()" class="add-more">+ Add more</p>

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
          <tr v-for="(item, index) in forum_list_form" :key="index">
            <td class="row-header wrapper py-3">
              <div class="row w-100">
                <div class="w-100 col d-flex align-items-center text-start">
                  <p class="mt-3 mx-2">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.forum"
                  />
                </div>
              </div>
              <div
                v-if="forum_list_form.length > 1"
                @click="removeFromForumList(item)"
                class="remove-icon"
              >
                x
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p @click="addToForumList()" class="add-more">+ Add more</p>

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
  name: "StrategicInitiatives",

  data() {
    return {
      error: true,
      strategic_initiatives: [
        {
          id: 1,
          designed_initiatives: "",
        },
      ],
      forum_list_form: [
        {
          id: 1,
          forum: "",
        },
      ],
    };
  },

  methods: {
    addToStrategicInitiatives() {
      this.strategic_initiatives.push({
        id: new Date().getTime(),
        designed_initiatives: "",
      });
    },

    addToForumList() {
      this.forum_list_form.push({
        id: new Date().getTime(),
        forum: "",
      });
    },

    removeStrategicInitiatives(rowItem) {
      if (this.strategic_initiatives.length > 1) {
        this.strategic_initiatives = this.strategic_initiatives.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    removeFromForumList(rowItem) {
      if (this.forum_list_form.length > 1) {
        this.forum_list_form = this.forum_list_form.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    saveForm() {
      this.strategic_initiatives.forEach((item) => {
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

      this.forum_list_form.forEach((item) => {
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
        strategic_initiatives: this.strategic_initiatives,
        forum_list_form: this.forum_list_form,
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
