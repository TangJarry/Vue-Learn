<script setup>
defineProps(['title'])
defineEmits(['remove', 'update'])
</script>

<template>
    <li class="todo">
        <h3>{{ title }}</h3>
        <button @click="$emit('remove')">删除</button>
        <button @click="$emit('update')">更新</button>
    </li>
</template>