<template>
  <div id="about w-100 d-flex justify-content-center">
    <div class="row w-100 d-flex justify-content-center">
      <div class="about-page">
        <h1 class="about-title title-font">
         {{ $t("about.title") }}
        </h1>
        <p class="text-font">
          {{ $t("about.description") }}
        </p>
        <div class="row project-row">
          <div class="col-12 col-sm-6">
            <p class="text-font">
              {{ $t("about.video") }}
            </p>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/0td9Z8C4jNU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-12 col-sm-6">
            <p class="text-font">
              {{ $t("about.fav") }}
            </p>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6744175064972857344"
              height="500"
              width="100%"
              frameborder="0"
              allowfullscreen=""
              title="Post intégré"
            ></iframe>
          </div>
        </div>
        <p class="text-font">
          {{ $t("about.projects") }}
        </p>
        <carousel :perPage="1" class="about-carousel">
          <slide class="w-100 about-slide">
            <h1 class="carousel-title">
              SEPEFREI
            </h1>
            <p class="text-font">
              {{ $t("about.slides.1") }}
            </p>
          </slide>
           <slide class="w-100 about-slide">
             <h1 class="carousel-title">
              MONORDO
            </h1>
            <p class="text-font">
              {{ $t("about.slides.2") }}
            </p>
          </slide>
          <slide class="w-100 about-slide">
            <h1 class="carousel-title">
              LADIES OF CODE
            </h1>
            <p class="text-font">
              {{ $t("about.slides.3") }}
            </p>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "About",
  components: {
    Carousel,
    Slide,
  },
  metaInfo() {
    return {
      title: "Léa. - " + this.$t("navbar.a-propos"),
    };
  },
};
</script>

<style>

/*Global*/
.about-page {
  max-width: 1200px;
  padding-top: 100px;
}
.project-row{
  margin-bottom: 30px;
}

/*Carousel*/
.about-carousel{
  margin:30px 0px 30px 0px;
}
.about-slide{
  background-size: cover ;
  height:50vh;
  max-height:700px;
  background-repeat: no-repeat;
}
.about-slide:nth-child(1){
  background-image: url("../assets/about/project-carousel/project1.png");
}
.about-slide:nth-child(2){
  background-image: url("../assets/about/project-carousel/project2.png");
}
.about-slide:nth-child(3){
  background-image: url("../assets/about/project-carousel/project3.png");
}

</style>
