<template>
  <theIntroCard />
  <h2>پروژه ها</h2>
  <div class="setting" align="center">
    <div class="shimmerJ">
      <div class="flexi" align="right">
        <p>یک کتابخانه ارسال ریکويست در قالب HTTP با استفاده از Curl</p>
        <a href="https://github.com/Mehranalam/HTTP-Communication"><button class="TheButton">جزییات پروژه</button></a>
      </div>
    </div>
    <div class="shimmerJ">
      <div class="flexi" align="right">
        <p>باردیال - یک پلتفرم فروشگاهی اندروید توسعه داده شده با جاوا</p>
        <a href="https://github.com/Mehranalam/Bardeal"><button class="TheButton">جزییات پروژه</button></a>
      </div>
    </div>
    <div class="shimmerJ">
      <div class="flexi" align="right">
        <p>حفاظت از حساب شخصی تلگرام توسط یک سلف بات</p>
        <a href="https://github.com/Mehranalam/guard"><button class="TheButton">جزییات پروژه</button></a>
      </div>
    </div>
  </div>
  <div class="setting" align="center">
    <div class="shimmerJ">
      <div class="flexi" align="right">
        <p>سرویس کوتاه کننده لینک - بنیاد نرم افزار آزاد دیسترو</p>
        <a href="https://github.com/distro-ir/disshort"><button class="TheButton">جزییات پروژه</button></a>
      </div>
    </div>
    <div class="shimmerJ">
      <div class="flexi" align="right">
        <p>کپتچا بات ایموجی - حفاظت از گروه های تلگرامی</p>
        <a href="https://github.com/Mehranalam/Emoji"><button class="TheButton">جزییات پروژه</button></a>
      </div>
    </div>
    <div class="shimmerJ">
      <div class="flexi" align="right">
        <p>داکیومنت بسته نرم افزاری STLonic</p>
        <a href="https://github.com/Mehranalam/STLonic"><button class="TheButton">جزییات پروژه</button></a>
      </div>
    </div>
  </div>
</template>

<script>
import theIntroCard from '../components/IntroCard.vue'

export default {
  name: 'HomeView',
  components: {
    theIntroCard,
  }
}
</script>

<style>
.shimmerJ {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 4px solid white;
  background-color: white;
  border-radius: 16px;
  width: 400px;
  height: 320px;
  padding: 20px;
  margin: 10px;
}

.shimmerJ .flexi {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
}

.shimmerJ .flexi img {
  border-radius: 50%;
}

.shimmerJ .flexi p {
  margin: 20px;
  margin-top: 30px;
}

.setting {
  display: flex;
  flex-direction: row;
}

.h2 {
  margin: 10px;
}

.TheButton {
  padding: 10px;
  margin-top: 50px;
}
</style>