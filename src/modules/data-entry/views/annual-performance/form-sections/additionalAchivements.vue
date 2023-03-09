<template>
  <div class="row w-100">
    <div class="col text-start">
      <p class="engagement-text">
        Describe other key achievements or updates by the theme that were not
        planned, if any, with respect to the center’s strategic objectives and
        goals of the theme. E.g. any trainings attended by staff etc.
      </p>
      <textarea
        name=""
        placeholder="Type Here"
        id=""
        cols="30"
        rows="5"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdditionalAchivementsComponemt",
};
</script>

<style scoped>
.engagement-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 20px;
}

textarea {
  border: 1px solid #707070ab;
  width: 100%;
  margin: 5px 0;
  padding: 20px;
}

textarea ::placeholder {
  color: #70707069;
}
</style>
