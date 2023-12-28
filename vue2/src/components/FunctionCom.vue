<script>
export default {
  name: 'FunctionCom',
  functional: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    isOrdered: Boolean
  },
  render(h, context) {
    console.log('context', context);
    return h('div', null, 'function-com');
  }
}
</script>
