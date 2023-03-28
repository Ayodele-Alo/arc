<template>

<div>
     <div class="main-sec">
<span class="form-title">Journal Volume</span>
<hr class="hr" />
<input type="text" placeholder="Type here" v-model="journal_form">


</div>

<br>

 <div class="main-sec">
<span class="form-title">Supplement Number</span>
<hr class="hr" />
<input type="text" placeholder="Type here" v-model="supplement_number">
</div>

<br>

 <div class="main-sec">
<span class="form-title">Journal Issue</span>
<hr class="hr" />
<input type="text" placeholder="Type here" v-model="journal_issue">
 

</div>

<br>

 <div class="main-sec">
<span class="form-title">Journal Page</span>
<hr class="hr" />
<input type="text" placeholder="Type here" v-model="journal_page">
 

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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      journal_form: "",
      supplement_number: "",
      journal_issue: "",
      journal_page: ""
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      const data = {
        journal_form: this.journal_form,
        supplement_number: this.supplement_number,
        journal_issue: this.journal_issue,
        journal_page: this.journal_page
      };
      const newItem = {
        component: "publications",
        item: { name: "journalForm", form: data },
      };
      this.SAVE_DATA(newItem);
    },
  },
};
</script>



<style scoped>
.main-sec{
   /* Layout Properties */
top: 495px;
left: 434px;
width: 80vw;
height: 20vh;
/* UI Properties */
background: var(--60-bg) 0% 0% no-repeat padding-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070AB;
opacity: 1;
display: flex;
flex-direction: column;
padding: 2rem;
}

input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}

.form-title{
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-montserrat);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--text);
text-align: left;
font: normal normal bold 16px/19px Montserrat;
letter-spacing: 0px;
color: #707070;
opacity: 1;
}
</style>
