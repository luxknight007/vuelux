import Vue from 'vue';
import utils from '../../utils'
import vlNotifications from './index.vue'

const NotiConstructor = Vue.extend(vlNotifications);


let instance;

export default {name:'notify',vlfunction(parameters){
  if(parameters.fullWidth){
    if(parameters.position) {
      parameters.position = parameters.position.replace('right','left')
    }
  }


  instance = new NotiConstructor({
    data: parameters,
  });
  instance.vm = instance.$mount();
  parameters.click?instance.vm.$on('click',parameters.click):null
  utils.insertBody(instance.vm.$el);
}
}
