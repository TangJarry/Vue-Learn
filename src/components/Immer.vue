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

const awesome = ref(true)

console.log('第一次')
alwaysSmall.value = 1
console.log(alwaysSmall.value)
console.log(count.value)


console.log('第二次')
alwaysSmall.value = 2
console.log(alwaysSmall.value)
console.log(count.value)

import TodoList from './Todo.vue'
const newTodoText = ref('')
const todos = ref([
  {
    id: 1,
    title: 'Do the dishes'
  },
  {
    id: 2,
    title: 'Take out the trash'
  },
  {
    id: 3,
    title: 'Mow the lawn'
  }
])

function AddTodo() {
  if (newTodoText.value.trim() === '') {
    return
  }

  todos.value.push({
    id: Date.now(),
    title: newTodoText.value
  })

  newTodoText.value = ''
}

function ModifyTodo(todos,index){
  if (newTodoText.value.trim() === '') {
    return
  }
  todos[index].title=newTodoText.value;
  newTodoText.value = '';
}

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

<button @click="awesome = !awesome">Toggle</button>
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
<p>-------------------------To Do List----------------------------</p>

<form @submit.prevent="AddTodo">
    <input v-model="newTodoText" id="newTodo" placeholder="请输入待办事项" />
    <button type="submit">添加</button>
</form>
<div v-for="(todo ,index) in todos" :key="todo.id">
    <TodoList :title="todo.title" :id="todo.id" @remove="todos.splice(index, 1)" @update="ModifyTodo(todos,index)"/>
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
