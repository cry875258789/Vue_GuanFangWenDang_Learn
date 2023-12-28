import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('BaseInput', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  render() {
    console.log('----this.$attrs-----', this.$attrs);

    return (
      <label>
        { this.label }
        <input
          // ! jsx中 v-bind=“$attrs” 如何转换? 若在自定义组件上透传，则不需要attrs字段: <ChildComponent { ...$attrs } />
          { ...{ attrs: this.$attrs } }
          value={this.value}
          // ! jsx中 v-on=“inputListeners” 如何转换?
          on={this.inputListeners}
        />
      </label>
    );
  }
});

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  bind(el, binding, vnode, oldVnode) {
    console.log('bind');

    console.log('bind-el', el);
    console.log('bind-binding', binding);
    console.log('bind-vnode', vnode);
    console.log('bind-oldVnode', oldVnode);
  },
  // 当被绑定的元素插入到 DOM 中时……
  inserted(el, binding, vnode, oldVnode) {
    console.log('inserted');
    el.focus();

    console.log('inserted-el', el);
    console.log('inserted-binding', binding);
    console.log('inserted-vnode', vnode);
    console.log('inserted-oldVnode', oldVnode);
  },
  update(el, binding, vnode, oldVnode) {
    console.log('update');

    console.log('update-el', el);
    console.log('update-binding', binding);
    console.log('update-vnode', vnode);
    console.log('update-oldVnode', oldVnode);
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    console.log('componentUpdated');

    console.log('componentUpdated-el', el);
    console.log('componentUpdated-binding', binding);
    console.log('componentUpdated-vnode', vnode);
    console.log('componentUpdated-oldVnode', oldVnode);
  },
  unbind(el, binding, vnode, oldVnode) {
    console.log('unbind');

    console.log('unbind-el', el);
    console.log('unbind-binding', binding);
    console.log('unbind-vnode', vnode);
    console.log('unbind-oldVnode', oldVnode);
  }
});

// 注册一个全局自定义指令 `v-demo`
Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
});

// 注册一个全局自定义指令 `v-pin`
Vue.directive('pin', {
  bind(el, binding) {
    el.style.position = 'fixed';
    el.style.color = 'pink';
    const direction = binding.arg || 'top';
    el.style[direction] = binding.value + 'px';
  }
});

// 函数简写 ---> 在很多时候，你可能想在 bind 和 update 时触发相同行为，而不关心其它的钩子。比如这样写：
Vue.directive('bg-color', (el, binding) => {
  el.style.backgroundColor = binding.value;
});

new Vue({
  render: h => h(App),
  data: {
    foo: 1
  },
  methods: {
    baz: function () { /* ... */ }
  }
}).$mount('#app')
