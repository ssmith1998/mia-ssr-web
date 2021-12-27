<template>
<div class="wrapper">
  <header-main/>
  <testimonialWithImg :image="pageData.hero_image" :text="pageData.quote"  />
  <section class="testimonials">
    <h3 class="text-white text-3xl font-bold md:pl-14 pb-24">What People Are Saying</h3>
    <div class="testimonials">
      <div v-for="(testimonial, index) in pageData.testimonials" :key="index" class="testimonialItem px-14">
        <p class="text-white">{{testimonial.attributes.message}}</p>
        <p class="text-white pt-14 font-medium">{{testimonial.attributes.person}}</p>
      </div>
    </div>
  </section>
  <testimonialWithImg :image="pageData.hero_image" :text="pageData.quote"  />
  <footer-main />
</div>

</template>

<script>
import HeaderMain from '../components/HeaderMain.vue'
import FooterMain from '../components/FooterMain.vue'
import testimonialWithImg from '../components/TestimonialWithImage.vue'
export default {
    components: { HeaderMain, FooterMain, testimonialWithImg },
    data() { 
      return {
        pageData: { 
          spotlight_testimonial_img: '',
          spotlight_testimonial_info: '',
          spotlight_testimonial_info_2: '',
          spotlight_testimonial_img_2: '',
          testimonials: []
        }
      }
    },
    methods: { 
      buildImageUrl(url) {
      return process.env.NUXT_ENV_MEDIA + url
    }
    },
    async mounted () {
  const response =  await this.$axios.get(`${process.env.NUXT_ENV_API_URL}testimonial-page?populate=*`)
      // console.log(response)
      this.pageData.testimonials = response.data.data.attributes.testimonials.data

      console.log(this.pageData.testimonials)

      console.log(response)
 

   

    }


}
</script>

<style>
body,html {
  background-color: #000000;
}

div.testimonials {
  display:grid;
  grid-template-columns: repeat(3, 1fr);

}

</style>