<template>
<div class="wrapper">
  <header-main/>
  <!-- hero -->
  <div class="hero flex justify-center items-center" :style="`background-image:url('${pageData.heroImage}'); width:100%; height:100vh;`">
    <div class="overlay">
    </div>
    <div class="contentWrapper flex flex-col items-center">
    <p class="text-center text-white font-medium text-6xl">{{pageData.Hero_description}}</p>
    <p class="text-center text-white font-medium text-xl pt-10">{{pageData.hero_small_text}}</p>
   <a href="/contact"> <button class="contactBtn button-primary">
      Contact
    </button></a>
    </div>
  </div>
  <!-- hero end -->
  <!-- work -->
  <div class="work flex flex-col justify-center items-center">
    <p class="text-black font-medium text-3xl">{{pageData.work_section_text}}</p>
    <a href="/works"><button class=" button-primary__dark">
      View Work
    </button></a>
  </div>
  <!-- work end -->
  <!-- spotlight -->
  <div class="spotlight flex flex-col justify-center items-center p-28" :style="`background-image: url('${pageData.spotlightImg}')`">
    <div class="overlay__spotlight">
    </div>
    <h3 class="text-center text-4xl py-5 z-10">Spotlight Work</h3>
    <div class="spotlight__centerImg z-10" :style="`background-image: url(${pageData.spotlightImg})`">

    </div>
    <p class="text-white font-medium text-xl w-1/5 z-10">{{pageData.spotlightDesc}}</p>
    <a :href="`work/${pageData.spotlightId}`" class="z-10"><button class=" button-primary z-10">
      View
    </button></a>
  </div>
  <!-- spotlight end -->
  <!-- customers -->
  <div  class="customers bg-white xs:flex-col justify-center items-center py-10 sm:py-0">
    <h2 class="text-center font-medium text-black py-10 text-4xl">Who have i worked with...</h2>
    <div class="customers__inner xs:flex-col justify-center items-center py-10 sm:flex sm:py-0">
    <div v-for="(customer,index) in pageData.customers" :key="index" class="customerItem flex-col justify-center items-center">
      <img style="width:300px; height:300px;" :src="`${buildImageUrl(customer.attributes.Image.data.attributes.url)}`" class="mx-5" alt="">
    <p class='text-center my-5 sm:mt-5 text-black'>{{customer.attributes.Name}}</p>
    </div>
    </div>
  </div>
  <!-- customers end -->
  <!-- work with me -->
  <div class="work_with_me bg-black text-white flex flex-col justify-center items-center">
    <h1 class="text-4xl">I would love to work with you.</h1>
   <a href="/contact"><button class="button-primary">Contact</button></a>
  </div>
  <!-- work with me end -->
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

  name: 'IndexPage',
  data() {
    return {
      pageData: {
        heroImage: '',
        spotlightImg: '',
        spotlightDesc: '',
        customers: [],
        spotlightId: ''
      }
    }
  },
  methods: {
    async onGetPage() {
     const response =  await this.$axios.get('http://localhost:1337/api/home?populate=*')
        console.log(response)
        this.pageData = response.data.data.attributes
        this.pageData.heroImage = process.env.NUXT_ENV_MEDIA + response.data.data.attributes.Hero.data.attributes.url
        const workId = response.data.data.attributes.spotlight_work.data.id
           const spotlightData =  await this.$axios.get(`http://localhost:1337/api/works/${workId}?populate=*`)
           console.log('SPOT',spotlightData)
        this.pageData.spotlightImg = process.env.NUXT_ENV_MEDIA + spotlightData.data.data.attributes.Image.data[0].attributes.url
        this.pageData.spotlightDesc = process.env.NUXT_ENV_MEDIA + spotlightData.data.data.attributes.Description
        this.pageData.spotlightId = spotlightData.data.data.id
        this.pageData.customers = customers.data.data
        console.log(customers)
    },
    buildImageUrl(url) {
      return process.env.NUXT_ENV_MEDIA + url
    }
  },
  async fetch() {
  const response =  await this.$axios.get(`${process.env.NUXT_ENV_API_URL}home?populate=*`)
        console.log(response)
        this.pageData = response.data.data.attributes
        this.pageData.heroImage = process.env.NUXT_ENV_MEDIA + response.data.data.attributes.Hero.data.attributes.url
        const workId = response.data.data.attributes.spotlight_work.data.id
           const spotlightData =  await this.$axios.get(`${process.env.NUXT_ENV_API_URL}works/${workId}?populate=*`)
           console.log('SPOT',spotlightData)
        this.pageData.spotlightImg = process.env.NUXT_ENV_MEDIA + spotlightData.data.data.attributes.Image.data[0].attributes.url
        this.pageData.spotlightDesc = spotlightData.data.data.attributes.Description
        this.pageData.spotlightId = spotlightData.data.data.id
        const customers = await this.$axios.get(`${process.env.NUXT_ENV_API_URL}customers?populate=*`)
        this.pageData.customers = customers.data.data
        console.log(customers)
  },
  mounted() {
    // this.onGetPage()
    console.log(this.pageData.customers)
    console.log('ID',this.pageData)
  }
}
</script>

<style lang="css">
body, html {
  background-color: #000000;
  color: white;
}

.hero {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center
}

.contentWrapper{
  z-index: 1;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: absolute;

}

.overlay__spotlight {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 110vh;
  position: absolute;

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

.button-primary__dark{
  background: #000000;
  border-radius: 30px;
  border: none;
  color: #ffffffff;
  padding: 20px;
  width: 150px;
  margin: 40px 0px 0px 0px;
  transition: 0.5s;
}


button:hover{
  opacity: 0.8;
}

.work, .customers {
  min-height:66vh;
  background-color: #ece2e2;
}

.spotlight {
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height:110vh;
}

.spotlight__centerImg{
  width: 500px;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.work_with_me{
  min-height: 66vh;
}



</style>
