<template>
  <div class="main-sec">
<span>Units</span>

<div>
    <div class="form-check form-check-inline" v-for="item in years_options" :key="item"> 
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" :value="item.value">
  <label class="form-check-label" for="inlineRadio1">{{ item.text }}</label>
</div>

</div>

   </div>
</template>

<script>
  export default {
    data() {
      return {
        years_options: [
{ text: "WARO", value: "WARO" },
{ text: "PEC", value: "PEC" },
{ text: "Human Development (HD)", value: "Human Development (HD)" },
{ text: "Health and Well-Being (HaW)", value: "Health and Well-Being (HaW)" },
{ text: "Population Dynamics and Urbanization in Africa (PDAU)", value: "Population Dynamics and Urbanization in Africa (PDAU)" },
{ text: "Data Science and Evaluation (DSE)", value: "Data Science and Evaluation (DSE)" },
{ text: "Research & Related Capacity Strengthening (RRCS)", value: "Research & Related Capacity Strengthening (RRCS)" },
{ text: "Operations", value: "Operations" }
]
      }
    }
  }
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
</style>