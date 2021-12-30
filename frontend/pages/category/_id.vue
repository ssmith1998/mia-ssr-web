<template>
<div class="wrapper">
    <header-main/>
    <div class="wrapperMain pt-48">
        <h2 class="font-bold pl-10 text-white text-4xl">{{this.title}}</h2>
        <div class="worksWrapper pt-26 px-10 py-10">
            <div v-for="(item,index) in work" :key="index" class="workItem mt-36">
                <div class="info">
                        <p class="text-white font-bold text-3xl">{{item.attributes.Name}}</p>
                        <p class="text-white">{{item.attributes.Description}}</p>
                        <a :href="`/work/${item.id}`"><button class="button-primary">View Work</button></a>
                </div>
                <img v-for="(image, index) in item.attributes.Image.data" :key="index" :src="`${buildImageUrl(image.attributes.url)}`" alt="">
            </div>
        </div>
        <div class="categoryNavWrapper flex justify-end py-10 px-10">
            <a :href="`/category/${nextCat ? nextCat.id : null}`" class="flex items-center">
            <p class="text-white text-3xl">{{nextCat ? nextCat.attributes.Name : null}}</p>
            <i class="fas fa-chevron-right text-white pl-5 text-3xl"></i>
            </a>
        </div>
    </div>
  <footer-main />
</div>
</template>

<script>
import HeaderMain from '../../components/HeaderMain.vue'
import FooterMain from '../../components/FooterMain.vue'
export default {
data () {
    return {
    workId: this.$route.params.id,
    work: [],
    title: '',
    categories:[]
    }
},
methods: { 
    buildImageUrl(url) {
      return process.env.NUXT_ENV_MEDIA + url
    }
},
computed: { 
    nextCat() {
        let foundCat =  this.categories.findIndex(cat => {
            if(cat.id === parseInt(this.workId)){
                return cat
            }
        })

        let nextCat = this.categories[foundCat + 1]

        if(nextCat){
            return nextCat

        }else{
            nextCat = this.categories[0]
            return nextCat
        }


    }
},
components: { HeaderMain, FooterMain},
async mounted () {
const response =  await this.$axios.get(`${process.env.NUXT_ENV_API_URL}categories/${this.workId}?populate[0]=works.Image`)
const cats = await this.$axios.get(`${process.env.NUXT_ENV_API_URL}categories?populate=*`)
this.categories = cats.data.data
console.log(response)
if(response.data.data){
    this.work = response.data.data.attributes.works.data
    this.title = response.data.data.attributes.Name
    console.log('work', this.work)
}else{
    // redirect to 404 page
}
console.log('nextCat', this.nextCat)
}
}
</script>

<style>
body,html{
    background-color: #000000
}
/* work item base css */
.workItem {
    display: grid;
    gap: 20px ;
}
/* odd work item grid layout */
.workItem:nth-of-type(odd) img:nth-of-type(1){
grid-column: 1/3;
grid-row: 1/4;
}

.workItem:nth-of-type(odd) img:nth-of-type(2){
grid-column: 3/4;
grid-row: 1/3;
}

/* even work item */
.workItem:nth-of-type(even) img:nth-of-type(1){
 grid-column: 4;
grid-row: 1/4;
}

.workItem:nth-of-type(even) div.info{
     grid-column: 2;
    grid-row: 2;
}

.workItem:nth-of-type(even) img:nth-of-type(2){
display:none;
}
/* second work item end */

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