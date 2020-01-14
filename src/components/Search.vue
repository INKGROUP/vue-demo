<template>
    <div class="search">
        <input type="text" name="search" placeholder="名称/编号">
        <button type="button">search</button>
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
.search {
    width: 450px;

    input {
        width:350px;
        height: 50px;
        padding: 5px 10px;
        border:2px solid rgb(105, 212, 195);
        background-image:url('~@/assets/images/eagle.jpg');
        background-repeat: no-repeat;
        background-position: right center;
        background-size:18%;
    }
    button {
        height: 50px;
        background:rgb(105, 212, 195);
        border:2px solid rgb(105, 212, 195);
        font-size: 25px;
    }
}
</style>
