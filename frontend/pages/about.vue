<template>
<div class="wrapper">
  <header-main/>
  <section class="hero py-44 flex justify-center items-center px-10">
    <img :src="buildImageUrl(pageData.hero_image)" class="w-full" alt="">
  </section>
  <section class="">
    <p class="text-white">{{pageData.about_info}}</p>
  </section>
  <section class="bg-white h-96 flex justify-center items-center flex-col">
    <p class="text-black text-lg md:text-3xl font-bold">{{pageData.quote}}</p>
    <p class="pt-5">- Mia Silvio-Styles</p>
  </section>
  <section class="hero py-12 flex justify-center items-center px-10">
    <img :src="buildImageUrl(pageData.second_img)" class="w-full" alt="">
  </section>
  <footer-main />
</div>

</template>

<script>
import HeaderMain from '../components/HeaderMain.vue'
import FooterMain from '../components/FooterMain.vue'
export default {
    components: { HeaderMain, FooterMain },
    data() { 
      return {
        pageData: { 
          hero_image: '',
          about_info: '',
          quote: '',
          second_img: ''
        }
      }
    },
    methods: { 
      buildImageUrl(url) {
      return process.env.NUXT_ENV_MEDIA + url
    }
    },
    async mounted () {
  const response =  await this.$axios.get(`${process.env.NUXT_ENV_API_URL}about?populate=*`)
      // console.log(response)

      this.pageData.hero_image = response.data.data.attributes.hero_image.data.attributes.url
      this.pageData.quote = response.data.data.attributes.quote_section
      this.pageData.second_img = response.data.data.attributes.second_image.data.attributes.url
      this.pageData.about_info = this.$md.render(response.data.data.attributes.about_info)

      console.log(this.pageData.about_info)

 

   

    }


}
</script>

<style>
body,html {
  background-color: #000000;
}
</style>