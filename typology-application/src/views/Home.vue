<template>
  <div class="home">
    <div class="home-carousel">
      <carousel :perPage="1" :navigate-to="manualNavigation">
        <slide class="slide">
          <div class="col-12 col-md-6 ">
            <h1 class="slide-title title-font">
              {{ $t("home.slides[0].title") }}
            </h1>
            <p class="slide-description title-font">
              {{ $t("home.slides[0].description") }}
            </p>
          </div>
        </slide>
        <slide class="slide">
          <div class="col-12 col-md-6 ">
            <h1 class="slide-title title-font">
              {{ $t("home.slides[1].title") }}
            </h1>
            <p class="slide-description title-font">
              {{ $t("home.slides[1].description") }}
            </p>
          </div>
        </slide>
        <slide class="slide">
          <div class="col-12 col-md-6 ">
            <h1 class="slide-title title-font">
              {{ $t("home.slides[2].title") }}
            </h1>
            <p class="slide-description title-font">
              {{ $t("home.slides[2].description") }}
            </p>
          </div>
        </slide>
        <slide class="slide">
          <div class="col-12 col-md-6 ">
            <h1 class="slide-title title-font">
              {{ $t("home.slides[2].title") }}
            </h1>
            <p class="slide-description title-font">
              {{ $t("home.slides[2].description") }}
            </p>
          </div>
        </slide>
      </carousel>
      <div class="pagination d-flex justify-content-end w-100">
        <div class="pagination-links">
          <a class="pagination-link" @click="GoToPage(0)">01</a>
          <a class="pagination-link" @click="GoToPage(1)">02</a>
          <a class="pagination-link" @click="GoToPage(2)">03</a>
        </div>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-center">
      <div class="page container">
        <p class="our-products">
          {{ $t("home.vegan") }}
        </p>
        <div class="line"></div>
        <div class="row d-flex justify-content-center">
          <div
            class="col-12 col-sm-6 sticky-box "
            v-if="!isSticky"
            v-bind:class="[isSticky ? stickyClass : '']"
          >
            <p class="title-font big-title">
              {{ $t("home.ten") }}
            </p>
            <p class="text-font">
              {{ $t("home.ten-description") }}
            </p>
          </div>

          <div v-if="isSticky" class="col-12 col-sm-6 sticky-box"></div>
          <div class="col-12 col-sm-6 dogs row">
            <div
              v-for="(dog, i) in dogs"
              :key="dog.message"
              class="col-6 d-flex justify-content-center"
              @mouseover="$set(hoverdescription, i, true)"
              @mouseleave="$set(hoverdescription, i, false)"
            >
              <div class="w-100">
                <div
                  class="dog-image text-center"
                  v-bind:style="{ backgroundImage: 'url(' + dog + ')' }"
                  :class="{ 'darken-dog': hoverdescription[i] }"
                >
                  <p class="dog-name text-font" v-if="hoverdescription[i]">
                    {{ getName(dog) }}
                  </p>
                </div>
                <div class="dog-description title-font">
                  <p v-if="!hoverdescription[i]">
                    {{ $t("home.happy-owner") }}
                  </p>
                  <router-link :to="'/product/' + getImageShortcut(dog)">
                    <button
                      class="title-font text-center"
                      v-if="hoverdescription[i]"
                    >
                      {{ $t("home.overview") }}
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="sticky-row container"
          v-if="isSticky"
          v-bind:class="[isSticky ? stickyClass : '']"
        >
          <div class="row  d-flex justify-content-center">
            <div class="col-12 col-sm-6 sticky-box ">
              <p class="title-font big-title">
                {{ $t("home.ten") }}
              </p>
              <p class="text-font">
                {{ $t("home.ten-description") }}
              </p>
            </div>

            <div class="col-12 col-sm-6 dogs row"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 ask-diagnostic text-center">
      <div class="w-100 d-flex justify-content-center">
        <h1 class="title-font">
          {{ $t("home.understand") }}
        </h1>
      </div>

      <button>{{ $t("home.diagnostic") }}</button>
    </div>
    <div class="w-100 d-flex justify-content-center">
      <div class="page">
        <h1>
          {{ $t("home.mission") }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import i18n from "../i18n";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
  },
  metaInfo() {
    return {
      title: "Léa. - " + this.$t("navbar.welcome"),
    };
  },
  data() {
    return {
      manualNavigation: 0,
      dogs: {},
      names: {},
      hoverdescription: [false, false, false, false, false, false],
      isSticky: false,
      stickyClass: "is_sticky",
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
    GoToPage(page) {
      this.manualNavigation = page;
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      if (window.innerWidth > 1000) {
        if (this.scrollPosition >= 900 && this.scrollPosition <= 1600) {
          this.isSticky = true;
        } else {
          this.isSticky = false;
        }
      }
    },
    getName(string) {
      var breed = string.split("/").slice(-2)[0];
      console.log(breed);
      return breed;
    },
    getImageShortcut(url) {
      var img = url.split("/").slice(-2)[0] + "/" + url.split("/").slice(-1)[0];
      return img;
    },
  },
  async created() {
    // GET request using fetch with async/await
    const [dogsResponse, namesResponse] = await Promise.all([
      fetch("https://dog.ceo/api/breeds/image/random/4"),
      fetch("https://dog.ceo/api/breeds/list"),
    ]);
    const dogs = await dogsResponse.json();
    const names = await namesResponse.json();
    this.names = names.message;
    this.dogs = dogs.message;
  },
};
</script>
<style>
/*General and design elements*/
.page {
  width: 100%;
  max-width: 1200px;
}
.our-products {
  margin: 20px 0px 20px 0px;
  font-size: 25px;
  font-weight: bold;
}

