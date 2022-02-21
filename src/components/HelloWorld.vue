<template>
  <div class="hello">
    <h1>Hello World</h1>
    {{ name }}--{{ todoListLength }}
  </div>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';

export default {
  name: 'HelloWorld',
  inject: ['name', 'todoListLength'],
  props: {
    user: {
      type: String,
      required: true
    }
  },
  data() {
    console.log('repositories', this.repositories);
    return {};
  },
  watch: {
    repositories(val, oldValue) {
      console.log('watch', val, oldValue);
    }
  },
  setup(props, context) {
    console.log(context.attrs.user);
    const  { user } = toRefs(props);
    console.log(user.value);
    let repositories = ref([]);
    onMounted(() =>{console.log('onMounted');repositories.value = [1, 2]});

    setTimeout(() => {
      repositories.value = ['a', 'b'];
    });
    return {
      repositories
    };
  },
  mounted() {
    console.log('mounted');
    const counter = ref(0);
    watch(counter, (val, oldVal) => {
      console.log('counter', val, oldVal);
    })
    counter.value = 3;
    console.log(counter.value)
  }
}
console.log('ee');
const refValue = ref(1);
setTimeout(() => {
  refValue.value = 6;
})
watch(refValue, (val) => {
  console.log('refValue', val);
})
console.log(refValue.value);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
