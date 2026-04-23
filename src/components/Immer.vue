<script setup>
import { useImmer } from '../assets/immer';

const [items, setItems] = useImmer([
    { name: 'Item 1' ,done:true,difficulty: 'hard' },
    { name: 'Item 2' ,done:true,difficulty: 'simple'},
    { name: 'Item 3' ,done:true,difficulty: 'hard'}
]);
function change(index) {
    setItems(items => {
        items[index].done = !items[index].done;
    });

}

import { ref, computed } from 'vue'

const count = ref(1)

const alwaysSmall = computed({
  get(previous) {
    if (count.value <= 3) {
      return count.value
    }

    return previous
  },
  set(newValue) {
    count.value = newValue * 2
  }
})

console.log('第一次')
alwaysSmall.value = 1
console.log(alwaysSmall.value)
console.log(count.value)


console.log('第二次')
alwaysSmall.value = 2
console.log(alwaysSmall.value)
console.log(count.value)

</script>

<template>

<ul>
    <li v-for="({name,done,difficulty},index) in items" :key="index" :class="{ done ,color:difficulty==='hard'} "
        @click="change(index)">
        {{ name }}
    </li>
</ul>

</template>


<style>
.done {
  
  text-decoration: line-through;
}
.color {
  color: red;
}
</style>