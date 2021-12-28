<template>
<section class="wrapper py-44">
    <div class="wrapperInner px-16 md:items-center">
  <img :src="buildImageUrl(image)" alt="">
  <div class="text bg-white p-14 w-96">
      <p>{{text}}</p>
  </div>
    </div>
</section>

</template>

<script>
export default {
props: { 
    image: String,
    text: String
},
methods: { 
     buildImageUrl(url) {
      return process.env.NUXT_ENV_MEDIA + url
    }
}
}
</script>

<style>
.text {
    @media only screen and (min-width:500px){
       max-height: 300px;
       grid-column: 2/4;
       grid-row: 1;
    }
}

img {
       grid-column: 1/4;
       grid-row: 1;

       @media only screen and (min-width: 680px) {
           width: 950px;
       }
}
.wrapperInner {
        @media only screen and (min-width:500px){
            display:grid;
              /* grid-template-columns: 4fr 2fr; */

        }
}
</style>