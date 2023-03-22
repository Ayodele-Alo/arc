<template>
  <div class="main-sec">
<span class="form-title">Units</span>

<br>

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
{ text: "2005", value: "2005" },
{ text: "2006", value: "2006" },
{ text : "2007", value: "2007" },
{ text: "2008", value: "2008" },
{ text: "2009", value: "2009" },
{ text: "2012", value: "2012" },
{ text: "2013", value: "2013" },
{ text: "2014", value: "2014" },
{ text: "2015", value: "2015" },
{ text: "2016", value: "2016" },
{ text: "2017", value: "2017" },
{ text: "2018", value: "2018" },
{ text: "Q1-2019", value: "Q1-2019" },
{ text: "Q2-2019", value: "Q2-2019" },
{ text: "Q3-2019", value: "Q3-2019" },
{ text: "2020", value: "2020" },
{ text: "2021", value: "2021" },
{ text: "2022", value: "2022" },
{ text: "2023", value: "2023" }
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

.form-title {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-16) / var(--unnamed-line-spacing-19)
    var(--unnamed-font-family-montserrat);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--text);
  text-align: left;
  font: normal normal bold 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>