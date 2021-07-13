<template>
  <div
    class="navbar container-fluid"
    v-bind:class="[
      { 'nav-hover': hoverlink[0] || hoverlink[1] || dropdown },
      isSticky ? stickyClass : '',
    ]"
  >
    <div class="nav-links col-4 d-none d-sm-flex">
      <div class="box d-flex">
        <div>
          <div
            class="nav-link products"
            @mouseover="$set(hoverlink, 0, true)"
            @mouseleave="$set(hoverlink, 0, false)"
          >
            <a class="title-font product-title">{{ $t("navbar.products") }}</a>
            <div
              class="w-100 d-flex justify-content-center"
              v-if="hoverlink[0]"
            >
              <div class="dot"></div>
            </div>
          </div>
          <div
            class="product-box text-font"
            v-if="hoverlink[0]"
            @mouseleave="$set(hoverlink, 1, false)"
          >
            {{ $t("navbar.nothing") }}
          </div>
          <div
            class="product-box row"
            v-if="hoverlink[1]"
            @mouseleave="$set(hoverlink, 1, false)"
          >
            <div class="d-none d-sm-block col-2">
              <p class="about-title title-font">
                {{ $t("navbar.adventure") }}
              </p>
              <img class="about-img" src="../assets/about/photo1.jpeg" alt="" />
            </div>
            <div class="d-none d-sm-block col-2">
              <p class="about-title title-font">
                {{ $t("navbar.know") }}
              </p>
              <img class="about-img" src="../assets/about/photo2.jpeg" alt="" />
            </div>
            <div class="d-none d-sm-block col-2">
              <p class="about-title title-font about-section-title">
               {{ $t("navbar.get-to-know") }}
              </p>
              <p class="about-title text-font">
{{ $t("navbar.know-description") }}              </p>
              <router-link to="/about-me">
                <button class="about-button">{{ $t("navbar.more") }}</button>
              </router-link>
            </div>
          </div>
        </div>
        <div>
          <div class="nav-link products" @mouseover="$set(hoverlink, 1, true)">
            <router-link to="/about-me">
              <a class="title-font product-title">{{
                $t("navbar.a-propos")
              }}</a>
            </router-link>
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
    <div class="col-4 d-block d-sm-none">
      <div class="burger-wrap" @click="burger()">
        <div class="first" :class="{ 'first-animation': dropdown }"></div>
        <div class="second" :class="{ 'second-animation': dropdown }"></div>
        <div class="third" :class="{ 'third-animation': dropdown }"></div>
      </div>
    </div>
    <div class="product-box dropdown" v-if="dropdown">
      <div class="w-100 text-center">
        <p>{{ $t("navbar.products") }}</p>
      </div>
      <div class="w-100 text-center">
        <p>{{ $t("navbar.a-propos") }}</p>
      </div>
    </div>
    <div class="col-4 d-flex justify-content-center ">
      <div class="text-center brand">
        <router-link to="/" class="brand-link">
          <h1 class="title-font">Léa.</h1>
          <p class="title-font">PARIS</p>
        </router-link>
      </div>
    </div>
    <div class="col-4 text-end d-flex justify-content-end lang-change">
      <p @click="changeLocale('fr')">FR</p>
      <p @click="changeLocale('en')">EN</p>
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
      hoverlink: [false, false, false],
      dropdown: false,
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
    burger() {
      console.log("hello");
      this.dropdown = !this.dropdown;
    },
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
.is_scrolled {
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
  z-index: 3;
  padding-bottom: 20px;
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
.brand {
  z-index: 3;
}
.brand-link {
  text-decoration: none;
  color: black;
}
.brand-link:hover {
  text-decoration: none;
  color: black;
}
/*Burger menu*/
.burger-wrap {
  height: 40px;
  margin: 5px 0px 10px 0px;
}
.first,
.second,
.third {
  height: 3px;
  width: 30px;
  background-color: black;
  margin-bottom: 4px;
  border-radius: 10px;
}
.first-animation {
  transform: rotate(45deg) translate(6px, 6px);
  transition: 0.8 ease-in-out;
}
.third-animation {
  transform: rotate(-45deg) translate(0px, 0px);
  transition: 0.8 ease-in-out;
}
.second-animation {
  display: none;
}
.dropdown {
  margin-top: 150px;
  left: 0;
  text-transform: uppercase;
}
.about-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
}
.about-button {
  text-transform: uppercase;
  width: 50%;
  font-size: 14px;
  border: rgb(100, 100, 100) solid 0.2px;
  background: white;
  padding: 10px 0px 10px 0px;
}
.about-button:hover {
  background: black;
  border: black solid 0.2px;
  color: white;
  transition-duration: 0.5s;
}
.about-section-title {
  font-weight: bold;
  font-size: 20px;
}
</style>
