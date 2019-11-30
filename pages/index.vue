<template>
  <div class="page-index">
    <section class="about">
      <h2>山添憲作</h2>
      <ArticleBody>
        <img class="index-img" src="~/assets/landscape/IMG_9960.jpg" alt="琵琶湖">
      </ArticleBody>
    </section>
  </div>
</template>


<script>
// import AppLogo from '~/components/AppLogo.vue'
import firebase from '@/plugins/firebase'
import ArticleBody from '~/components/common/ArticleBody';

export default {
  components: {
    // AppLogo,
    ArticleBody
  },
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
}
</script>

<!-- <style>


</style>

-->

<style scoped lang="scss">
  @import "~assets/scss/variables";

  .about{
    h2 {
      display: flex;
      align-items: center;
      margin: 50px 0 30px;
      font-size: 30px;

      &::after {
        content: '';
        display: block;
        flex: 1;
        height: 1px;
        margin-left: 10px;
        background-color: $color-black;
      }
    }
  }
  .index-img{
    height: auto;
    width: 100vw;
    object-fit: contain;
  }
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
    font-family: 'Sawarabi Mincho', sans-serif;
  }
  .links {
    padding-top: 15px;
  }
</style>
