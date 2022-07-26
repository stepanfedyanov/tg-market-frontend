<template>
  <ol
    vocab="http://schema.org/"
    typeof="BreadcrumbList"
  >
    <li property="itemListElement" typeof="ListItem">
      <NLink property="item" typeof="WebPage" to="/">
        <span property="name">Главная</span>
      </NLink>
      <meta property="position" content="1" />
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
    >
      <NLink property="item" typeof="WebPage" :to="crumb.path">
        <span property="name">{{
          $route.fullPath === crumb.path && title !== null ? title : crumb.title
        }}</span>
      </NLink>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>
const titleCase = require('ap-style-title-case')
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })
      return crumbs
    },
  },
}
</script>

<style scoped>
    ol {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-wrap: wrap;
    }
    li {
        display: inline;
    }
    li:after {
        content: ' › ';
        display: inline;
        font-size: 0.9em;
        color: #aaa;
        padding: 0 0.0725em 0 0.15em;
    }
    li:last-child:after {
        content: '';
    }
    li a {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        color: #141414;
        text-decoration: none;
        margin-right: 10px;
        margin-left: 10px;

    }
    li a.nuxt-link-exact-active.nuxt-link-active {
        color: grey;
    }
</style>
