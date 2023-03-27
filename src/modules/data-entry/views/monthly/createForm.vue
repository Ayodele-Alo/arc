<template>
  <div class="main">
    <div>
      <div class="row">
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="theme_name"
          >
            <option value="" disabled>--Select Theme--</option>
            <option value="Annually">
              Policy Engagement and Communication (PEC)
            </option>
            <option value="Quarterly">
              Population Dynamics and Urbanization (PDU)
            </option>
            <option value="Yearly">Operations (OPU)</option>
            <option value="Annually">Human Development (HD)</option>
            <option value="Quarterly">Health and Wellbeing (HaW)</option>
            <option value="Yearly">Data Science and Evaluation (DSE)</option>
          </select>
        </div>
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="year"
          >
            <option value="" disabled>--Select Year--</option>
            <option value="Annually">2021</option>
            <option value="Quarterly">2022</option>
            <option value="Yearly">2023</option>
          </select>
        </div>

        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="year"
          >
            <option value="" disabled>--Select Year--</option>
            <option value="Annually">2021</option>
            <option value="Quarterly">2022</option>
            <option value="Yearly">2023</option>
          </select>
        </div>
      </div>
    </div>

    <br /><br /><br />

    <div>
      <span>Project name/ Unit name</span>
      <input type="text" />
    </div>

    <br /><br />

    <div>
      <span>Progress for the month</span>
      <input type="text" />
    </div>

    <br /><br />

    <div>
      <span>Progress for the month</span>
      <input type="text" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  input {
    top: 428px;
    left: 434px;
    width: 80vw;
    height: 76px;
    background: var(--60-bg) 0% 0% no-repeat padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070ab;
    opacity: 1;
  }
}
</style>
