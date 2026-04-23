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
const Fruits = ref(['西瓜', '香蕉', '苹果']);

import { ref, computed } from 'vue'

const count = ref(1)

const isChecked = ref([])


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
    <li v-for="({name,done,difficulty},index) in items" :key="index" :class="{ done ,colorhard:!done&&difficulty==='hard',colorsimple:!done&&difficulty==='simple'} "
        @click="change(index)">
        {{ name }}
    </li>
</ul>

<label v-for="(fruit, index) in Fruits" :key="index">
    <input type="checkbox" :value="fruit" v-model="isChecked" />
    <span :class="{ activate: isChecked.includes(fruit) }">{{ fruit }}</span>
</label>
<div>
  <span>你选择了如下水果：</span>
  <span v-for="fruit in isChecked" :key="fruit" class="fruit">{{ fruit }}</span>
</div>

</template>


<style>
.done {
  color: black;
  text-decoration: line-through;
}
.colorhard {
  color: red;
}
.colorsimple {
  color: green;
}
.activate {
  color: red;
}
.fruit {
  margin-right: 12px;
}
</style>
