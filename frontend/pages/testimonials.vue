<template>
<div class="wrapper">
  <header-main/>
  <testimonialWithImg :image="pageData.spotlight_testimonial_img" :text="pageData.spotlight_testimonial_info"  />
  <section class="testimonials">
    <h3 class="text-white text-3xl font-bold pl-14 pb-24">What People Are Saying</h3>
    <div class="testimonials">
      <div v-for="(testimonial, index) in pageData.testimonials" :key="index" class="testimonialItem px-14 md:pt-8">
        <p class="text-white">{{testimonial.attributes.message}}</p>
        <p class="text-white pt-14 font-medium">{{testimonial.attributes.person}}</p>
      </div>
    </div>
  </section>
  <testimonialWithImg :image="pageData.spotlight_testimonial_img_2" :text="pageData.spotlight_testimonial_info_2"  />
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

  const spotlightTestimonial =  await this.$axios.get(`${process.env.NUXT_ENV_API_URL}testimonials/${response.data.data.attributes.spotlight_testimonial.data.id}?populate=*`)
  const spotlightTestimonial2 =  await this.$axios.get(`${process.env.NUXT_ENV_API_URL}testimonials/${response.data.data.attributes.spotlight_testimonial_2.data.id}?populate=*`)

  console.log('spotlight', spotlightTestimonial)
  this.pageData.spotlight_testimonial_img = spotlightTestimonial.data.data.attributes.image.data.attributes.url
  this.pageData.spotlight_testimonial_info = spotlightTestimonial.data.data.attributes.message
  this.pageData.spotlight_testimonial_img_2 = spotlightTestimonial2.data.data.attributes.image.data.attributes.url
  this.pageData.spotlight_testimonial_info_2 = spotlightTestimonial2.data.data.attributes.message


      // console.log(response)
 

   

    }


}
</script>

<style>
body,html {
  background-color: #000000;
}

div.testimonials {
  @media only screen and (max-width: 650px){
  display:grid;
  grid-template-columns: repeat(1, 1fr);
  }
@media only screen and (min-width: 651px){

  display:grid;
  grid-template-columns: repeat(3, 1fr);
}

}

</style>