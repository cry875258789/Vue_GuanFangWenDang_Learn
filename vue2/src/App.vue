<template>
  <div id="app">
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :promisePropType="promisePropType"
      dataTick="data-tick"
      customProp="custom-prop"
      class="HelloWorld"
      @click.native="clickHelloWorld"
      @customEvent="customEvent"
      @customHello="customHello"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      promisePropType: Promise.resolve(),
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    clickHelloWorld() {
      console.log('clickHelloWorld');
    },
    customEvent() {},
    customHello() {},
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
