<template>
  <div class="hello">
    {{ fullName }}
    <hr />

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email">
    </template>

    <button @click="toggleLoginType">toggle</button>
    <hr />

    <div v-on:scroll.passive="onScroll" class="scroll-wrapper">
      <div style="height: 2000px;;">222</div>
    </div>
    <hr />

    <input type="text" v-model.lazy="inVal" @input="onInput" @change="onInChange" />
    <hr />

    <div :style="{'font-size': fontSiz + 'px'}">font-size</div>
    <Son @enlarge-text="fontSiz += $event"></Son>
    <hr />
    
    <span>全局组件BaseInput</span>
    <BaseInput
      v-model="baseInputVal"
      type="password"
      @focus="baseInputFous"
      @blur="baseInputBlur"
    ></BaseInput>
    <hr />

    <SyncCom :titsync.sync="titsyncValue"></SyncCom>
    <hr />

    <input v-focus type="text" v-model="directiveInValue" />
    <div id="hook-arguments-example" v-demo:foo.a.b="'hello'"></div>
    <p v-pin="300">Stick me 300px from the top of the page</p>
    <p v-pin:left="300">Stick me 300px from the left of the page</p>
    <p v-pin:right="300">Stick me 300px from the right of the page</p>
    <p v-pin:bottom="300">Stick me 300px from the bottom of the page</p>
    <div v-bg-color="'red'">v-bg-color</div>
    <hr />

    <VueExtend></VueExtend>
    <hr />

    <FunctionCom :items="[{ name: 'z', age: 18 }]" is-ordered data-type="functional"></FunctionCom>
    <hr />

    <VModelCom v-model="vModelComValue"></VModelCom>
  </div>
</template>

<script>
import Son from './Son.vue';
import SyncCom from './SyncCom.vue';
import VueExtend from './Vue.extend.vue';
import FunctionCom from './FunctionCom.vue';
import VModelCom from './V-ModelCom';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    promisePropType: Promise,
  },
  components: {
    Son,
    SyncCom,
    VueExtend,
    FunctionCom,
    VModelCom,
  },
  data() {
    console.log("$attrs**************", this.$attrs);
    console.log("$props**************", this.$props);
    console.log('$listeners**************', this.$listeners);
    console.log("$root**************", this.$root);

    return {
      firstName: 'Foo',
      lastName: 'Bar',
      // -----------------
      loginType: 'username',
      inVal: '',
      fontSiz: 12,
      baseInputVal: '',
      titsyncValue: 'syncInit',
      directiveInValue: '',
      vModelComValue: true,
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newVal) {
        const [firstName, lastName] = newVal.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.fullName = 'TT YY';
    }, 3000);

    this.$once('hook:beforeDestroy', () => {
      console.log('beforeDestroy');
    });

    setTimeout(() => {
      this.vModelComValue = false;
    }, 5000);
  },
  methods: {
    toggleLoginType() {
      this.loginType = this.loginType === 'username' ? 'email' : 'username';
    },
    onScroll() {
      console.log('onScroll');
    },
    onInput() {
      console.log('oninput');
    },
    onInChange() {
      console.log('onchange');
    },
    baseInputFous() {
      console.log('****baseInputFous****');
    },
    baseInputBlur() {
      console.log('****baseInputBlur****');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.scroll-wrapper{
  height: 300px;
  overflow: auto;
  background-color: #EEE;
}
</style>
