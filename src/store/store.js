import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters:{
    evenOrOdd: state => state.counter % 2 === 0 ? 'четное число' : 'нечетное число'
  },
  mutations:{
    countPlus: (state) => {
      return state.counter +=1;
    },
    countMinus: (state) => {
      return state.counter -=1;
    }
  },
  actions:{
    countPlus: (context) => context.commit('countPlus'),
    countMinus: ({commit}) => commit('countMinus'),
    plusIfOdd: ({commit, state}) => {
      if ((state.counter + 1) % 2 === 0) {
        commit('countPlus');
      }
    },
    countPlusAsync: ({commit}) => {
      return new Promise((response, reject) => {
        setTimeout(() => {
          commit('countPlus');
          resolve();
        }, 1000);
      });
    },
    
  }
});