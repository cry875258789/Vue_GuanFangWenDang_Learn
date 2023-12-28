<template>
  <div>
    <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)"/>
  </div>
</template>

<script>
export default {
  name: 'VModelCom',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
