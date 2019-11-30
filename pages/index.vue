<template>
  <div class="page-index">
    <section class="about">
      <h2>山添憲作</h2>
      <ArticleBody>
        <img class="index-img" src="~/assets/landscape/IMG_9960.jpg" alt="夏目漱石">
      </ArticleBody>
    </section>

    <section class="works">
      <h2>代表作</h2>
      <ArticleBody>
        <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
        <ul>
          <li>『吾輩は猫である』（1905年）</li>
          <li>『坊っちゃん』（1906年）</li>
          <li>『草枕』（1906年）</li>
          <li>『三四郎』（1908年）</li>
        </ul>
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
.index-img{
  height: 300px;
  width: auto;
  object-fit: contain;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
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

-->

<style scoped lang="scss">
  @import "~assets/scss/variables";

  .about,
  .works {
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
</style>
