<template>
  <div class="row w-100">
    <div class="col">
      <div class="col text-start">
        <p class="engagement-text">
          Level of staffing needed to achieve the plans for 2023
        </p>
        <textarea
          name=""
          placeholder="Type Here"
          id=""
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div class="col text-start mt-2">
        <p class="engagement-text">
          Gaps in staffing and timeline for any planned recruitment
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
  </div>
</template>

<script>
export default {
  name: "StafflingNeed",
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
  border-radius: 5px;
}

textarea ::placeholder {
  color: #70707069;
}
</style>
