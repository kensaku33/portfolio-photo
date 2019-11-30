<template>
  <div class="article-body">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
	.article-body {
    h3 {
      font-size: 20px;
      margin: 30px 0 20px;
    }

    p {
      line-height: 1.75;

      + p {
        margin-top: 20px;
      }

      a {
        color: blue;
      }
    }

    ul {
      list-style: circle;
      margin-top: 20px;
      margin-left: 20px;

      li {
        &:nth-of-type(n+2) {
          margin-top: 0.5em;
        }
      }
    }

    img {
      max-width: 100%;
    }
  }
</style>