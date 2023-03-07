<template>
    <button><a href="http://localhost:8080/post/Jain">ادامه مطلب</a></button>
</template>

<script>
export default {
    name: 'theButton'
}
</script>

<style scoped>
button {
    border: none;
    margin-top: 20px;
    border-radius: 16px;
    background-color: #888d83;
    height: 40px;
    cursor: pointer;
}

button:hover {
    border: solid;
    border-color: #829b69;
    margin-top: 20px;
    background-color: var(--bg-color);
    color: #55682f;
    border-radius: 16px;
    height: 40px;
    cursor: pointer;
}
</style>
