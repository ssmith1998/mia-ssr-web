<template>
  <div class="wrapper">
        <div class="wrapperMain pt-80">
            <h2 class="text-5xl font-medium md:pl-16">{{this.work.Name}}</h2>
            <p class="pt-10 md:pl-16 font-light">{{this.work.Description}}</p>
            <!-- hero image -->
            <section v-if="hero_image" class="hero_image" :style="`background-image:url(${buildImageUrl(hero_image)})`">
            </section>
            <!-- hero image end -->

            <!-- images -->
            <section class="imagesWrapper pt-28">
                <div v-for="(image,index) in images" :key="index" class="imageItem p-16">
                    <img :src="`${buildImageUrl(image.attributes.url)}`" alt="">
                </div>
            </section>
            <!-- images end -->
            <section class="map">

            </section>
        </div>
  </div>
</template>

<script>
import HeaderMain from '../../components/HeaderMain.vue'
import FooterMain from '../../components/FooterMain.vue'
export default {
data() {
    return {
        workId: this.$route.params.id,
        images: [],
        work: {},
        hero_image: ''
    }
},
async mounted () {
    console.log("id",this.workId);
    const response =  await this.$axios.get(`${process.env.NUXT_ENV_API_URL}works/${this.workId}?populate=*`)
    this.images = response.data.data.attributes.Image.data
    this.hero_image = response.data.data.attributes.hero_image.data ? response.data.data.attributes.hero_image.data.attributes.url : null
    this.work = response.data.data.attributes
    console.log(response)

},

methods: {
buildImageUrl(url) {
      return process.env.NUXT_ENV_MEDIA + url
    }
}
}
</script>

<style>
.hero_image{
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 90px;
}

.imagesWrapper {
    display: grid;
    grid-template-columns:repeat(2, 1fr);
}

.imageItem {
    max-width: 700px;
    max-height: 700px;
}

.imageItem img{
    width: 100%;
    height: 100%;
}
</style>