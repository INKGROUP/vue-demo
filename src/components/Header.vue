<template>
  <div class="content">
    <div class="header">
      <div class="logo">
        <img :src="logoUrl" alt="logo" />
      </div>
      <ul class="nav-bar">
        <li>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      logoUrl: require('@/assets/images/logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
    .header {
        display: flex;
        align-items: center;
        justify-content: start;
        height: 100px;

    .logo img {
        width: 100px;
        height: auto;
    }
    .nav-bar {
        display: flex;
        justify-content: flex-start;
        align-items:flex-end;

        li {
            width: 150px;
            background:white;
            &:hover {
                animation:change 1s ease-in forwards;
            }

            @keyframes change {
              0% {
                background:rgba(19, 191, 221, 0.336);
                border-radius: 0;
              }
              50% {
                background:rgba(19, 191, 221, 1);
              }
              100% {
                background:rgba(19, 191, 221, 0.2);
                border-radius: 100%;
              }
            }
        }
    }
    }
}
</style>
