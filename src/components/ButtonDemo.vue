<template>
  <div>
    Button 示例
  </div>
  <h1>示例 1</h1>
  <div>
    <Button>hello</Button>
    <Button theme="button">hello</Button>
    <Button theme="link">hello</Button>
    <Button theme="text">hello</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('你好');
    };
    return {onClick};
  }
};

</script>