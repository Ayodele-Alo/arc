<template>

<div>
     <div class="main-sec">
<label for="book-upload">Choose a book:</label>

<input type="file"
       id="book-upload" name="book-upload"
       accept="image/png, image/jpeg">


</div>

<br>

 <div class="main-sec">
<label for="book-upload">Choose a book:</label>

<input type="file"
       id="book-upload" name="book-upload"
       accept="image/png, image/jpeg">
</div>


</div>
</template>

<script>
  export default {
    data() {
      return {

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