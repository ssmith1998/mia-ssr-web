<template>
  <header :class="{ 'navbar--hidden': !showNavbar }" class="text-black py-10 fixed w-full flex flex-row px-20">
    <div class="wrapper flex justify-between items-center w-full">
      <div class="logo font-medium text-3xl text-white tracking-wider">
        <a href="/" class="text-lg md:text-3xl">Mia Silvio Styles</a>
      </div>
      <div class="nav hidden xl:block">
        <ul class="flex text-white">
          <a href="/works" class="flex items-center justify-center"><li :class="activeRoute === '/works' ? 'active__link text-white px-6' : 'text-white px-6'">Work</li></a>
          <a href="/personal" class="flex items-center justify-center"><li :class="activeRoute === '/personal' ? 'active__link text-white px-6' : 'text-white px-6'">Personal</li></a>
          <a href="/about" class="flex items-center justify-center"><li :class="activeRoute === '/about' ? 'active__link text-white px-6' : 'text-white px-6'">About</li></a>
          <a href="/testimonials" class="flex items-center justify-center"><li :class="activeRoute === '/testimonials' ? 'active__link text-white px-6' : 'text-white px-6'">Testimonials</li></a>
          <a href="https://www.etsy.com/uk/shop/miastylesphoto" class="flex items-center justify-center"><li :class="activeRoute === '/prints' ? 'active__link text-white px-6' : 'text-white px-6'">Prints</li></a>
          <a href="https://www.instagram.com/miastylesphoto/" class="flex items-center"><i class="fab fa-instagram text-white flex items-center px-6"></i></a>
          <a :href="`mailto:${email}`" class="flex items-center justify-center mx-6"><button class="px-6 button-header">Contact</button></a>
      </ul>
      </div>
    </div>
      <div class="burgerMenu xl:hidden">
        <i class="fas fa-bars text-white text-3xl" @click="onOpenMenu"></i>
      </div>
  </header>
</template>

<script>
export default {
name: 'header-main',
data() {
  return {
showNavbar: true,
  lastScrollPosition: 0,
  email: ''
  }
},
methods:{
onOpenMenu () {
  this.$emit('openMenu')
  console.log('open')
},
onScroll () {
    // Get the current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
    if (currentScrollPosition < 0) {
      return
    }
    // Here we determine whether we need to show or hide the navbar
    this.showNavbar = currentScrollPosition < this.lastScrollPosition
    // Set the current scroll position as the last scroll position
    this.lastScrollPosition = currentScrollPosition
  }
},
mounted () {
  window.addEventListener('scroll', this.onScroll)
  console.log('ROUTE',this.activeRoute)
  this.$axios.get(`${process.env.NUXT_ENV_API_URL}contact?populate=*`).then(response => {
    this.email = response.data.data.attributes.email
  })

},
computed: {
activeRoute() {
  return this.$route.path
}
}
}
</script>
<style>
header {
     background: rgba(0, 0, 0, 0.5);
     z-index: 11;
     transition: all 0.5s;

}

.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.active__link {
 text-decoration: underline solid 1px;
  text-underline-offset: 0.4em;
}

.mobileNav {
  position: fixed;
  right: 0px;
  top: 0px;
  background-color: #000000;
  height:100%;
  width: 50%;

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