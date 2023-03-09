<template>
  <div class="px-2">
    <div class="text-start">
      <p class="publication-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi
        neque voluptas veniam! Aliquid iusto laborum, deserunt illo iste, vel
      </p>
      <p class="publication-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi
        neque voluptas veniam! Aliquid iusto laborum, deserunt illo iste, vel
        esse, voluptas voluptatem aliquam quod vero dignissimos ea maxime
        blanditiis. Dolorem adipisci commodi illum odio? Delectus earum quas eos
        cum.
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
          <th class="row-header">Types of Publication</th>
          <th scope="col">List of Publication</th>
          <th class="header-width" scope="col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magnam quis mollitia iste odio dolor vero debitis accusantium nobis,
            earum minus voluptates, qui provident, modi ut cum quam. Rem, nobis.
          </th>
          <th class="header-width" scope="col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magnam quis mollitia iste odio dolor vero debitis accusantium nobis,
            earum minus voluptates, qui provident, modi ut cum quam. Rem, nobis.
          </th>
          <th class="header-width" scope="col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magnam quis mollitia iste odio dolor vero debitis accusantium nobis,
            earum minus voluptates, qui provident, modi ut cum quam. Rem, nobis.
          </th>
        </tr>
        <tr>
          <th class="row-header">Published Papers</th>
          <td>
            <div class="pub-item-wrapper">
              <div class="publication-iten">
                <p>1.</p>

                <input type="text" placeholder="Type Here" name="" id="" />
              </div>
              <p class="add-more">+ Add more</p>
            </div>
          </td>
          <td>Lorem ipsum</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th class="row-header">Supplements</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="row-header">Books</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="row-header">Book Chapters</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="row-header">Techinical Reports</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="row-header">Policy Brief</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="row-header">Fact Sheet</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="row-header">Blogs</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PublicationComponent",
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
  width: 300px;
}
.row-header {
}
.publication-iten {
  display: flex;
}
.publication-iten input {
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
  padding: 15px 0;
}
</style>
