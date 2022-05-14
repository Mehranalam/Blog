<template>
  <button>ادامه مطلب</button>
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
    background-color: #d5dcce;
    height: 40px;
    cursor: pointer;
}

button:hover {
    border: solid;
    border-color: #d5dcce;
    margin-top: 20px;
    background-color: var(--bg-color);
    color: #a4a5a2;
    border-radius: 16px;
    height: 40px;
    cursor: pointer;
}
</style>
