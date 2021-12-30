<template>
  <section class="wrapper">
        <header-main/>
            <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-48 pb-36 ">
                <div v-for="(item, index) in personal" :key="index" class="personalItem flex flex-col justify-center p-10">
                    <a :href="`/work/${item.id}`" style="width:95%; height:100%;">
                        <div class="imgWrapper" style="width:95%; height:100%;">
                            <img :src="buildImageUrl(item.item.Image.data[0].attributes.url)" class="w-full h-full" alt="">
                        </div>
                        <p class="font-medium pt-5">{{item.item.Name}}</p>
                    </a>
                </div>
            </section>
        <footer-main />
  </section>
</template>

<script>
import HeaderMain from '../components/HeaderMain.vue'
import FooterMain from '../components/FooterMain.vue'
export default {
name: 'personal',
components: { HeaderMain, FooterMain },
data() {
    return {
        personal: []
    }
},
methods: { 
    buildImageUrl(url) {
      return process.env.NUXT_ENV_MEDIA + url
    }
},
async mounted () {
   const works =  await this.$axios.get(process.env.NUXT_ENV_API_URL + 'categories?populate=*')
         const cat = works.data.data.filter(cat => {
             return cat.attributes.Name === 'Personal'
         })

         const work = cat[0].attributes.works.data

         work.forEach( async item => {
             console.log('ITEM', item)
            const workItem =  await this.$axios.get(process.env.NUXT_ENV_API_URL + `works/${item.id}?populate=*`)
              console.log('WORKS', workItem)
              this.personal.push({item: workItem.data.data.attributes, id:workItem.data.data.id })
         })

         console.log('PERSONAL',this.personal)
        
        
}
}
</script>

<style>
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
</style>