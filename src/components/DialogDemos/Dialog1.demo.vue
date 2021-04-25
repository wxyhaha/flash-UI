<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="isVisible" :ok="okFunc" :cancel="cancelFunc">
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
    const isVisible = ref(false);
    const toggle = () => {
      isVisible.value = !isVisible.value;
    };
    const okFunc = () => {
    };
    const cancelFunc = () => {
    };
    return {
      isVisible,
      toggle,
      okFunc,
      cancelFunc
    }
  }
}
</script>