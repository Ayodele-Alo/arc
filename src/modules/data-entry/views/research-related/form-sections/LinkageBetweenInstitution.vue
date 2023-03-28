<template>
  <div class="mt-4">
    <div class="">
      <div class="border wrapper">
        <div class="p-4">
          <h4>
            Framework developed for linking academic institution with policy
            actors in their jurisdiction
          </h4>
        </div>
        <div v-for="(item, index) in frameworkDeveloped" :key="index" class="">
          <div class="border-top p-4 d-flex position-relative">
            <input
              type="text"
              v-model="item.framework"
              placeholder="Type Here"
              id=""
            />
            <div
              v-if="frameworkDeveloped.length > 1"
              @click="removeFromFrameworkDeveloped(item)"
              class="remove-icon position-absolute bottom-0 end-0"
            >
              x
            </div>
          </div>
        </div>
      </div>
      <p @click="addToFrameworkDeveloped()" class="add-more mt-3">+ Add more</p>
    </div>
    <div class="mt-4">
      <div class="border wrapper">
        <div class="p-4">
          <h4>
            Partner institution that have adopted and implemented frameworks
            developed for linking academic institution with policy actors in
            their jurisdiction
          </h4>
        </div>
        <div v-for="(item, index) in partnerInstutions" :key="index" class="">
          <div class="border-top p-4 d-flex position-relative">
            <input
              type="text"
              v-model="item.partnerInstution"
              placeholder="Type Here"
              id=""
            />
            <div
              v-if="partnerInstutions.length > 1"
              @click="removeFromPartnerInstutions(item)"
              class="remove-icon position-absolute bottom-0 end-0"
            >
              x
            </div>
          </div>
        </div>
      </div>
      <p @click="addToPartnerInstutions()" class="add-more mt-3">+ Add more</p>
    </div>
    <div class="mt-4">
      <div class="border wrapper">
        <div class="p-4">
          <h4>
            Linkages established between institution and policy actors {provide
            the specific actor linked to each institution}
          </h4>
        </div>
        <div v-for="(item, index) in LinkagesEstablished" :key="index" class="">
          <div class="border-top p-4 d-flex position-relative">
            <input
              type="text"
              v-model="item.establishedLinkage"
              placeholder="Type Here"
              id=""
            />
            <div
              v-if="LinkagesEstablished.length > 1"
              @click="removeFromLinkagesEstablished(item)"
              class="remove-icon position-absolute bottom-0 end-0"
            >
              x
            </div>
          </div>
        </div>
      </div>
      <p @click="addToLinkagesEstablished()" class="add-more mt-3">
        + Add more
      </p>
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
      error: true,
      frameworkDeveloped: [
        {
          id: 1,
          framework: "",
        },
      ],
      partnerInstutions: [
        {
          id: 1,
          partnerInstution: "",
        },
      ],
      LinkagesEstablished: [
        {
          id: 1,
          establishedLinkage: "",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["SAVE_DATA"]),

    addToFrameworkDeveloped() {
      this.frameworkDeveloped.push({
        id: new Date().getTime(),
        framework: "",
      });
    },
    removeFromFrameworkDeveloped(rowItem) {
      this.frameworkDeveloped = this.frameworkDeveloped.filter(
        (item) => item.id !== rowItem.id
      );
    },

    addToPartnerInstutions() {
      this.partnerInstutions.push({
        id: new Date().getTime(),
        framework: "",
      });
    },
    removeFromPartnerInstutions(rowItem) {
      this.partnerInstutions = this.partnerInstutions.filter(
        (item) => item.id !== rowItem.id
      );
    },
    addToLinkagesEstablished() {
      this.LinkagesEstablished.push({
        id: new Date().getTime(),
        establishedLinkage: "",
      });
    },
    removeFromLinkagesEstablished(rowItem) {
      this.LinkagesEstablished = this.LinkagesEstablished.filter(
        (item) => item.id !== rowItem.id
      );
    },

    saveForm() {
      this.frameworkDeveloped.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;
            return;
          } else {
            this.error = false;
            // console.log(this.engagements_form);
          }
        }
      });

      if (this.error) {
        this.toast("Warning", "Fill form completely", "warning");
        return;
      }
      this.partnerInstutions.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;

            return;
          } else {
            this.error = false;
            // console.log(this.engagements_form);
          }
        }
      });

      if (this.error) {
        this.toast("Warning", "Fill form completely", "warning");
        return;
      }
      this.LinkagesEstablished.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;
            return;
          } else {
            this.error = false;
            // console.log(this.engagements_form);
          }
        }
      });

      if (this.error) {
        this.toast("Warning", "Fill form completely", "warning");
        return;
      }
      const data = {
        LinkagesEstablished: this.LinkagesEstablished,
        partnerInstutions: this.partnerInstutions,
        frameworkDeveloped: this.frameworkDeveloped,
      };
      const newItem = {
        component: "resource_related",
        item: { name: "linkageBetweenInstitution", form: data },
      };
      this.SAVE_DATA(newItem);
    },
  },
});
</script>

<style scoped>
.wrapper input {
  margin-left: 20px;
  width: 75%;
  border: none;
  outline: none;
  background-color: transparent;
}
.wrapper h5 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 400;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
}

.wrapper h4 {
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
</style>
