<template>
  <div>
    Button 示例
  </div>
  <h1>示例 1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例 2</h1>
  <div>
    <Button size="big">大大</Button>
    <Button>普通</Button>
    <Button size="small">小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大</Button>
    <Button theme="link">普通</Button>
    <Button theme="link" size="small">小小</Button>
  </div>
  <div>
    <Button theme="text" size="big">大大</Button>
    <Button theme="text">普通</Button>
    <Button theme="text" size="small">小小</Button>
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