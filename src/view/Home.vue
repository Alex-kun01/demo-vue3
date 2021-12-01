<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: hasaiki
 * @Date: 2021-12-01 10:27:37
 * @LastEditors: hasaiki
 * @LastEditTime: 2021-12-01 10:43:04
-->
<template>
  <div class="home">{{testName}}</div>
  <button @click="changeTest">change</button>
</template>
<script>
import { ref } from 'vue'

export default ({
  setup() {
    const testName = ref('test');
    function changeTest () {
      console.log('this', this.testName);
      this.testName = '蒋治坤'
    }
    return {
      testName,
      changeTest,
    }
  },
})
</script>
