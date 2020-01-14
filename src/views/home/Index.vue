<template>
  <div class="home">
    <div class="head-box">
      <Header/>
      <Search/>
    </div>
    <img alt="Vue logo" src="../../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Header,
    Footer,
    Search
  }
}
</script>
<style lang="scss" scoped>
@import 'Index.scss';
.head-box {
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px dashed #cccccc;
}
</style>
