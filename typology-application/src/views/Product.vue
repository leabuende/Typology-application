<template>
  <div id="product">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 product-section ">
          <p class="text-font product-name">
            {{ $route.params.breed }}
          </p>
          <div
            class="product-image w-100 w-md-90"
            v-bind:style="{
              backgroundImage:
                'url(https://images.dog.ceo/breeds/' +
                $route.params.breed +
                '/' +
                $route.params.image +
                ')',
            }"
          ></div>
        </div>
        <div
          class="col-12 col-sm-6 product-description d-flex justify-content-center"
        >
          <div class="product-details w-100 w-sm-90">
            <div class="description-box">
              <p class="title-font">
                {{ $t("product.title") }}{{ $route.params.breed }}
              </p>
              <p class="text-font">
                {{ $t("product.text1") }}
              </p>
              <p class="text-font">
                {{ $t("product.text2") }}
              </p>
            </div>

            <button class="add-cart">{{ $t("product.cart") }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
};
</script>

<style>
/*Global*/
#product {
  padding-top: 100px;
}

/*Product Image*/
.product-name {
  text-transform: uppercase;
  font-weight: lighter;
  margin: 0;
}
.product-image {
  max-width: 500px;
  height: 50vh;
  background-position: top;
  margin-bottom: 30px;
  background-repeat: no-repeat;
}

/*Product Description*/
.description-box {
  height: 40vh;
  border: 1px solid grey;
  padding: 20px;
  margin: 23px 0px 20px 0px;
}
.description-box .title-font {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
}
.description-box .text-font {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: lighter;
}
.add-cart {
  width: 100%;
  border: rgb(100, 100, 100) solid 0.2px;
  background: white;
  padding: 10px 0px 10px 0px;
  margin: 30px 0px 30px 0px;
}
.add-cart:hover {
  background: black;
  border: black solid 0.2px;
  color: white;
  transition-duration: 0.5s;
}
</style>
