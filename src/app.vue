<template>
    <div class="ger-body">
        <Naver></Naver>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>

</template>
<script> 
  import Naver from './pages/public/naver.vue';
export default {
  components: {
    Naver
  }
}
</script>
<style lang="scss">
    html,body{
        height:100%;
        overflow:hidden;
    }
    .ger-body{
        height:100%;
    }
    .content{
        padding: 20px 0 0 220px;
        font-size:14px;
    }
</style>