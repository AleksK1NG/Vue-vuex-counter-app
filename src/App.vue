<template>
  <div id="app">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-12">
          <img src="./assets/logo.png">
    <h1> Counter: {{this.$store.state.counter}} </h1>
    <h2> Counter is {{evenOrOdd}} </h2>
    <button class="btn btn-success" @click="countPlus">+</button>
    <button class="btn btn-danger" @click="countMinus">-</button>
    <button class="btn" @click="plusIfOdd">Прибавить если число нечетное</button>
    <button class="btn" @click="countPlusAsync">Plus async</button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
    import {
        mapActions,
        mapGetters,
        mapMutations
    } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'evenOrOdd'
            ])
        },
        methods: {
            ...mapActions([
                'countPlus',
                'countMinus',
                'plusIfOdd',
                'countPlusAsync'
            ]),
            ...mapMutations([
                'countPlus',
                'countMinus'
            ])
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