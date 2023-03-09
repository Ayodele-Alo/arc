<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="publication-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi
          neque voluptas veniam! Aliquid iusto laborum, deserunt illo iste, vel
        </p>
        <p class="publication-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi
          neque voluptas veniam! Aliquid iusto laborum, deserunt illo iste, vel
          esse, voluptas voluptatem aliquam quod vero dignissimos ea maxime
          blanditiis. Dolorem adipisci commodi illum odio? Delectus earum quas
          eos cum.
        </p>
        <p class="publication-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi
          neque voluptas veniam! Aliquid iusto laborum, deserunt illo iste, vel
          esse, voluptas voluptatem aliquam quod vero dignissimos ea maxime
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header">Themes</th>
            <th class="header-width" scope="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque magnam quis mollitia iste odio dolor vero debitis
              accusantium nobis, earum minus voluptates, qui provident,
            </th>
            <th class="header-width" scope="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque magnam quis mollitia iste odio dolor vero debitis
              accusantium nobis, earum minus voluptates, qui provident, modi ut
              cum quam. Rem, nobis.
            </th>
            <th class="header-width" scope="col"></th>
            <th class="header-width" scope="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque magnam quis mollitia iste odio dolor vero debitis
            </th>
            <th class="header-width" scope="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque magnam quis mollitia iste odio dolor vero debitis
              accusantium nobis, earum minus voluptates, qui provident,
            </th>
            <th class="header-width" scope="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque magnam quis mollitia iste odio dolor vero debitis a
            </th>
            <th class="header-width" scope="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque magnam quis mollitia iste odio dolor vero debitis
            </th>
            <th class="header-width" scope="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque magnam quis mollitia iste odio dolor vero debitis
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="row">
                <div class="col text-start">
                  <p>1.</p>
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <p class="add-more">+ Add more</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EngagementComponent",
};
</script>

<style scoped>
.publication-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
}
.header-width {
  width: 170px;
  text-align: left;
  padding: 4px 8px;
}
.row-header {
}
.publication-iten {
  display: flex;
}
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}
.pub-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4px;
}
.add-more {
  cursor: pointer;
}
.add-more:hover {
  color: red;
}
.row-header {
  padding: 15px 5px;
  height: 100px;
}
</style>
