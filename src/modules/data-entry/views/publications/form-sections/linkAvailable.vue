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
{ text: "ISBN", value: "ISBN" },
{ text: "DOI", value: "DOI" },
{ text : "Hyperlink", value: "Hyperlink" },
{ text: "Soft copy of the book", value: "Soft copy of the book" },

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