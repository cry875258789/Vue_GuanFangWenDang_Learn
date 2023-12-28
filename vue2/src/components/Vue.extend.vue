<template>
  <div id="vue-extend"></div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'VueExtend',
  mounted() {
    this.$nextTick(() => {
      this.mountProfile();
    });
  },
  methods: {
    mountProfile() {
      const Profile = Vue.extend({
        data() {
          return {
            firstName: 'Walter',
            lastName: 'White',
            alias: 'Heisenberg',
          };
        },
        render() {
          return (
            <p>{this.firstName} {this.lastName} aka {this.alias}</p>
          );
        },
      });
      new Profile().$mount('#vue-extend');
    }
  },
}
</script>
