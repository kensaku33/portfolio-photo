<template>
  <div>
    <nuxt-link to="/"><img src="~/assets/logo.png" class="logo" alt=""></nuxt-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
              <nuxt-link class="text px-3" to="/profile" active-class="link--active" exact>PROFILE</nuxt-link>
          </li>
          <li class="nav-item">
              <nuxt-link class="text px-3" to="/photography" active-class="link--active" exact>PHOTOGRAPHY</nuxt-link>
          </li>
        </ul>
      </div>
  
  </div>
</template>

<style scoped>
.logo{
  height:50px;
  width: auto;
  margin: 20px;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
.text{
  color: black;
  position: relative;
  display: inline-block;
  text-decoration: none;
}
.text::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: '';
  width: 100%;
  height: .5px;
  background:black;
  transform: scale(0, 1);
  transform-origin: right top;
  transition: transform .3s;
}
.text:hover::after {
  transform-origin: left top;
  transform: scale(1, 1);
}
</style>