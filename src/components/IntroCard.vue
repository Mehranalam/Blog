<template>
  <div class="blog">
      <h1>وبلاگ</h1>
      <div class="box-holder">
        <img src="../assets/Images/white.jpg"
        alt="this is a photo" width="600" height="300">
        <div class="content">
          <div class="rowCAs">
            <i class="icon-checkmark"></i>
            <p>منتشر شده دراردیبهشت</p>
          </div>
          <h3>سلام دنیا</h3>
          <p>خوب خوب بلاخره این وبلاگ هم تموم شد و اولین پست رو به میزبانی گیت هاب عزیز منتشر میکنم به قول معروف سلام دنیا اما اما وبلاگ هنوز کامل کامل نیستو کلی از کاراش مونده پس طبیعیه تو بعضی جاها احساس بد کنید ...</p>
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
  display:inline-block;
  margin: 10%;
  /* margin-right: 5%; */
}

.box-holder {
  display: flex;
}

.box-holder img {
  border-radius: 16px;
}

.box-holder img:hover {
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
