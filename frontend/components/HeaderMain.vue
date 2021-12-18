<template>
  <header :class="{ 'navbar--hidden': !showNavbar }" class="text-black py-10 fixed w-full flex flex-row px-20">
    <div class="wrapper flex justify-between items-center w-full">
      <div class="logo font-medium text-3xl text-white tracking-wider">
        Mia Silvio Styles
      </div>
      <div class="nav">
        <ul class="flex text-white">
          <li class="px-6">Work</li>
          <li class="px-6">Personal</li>
          <li class="px-6">About</li>
          <li class="px-6">Testimonials</li>
          <li class="px-6">Contact</li>
          <li class="px-6">Prints</li>
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
},
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
</style>