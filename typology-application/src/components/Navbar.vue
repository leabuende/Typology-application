<template>
  <div
    class="navbar container-fluid"
    v-bind:class="[{'nav-hover': hoverlink[0]  || hoverlink[1]}, isSticky ? stickyClass : '']"
  >
    <div class="row w-100" >
      <div class="nav-links col-4 d-none d-sm-flex">
        <div class="box d-flex">
          <div>
            <div
              class="nav-link products"
              @mouseover="$set(hoverlink, 0, true)"
              @mouseleave="$set(hoverlink, 0, false)"
            >
              <a class="title-font product-title">{{
                $t("navbar.products")
              }}</a>
              <div
                class="w-100 d-flex justify-content-center"
                v-if="hoverlink[0]"
              >
                <div class="dot"></div>
              </div>
            </div>
            <div class="product-box" v-if="hoverlink[0]">
              content
            </div>
            <div class="product-box" v-if="hoverlink[1]">
              content 2
            </div>
           
          </div>
          <div>
            <div
              class="nav-link products"
              @mouseover="$set(hoverlink, 1, true)"
              @mouseleave="$set(hoverlink, 1, false)"
            >
              <a class="title-font product-title">{{
                $t("navbar.a-propos")
              }}</a>
              <div
                class="w-100 d-flex justify-content-center"
                v-if="hoverlink[1]"
              >
                <div class="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 d-block d-sm-none" v-on:click="burger()">
          <p>
menu
          </p>
      </div>
       <div class="product-box" v-if="hoverlink[2]">
              content 2
            </div>
      <div class="col-4 d-flex justify-content-center ">
        <div class="text-center brand">
          <h1 class="title-font">Léa.</h1>
          <p class="title-font">PARIS</p>
        </div>
      </div>
      <div class="col-4 text-end d-flex justify-content-end lang-change">
        <p @click="changeLocale('fr')">FR</p>
        <p @click="changeLocale('en')">EN</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import i18n from "../i18n";
export default {
  name: "Navbar",
  data() {
    return {
      hoverlink: [false, false,false],
      isSticky: false,
      stickyClass: "is_scrolled",
      scrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
      handleScroll() {
      this.scrollPosition = window.scrollY;
        if (this.scrollPosition >= 100) {
          this.isSticky = true;
        } else {
          this.isSticky = false;
        }
    },
    burger(){
        this.hoverlink[2]=!this.hoverlink[2];
    }
  },
};
</script>
<style>
.navbar {
  width: 100vw;
}
.nav-links a {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
}
.is_scrolled{
    background: #fdfdfd91;
 
}
.nav-links a:hover {
  color: black;
  cursor: pointer;
}
.box {
  height: auto;
}
.product-box {
  background: white;
  height: auto;
  width: 100vw;
  position: fixed;
  margin-top: 20px;
  padding: 0px 0px 30px 20px;
}
.nav-hover {
  background: white;
}

.products:hover .dot-block {
  display: block;
}
.dot-block {
  display: none;
}

.dot {
  background: black;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  position: fixed;
}
.lang-change p {
  margin-left: 20px;
}
.lang-change p:hover {
  cursor: pointer;
}
.brand{
    z-index:3;
}
</style>
