<template>
  <h1>Button 示例</h1>
  <Demo :component="Button1Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button3Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Button1Demo from './ButtonDemos/Button1.demo.vue';
import Button2Demo from './ButtonDemos/Button2.demo.vue';
import Button3Demo from './ButtonDemos/Button3.demo.vue';
import Button4Demo from './ButtonDemos/Button4.demo.vue';
import Button5Demo from './ButtonDemos/Button5.demo.vue';

export default {
  components: {Demo},
  setup() {
    return {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
  }
};
</script>