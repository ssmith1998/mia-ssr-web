<template>
  <div class="wrapper">
  <header-main/>
  <!-- hero -->
      <div class="hero flex items-center justify-center">
          <h1 class="font-bold text-5xl text-center text-white">Work</h1>
      </div>
      <!-- hero end -->
      <!-- work -->
      <section class="work grid grid-cols-1 sm:grid-cols-2">
        <div v-for="(workItem,index) in work" :key="index" class="workItem">
            <a :href="`works/${workItem.id}`" class="flex flex-col justify-center items-center">
            <div class="imgWrapper" style="width:95%; height:400px;">
            <img style="width:100%; height:100%;" :src="`${buildImageUrl(workItem.attributes.image.data.attributes.url)}`" alt="">
            </div>
            <div class="textWrapper flex justify-start w-full">
            <p class="text-white text-left font-medium py-5 text-xl w-full pl-5">{{workItem.attributes.Name}}</p>
            </div>
            </a>
        </div>
      </section>
      <!-- work end -->
      <!-- contact section -->
      <section class="text-white bg-black flex flex-col justify-center items-center py-48">
          <h1 class="text-white text-5xl font-bold">Let’s make something beautiful.</h1>
          <button class="button-primary">Contact</button>
      </section>
      <!-- contact section end  -->
      <!-- footer -->
  <footer-main />
  <!-- footer end -->
  </div>
</template>

<script>
import HeaderMain from '../components/HeaderMain.vue'
import FooterMain from '../components/FooterMain.vue'
export default {
components: { HeaderMain, FooterMain },
data() {
    return {
        work: [],
        apiUrl: process.env.NUXT_ENV_API_URL
    }
},
methods: { 
    buildImageUrl(url) {
      return process.env.NUXT_ENV_MEDIA + url
    }
},
mounted() {
     this.$axios.get(process.env.NUXT_ENV_API_URL + 'categories?populate=*').then(works => {
         this.work = works.data.data
         console.log(works.data.data[0])
     })
}
}
</script>

<style>
body, html{
    background-color: #000000;
}

.hero {
    min-height: 50vh;
    
}

.imgWrapper{
    overflow: hidden;
}

.imgWrapper img{
    transition: all 0.2s ease-in-out;
}

.imgWrapper:hover img {
    transform: scale(1.1);
    cursor: pointer;
}

.button-primary{
  background: #ffffffff;
  border-radius: 30px;
  border: none;
  color: #000000;
  padding: 20px;
  width: 150px;
  margin: 40px 0px 0px 0px;
  transition: 0.5s;
}
button:hover{
  opacity: 0.8;
}
</style>