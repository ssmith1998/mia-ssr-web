<template>
  <header :class="{ 'navbar--hidden': !showNavbar }" class="text-black py-10 fixed w-full flex flex-row px-20">
    <div class="wrapper flex justify-between items-center w-full">
      <div class="logo font-medium text-3xl text-white tracking-wider">
        <a href="/">Mia Silvio Styles</a>
      </div>
      <div class="nav">
        <ul class="flex text-white">
          <a href="/work"><li :class="activeRoute === '/work' ? 'active__link text-white px-6' : 'text-white px-6'">Work</li></a>
          <a href="/personal"><li :class="activeRoute === '/personal' ? 'active__link text-white px-6' : 'text-white px-6'">Personal</li></a>
          <a href="/about"><li :class="activeRoute === '/about' ? 'active__link text-white px-6' : 'text-white px-6'">About</li></a>
          <a href=""><li :class="activeRoute === '/Testimonials' ? 'active__link text-white px-6' : 'text-white px-6'">Testimonials</li></a>
          <a href=""><li :class="activeRoute === '/contact' ? 'active__link text-white px-6' : 'text-white px-6'">Contact</li></a>
          <a href=""><li :class="activeRoute === '/prints' ? 'active__link text-white px-6' : 'text-white px-6'">Prints</li></a>
</ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
name: 'header-main',
data() {
  return {
showNavbar: true,
  lastScrollPosition: 0
  }
},
methods:{
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
</style>