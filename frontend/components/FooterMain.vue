<template>
  <footer class="pl-10 flex items-center">
    <ul class="p-0 flex flex-col justify-center">
       <a href="/"><li class="font-medium">Home</li></a> 
       <a href="/about"> <li class="font-medium">About</li></a>
       <a href="/testimonials"> <li class="font-medium">Testimonials</li></a>
       <a href="/contact"><li class="font-medium">Contact</li></a> 
    </ul> 
  </footer>
</template>

<script>
export default {
name: 'footer-main'
}
</script>

<style>
footer{
    min-height:50vh;
    background-color: #ece2e2;
}

footer ul li{
    font-size: 30px;
    margin: 20px 0px 0px 0px;
    color: #000000;
    text-decoration: underline solid 1px;
    text-underline-offset: 0.2em
   
}
</style>