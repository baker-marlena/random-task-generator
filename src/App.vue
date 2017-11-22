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
    async getRollText () {
      let person = await this.getRandomText(teamMember)
      this.rollText = person.text + this.getRandomText(taskText, person.restrictedTask).text
    },
    getRandomText (array, isRestricted) {
      let filteredArray = array
      if (isRestricted) {
        filteredArray = array.filter(task => !task.restricted)
      }
      let randomIndex = Math.floor(Math.random() * filteredArray.length)
      let arrayText = filteredArray[randomIndex]
      if (arrayText.restrictedTask) {
        return arrayText
      }
      if (!arrayText.ending) {
        return arrayText
      }
      let endingIndex = Math.floor(Math.random() * arrayText.ending.length)
      return {text: arrayText.text + arrayText.ending[endingIndex]}
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
