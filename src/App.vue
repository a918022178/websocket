<template>
  <div id="app">
    <div v-for="(v, i) in arr" :key="i">{{v}}</div>
    <input type="text" v-model="a">
    <h1 @click="send">send</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      arr: [],
      a: '',
      ws: ''
    }
  },
  mounted () {
    let that = this
    console.log(WebSocket)
    this.ws = new WebSocket('ws://129.204.70.149:8888')
    console.log(this.ws)
    // this.ws.onopen = () => {
    //   this.ws.send('clear')
    // }
    this.ws.addEventListener('open', function () {
      console.log('23423423423423')
      console.log(that.a)
      that.ws.send(that.a)
    });
    this.ws.onmessage = (msg) => {
      console.log(msg)
      that.arr.push(msg.data)
    }
  },
  methods: {
    send () {
      this.ws.send(this.a)
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
