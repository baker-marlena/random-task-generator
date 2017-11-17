<template>
  <div id='TheStepField'>
    <p id="task-field">{{newText}}</p>
  </div>
</template>
<script>
export default {
  name: 'TheStepField',
  props: ['newText'],
  data () {
    return {}
  }
}
</script>
<style scoped>
  #TheStepField {
    width: 50%;
    min-height: 2rem;
    padding: .5rem;
    background: lightgrey;
    margin: 0 auto;
    margin-top: 1rem;
  }
</style>
