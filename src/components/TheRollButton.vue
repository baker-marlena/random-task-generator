<template>
  <div id='TheRollButton'>
    <a @click="clickMethod()"><div class="task-button">Get a task!</div></a>
  </div>
</template>
<script>
export default {
  name: 'TheRollButton',
  props: ['clickMethod'],
  data () {
    return {}
  }
}
</script>
<style scoped>
  .task-button {
    min-height: 1.5rem;
    width: 20%;
    margin: 0 auto;
    background-color: orange;
    border-radius: 5px;
    /*color: white;*/
  }
</style>
