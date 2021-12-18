<template>
  <footer class="pl-10 flex items-center">
    <ul class="p-0 flex flex-col justify-center">
        <li class="font-medium">Home</li>
        <li class="font-medium">About</li>
        <li class="font-medium">Testimonials</li>
        <li class="font-medium">Contact</li>
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