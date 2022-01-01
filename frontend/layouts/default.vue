<template>
<div>
  <header-main @openMenu="onOpenNav"/>
  <Nuxt />
  <footer-main />
<div :class="open ? 'mobileNav mobileNav__open' : 'mobileNav'">
  <i class="fas fa-times" id="closeMenu" @click="open = false"></i>
      <ul class="text-white">
           <a href="/works" class=""><li :class="activeRoute === '/works' ? 'active__link text-white px-6' : 'text-white px-6'">Work</li></a>
          <a href="/personal" class=""><li :class="activeRoute === '/personal' ? 'active__link text-white px-6' : 'text-white px-6'">Personal</li></a>
          <a href="/about" class=""><li :class="activeRoute === '/about' ? 'active__link text-white px-6' : 'text-white px-6'">About</li></a>
          <a href="/testimonials" class=""><li :class="activeRoute === '/testimonials' ? 'active__link text-white px-6' : 'text-white px-6'">Testimonials</li></a>
          <a href="https://www.etsy.com/uk/shop/miastylesphoto" class=""><li :class="activeRoute === '/prints' ? 'active__link text-white px-6' : 'text-white px-6'">Prints</li></a>
          <a href="https://www.instagram.com/miastylesphoto/" class="flex "><i class="fab fa-instagram text-white flex items-center px-6"></i></a>
          <a :href="`mailto:${email}`" class="mx-6"><button class="px-6 mt-5 button-header">Contact</button></a>

      </ul>
    </div>
</div>
</template>
<script>
import HeaderMain from '../components/HeaderMain.vue'
import FooterMain from '../components/FooterMain.vue'
export default {
  data () {
    return {
      open: false,
      email: ''
    }
  },
  components: { HeaderMain, FooterMain},
  methods: {
    onOpenNav() {
      console.log('opened')
      this.open = true
    }
  },
  computed: { 
    activeRoute() {
  return this.$route.path
},
  },
  async mounted () {
  
  const response = await this.$axios.get(`${process.env.NUXT_ENV_API_URL}contact?populate=*`)
  console.log('RESSSSSSS', response)
    this.email = response.data.data.attributes.email
    console.log('EMAILLLLLL',this.email)
}
}
</script>
<style>
.mobileNav {
  position: fixed;
  right: 0px;
  top: 0px;
  background-color: #000000;
  height:100%;
  width: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s all;

}

html, body {
font-family: 'Poppins', sans-serif;
}

@media only screen and (min-width:1440px) {
  .mobileNav {
    display:none;
  }
}

.mobileNav__open {
  width: 50%;
}
.active__link {
 text-decoration: underline solid 1px;
  text-underline-offset: 0.4em;
}

#closeMenu {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 25px;
  color: #ffffff;
}
.mobileNav ul li {
  font-size: 25px;
  padding-bottom: 10px;
}
.button-header{
  background: #ffffffff;
  border-radius: 10px;
  border: none;
  color: #000000;
  transition: 0.5s;
  padding: 5px;
}
</style>
