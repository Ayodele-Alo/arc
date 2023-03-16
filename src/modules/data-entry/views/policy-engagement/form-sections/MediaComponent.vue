<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly attach or share link to where the social media analytics as a
          means of verification
        </p>
      </div>

      <div class="outer-wrapper">
        <div class="table-wrapper">
          <table class="table table-bordered mt-5">
            <tbody>
              <tr>
                <td>
                  <span class="row-header">
                    Interviews, newspapers, newsletters, magazines, social media
                    <p class="row-sub-header">
                      (E.g. Twitter, Facebook, Youtube etc.)
                    </p>
                  </span>
                </td>
                <td>
                  <span class="row-header">
                    Analytics
                    <p class="row-sub-header">
                      (Brief of what the campaign was about)
                    </p>
                  </span>
                </td>
                <td>
                  <span class="row-header">
                    Campaign conducted
                    <p class="row-sub-header">
                      (Number of views, shares, bounce rate, mentions, comments
                      and likes etc.)
                    </p>
                  </span>
                </td>
              </tr>
              <tr v-for="(item, index) in media_links_form" :key="index">
                <td>
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ index + 1 }}.</p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.social_media_links"
                    />
                  </div>
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.analytics"
                  />
                </td>

                <td class="wrapper">
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.campaign_conducted"
                  />
                  <div
                    v-if="media_links_form.length > 1"
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

      <p @click="addToMediaLinks()" class="add-more mx-3">+ Add more</p>

      <div class="text-start mt-4">
        <p class="engagement-text">Campaigns conducted</p>
      </div>

      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="header-width-2" scope="col">
              <span class="row-header">
                List of social media campaigns conducted
              </span>
            </th>
          </tr>
          <tr v-for="(item, index) in campaign_conducted_form" :key="index">
            <td class="wrapper">
              <div class="d-flex align-items-center">
                <p class="mt-3">{{ index + 1 }}.</p>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.campaign"
                />
              </div>
              <div
                v-if="campaign_conducted_form.length > 1"
                @click="removeCampaignRow(item)"
                class="remove-icon"
              >
                x
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p @click="addToCampaign()" class="add-more mb-4">+ Add more</p>

      <table class="table table-bordered mt-5">
        <tbody>
          <tr>
            <th class="header-width-2" scope="col">
              <span class="row-header">
                Follow-up conversations or projects emanating from the social
                media and APHRC visibility
              </span>
            </th>
          </tr>
          <tr v-for="(item, index) in follow_up_conversation" :key="index">
            <td class="wrapper">
              <div class="d-flex align-items-center">
                <p class="mt-3">{{ index + 1 }}.</p>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.conversation"
                />
              </div>
              <div
                v-if="follow_up_conversation.length > 1"
                @click="removeConversationRow(item)"
                class="remove-icon"
              >
                x
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p @click="addToFollowUpConversation()" class="add-more">+ Add more</p>
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
  name: "MediaComponents",

  data() {
    return {
      error: true,
      media_links_form: [
        {
          id: 1,
          social_media_links: "",
          analytics: "",
          campaign_conducted: "",
        },
      ],
      campaign_conducted_form: [
        {
          id: 1,
          campaign: "",
        },
      ],

      follow_up_conversation: [
        {
          id: 1,
          conversation: "",
        },
      ],
    };
  },

  methods: {
    addToMediaLinks() {
      this.media_links_form.push({
        id: new Date().getTime(),
        social_media_links: "",
        analytics: "",
        campaign_conducted: "",
      });
    },

    addToCampaign() {
      this.campaign_conducted_form.push({
        id: new Date().getTime(),
        campaign: "",
      });
    },

    addToFollowUpConversation() {
      this.follow_up_conversation.push({
        id: new Date().getTime(),
        conversation: "",
      });
    },

    removeConversationRow(rowItem) {
      if (this.follow_up_conversation.length > 1) {
        this.follow_up_conversation = this.follow_up_conversation.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    removeCampaignRow(rowItem) {
      if (this.campaign_conducted_form.length > 1) {
        this.campaign_conducted_form = this.campaign_conducted_form.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    removeRow(rowItem) {
      if (this.media_links_form.length > 1) {
        this.media_links_form = this.media_links_form.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    saveForm() {
      this.media_links_form.forEach((item) => {
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

      this.campaign_conducted_form.forEach((item) => {
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

      this.follow_up_conversation.forEach((item) => {
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
        media_links_form: this.media_links_form,
        campaign_conducted_form: this.campaign_conducted_form,
        follow_up_conversation: this.follow_up_conversation,
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
.header-width-2 {
  width: 170px;
  height: 60px;
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

.table-wrapper::-webkit-scrollbar {
  width: 20px;
  height: 10px;
}

.table-wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: #70707069;
  border-radius: 10px;
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
