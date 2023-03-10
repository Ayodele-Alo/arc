<template>
    <div class="flex-nowrap">
      <div class="bg-black side">
        <div
          class="d-flex flex-column align-items-start pt-2 text-white min-vh-100"
        >
          <div class="nav flex-column gap-4 w-100" id="menu">
            <div>

              <a
                href="#submenu1"
                data-bs-toggle="collapse-nav"
                class="nav-link side-link px-0 d-flex align-items-center justify-content-between"
              >
                <span class="d-flex gap-2 align-items-center fw-light"
                  ><i class="bi bi-list fs-4"></i>Forms</span
                >
                <span
                  ><i class="fa fa-angle-down fs-6" aria-hidden="true"></i
                ></span>
              </a>
              <div
                class="collapse-nav show nav flex-column"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <router-link to="/data-entry" class="nav-link text-success"
                  >Create Form</router-link
                >
                <router-link to="/data-entry" class="nav-link"
                  >Submitted Forms</router-link
                >
                <router-link to="/data-entry" class="nav-link"
                  >Pending Forms</router-link
                >
                <router-link to="/data-entry" class="nav-link"
                  >Approved Forms</router-link
                >
                <router-link to="/data-entry" class="nav-link"
                  >Drafts</router-link
                >
              </div>
              <router-link
                to="/"
                class="nav-link side-link px-0 d-flex gap-2 align-items-center"
                ><i class="fa fa-history" aria-hidden="true"></i>Log
                History</router-link
              >
              <router-link
                to="/"
                class="nav-link side-link px-0 d-flex gap-2 align-items-center"
                ><i class="fa fa-sign-out" aria-hidden="true"></i>Sign
                Out</router-link
              >
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
</template>

<style lang="scss">
.side {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 16rem !important;
  background-color: white;
  color: white;
  position: fixed;
}

.nav-link {
  font-family: sans-serif !important;
  color: white !important;
  text-align: start;
  margin: 1rem;
}

.side-link {
  font-size: 1.1rem !important;
}
</style>
