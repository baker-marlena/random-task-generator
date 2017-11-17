<template>
  <div id="app">
    <TheInstructions></TheInstructions>
    <TheRollButton :clickMethod="getRollText"></TheRollButton>
    <TheStepField :newText="rollText"></TheStepField>
  </div>
</template>

<script>
import TheInstructions from './components/TheInstructions'
import TheRollButton from './components/TheRollButton'
import TheStepField from './components/TheStepField'
import {teamMember, taskText} from './assets/step-parts'

export default {
  name: 'app',
  components: {
    TheStepField,
    TheInstructions,
    TheRollButton
  },
  data () {
    return {
      rollText: ''
    }
  },
  methods: {
    getRollText () {
      this.rollText = this.getRandomText(teamMember) + this.getRandomText(taskText)
    },
    getRandomText (array) {
      let randomIndex = Math.floor(Math.random() * array.length)
      let arrayText = array[randomIndex]
      if (!arrayText.ending) {
        return arrayText.text
      }
      let endingIndex = Math.floor(Math.random() * arrayText.ending.length)
      return arrayText.text + arrayText.ending[endingIndex]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
