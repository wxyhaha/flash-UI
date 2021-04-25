<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <div>你好</div>
        <div>hello</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
</template>
<script>
import Button from "../../lib/Button.vue";
import Dialog from "../../lib/Dialog.vue";
import {ref} from "vue";

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {
    };
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>