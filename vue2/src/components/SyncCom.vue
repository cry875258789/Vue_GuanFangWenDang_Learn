<template>
  <div>
    {{ titsync }}
    <input type="text" @input="$emit('update:titsync', $event.target.value)"/>
  </div>
</template>

<script>
export default {
  name: 'SyncCom',
  props: {
    titsync: String,
  }
}
</script>