.line {
  width: 100%;
  height: 1px;
  background: rgb(190, 190, 190);
  margin-bottom: 40px;
}

.big-title {
  font-size: 64px;
  font-weight: bold;
}

/*Carousel*/
.slide {
  height: 90vh;
  width: 100vw;
}
.slide {
  background-size: cover;
  padding: 100px 20px 0px 20px;
}
.slide:nth-of-type(1) {
  background-image: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(255, 255, 255, 1) 0%,
      rgba(253, 253, 253, 1) 0%,
      rgba(0, 212, 255, 0) 100%
    ),
    url("../assets/home-carousel/photo2.jpeg");
}
.slide:nth-of-type(2) {
  background-image: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(255, 255, 255, 1) 0%,
      rgba(253, 253, 253, 1) 0%,
      rgba(0, 212, 255, 0) 100%
    ),
    url("../assets/home-carousel/photo3.jpeg");
}
.slide:nth-of-type(3) {
  background-image: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(255, 255, 255, 1) 0%,
      rgba(253, 253, 253, 1) 0%,
      rgba(0, 212, 255, 0) 100%
    ),
    url("../assets/home-carousel/photo4.jpeg");
}
.slide-title {
  margin-top: 30vh;
  font-size: 64px;
  text-transform: uppercase;
}
.slide-description {
  font-size: 20px;
  text-transform: uppercase;
}
.home-carousel {
  height: 90vh;
  position: relative;
}

/*Carousel pagination animation*/
.pagination {
  position: absolute;
  bottom: 30px;
}
.pagination-link {
  text-decoration: none;
  color: black;
  opacity: 0.5;
  margin-right: 20px;
}

.pagination-link:hover {
  color: black;
  opacity: 1;
  cursor: pointer;
}

.VueCarousel-pagination {
  display: none;
}

/*Sticky article animation*/
.is_sticky {
  position: fixed;
  z-index: 1;
  margin-top: 50px;
  top: 0;
}
.sticky-row {
  width: 80vw;
}
.row-container {
  margin: 0;
}
.row {
  padding: 0;
}
.sticky-box {
  max-width: 500px;
  z-index: 1;
}

/*Product box*/
.dog-image {
  height: 40vh;
  width: 100%;
  background-size: cover;
  background-position: center;
}
.darken-dog {
  box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.5);
}
.dog-description {
  margin: 10px 0px 20px 0px;
  min-height: 40px;
}
.dog-description button {
  width: 100%;
  border: rgb(100, 100, 100) solid 0.2px;
  background: white;
  padding: 10px 0px 10px 0px;
}
.dog-description p {
  width: 100%;
}
.dog-description button:hover {
  background: black;
  border: black solid 0.2px;
  color: white;
  transition-duration: 0.5s;
}
.dog-name {
  color: white;
  padding-top: 40%;
  text-transform: capitalize;
}

/*Ask diagnostic button*/
.ask-diagnostic {
  padding-top: 10%;
  margin-bottom: 100px;
  min-height: 60vh;
  background-image: url("../assets/woman.jpeg");
  background-position: center;
}
.ask-diagnostic h1 {
  margin-bottom: 30px;
  color: white;
  font-weight: bold;
  max-width: 500px;
}
.ask-diagnostic button {
  text-transform: uppercase;
  width: 50%;
  min-width: 250px;
  max-width: 400px;
  font-size: 18px;
  border: rgb(100, 100, 100) solid 0.2px;
  background: white;
  padding: 20px 0px 20px 0px;
}
.ask-diagnostic button:hover {
  background: black;
  border: black solid 0.2px;
  color: white;
  transition-duration: 0.5s;
}
</style>
