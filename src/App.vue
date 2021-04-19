<template>
  <div>导航栏 |
    <router-link to="/">Joel</router-link> |
    <router-link to="/2">Joel2</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
