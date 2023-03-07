<template>
  <div class="blog">
    <div class="box-holder">
      <a href="http://localhost:8080/post/Jain"><img class="l" src="../assets/Images/white.jpg" alt="this is a photo" width="500" height="300"></a>
      <div class="content">
        <div class="rowCAs">
          <i class="icon-checkmark"></i>
          <p>منتشر شده دراردیبهشت</p>
        </div>
        <h3>الگوریتم توسعه این وب‌سایت</h3>
        <p>تعریف کلی از نحوه تولید و توسعه این وب‌سایت با استفاده از فریمورک vue.js , پایتون و github Action ...</p>
        <ButtonVue />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from "./Button.vue"


export default {
  name: 'theIntroCard',
  components: {
    ButtonVue
  }
}
</script>

<style>
.blog {
  display: inline-block;
  margin: 10%;
  /* margin-right: 5%; */
}

.box-holder {
  display: flex;
}

.box-holder .l {
  border-radius: 16px;
}

.box-holder .l:hover {
  cursor: pointer;
}

.content {
  display: flex;
  flex-direction: column;
  margin-right: 4%;
}

.content p {
  font-size: smaller;
}

.rowCAs {
  display: flex;
  flex-direction: row;
}
</style>
