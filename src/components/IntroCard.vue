<template>
  <div class="blog">
      <h1>وبلاگ</h1>
      <div class="box-holder">
        <img src="../assets/Images/white.jpg" 
        alt="this is a photo" width="600" height="300">
        <div class="content">
          <div class="rowCAs">
            <i class="icon-checkmark"></i>
            <p>ارسال شده در اردیبهشت 1400</p>
          </div>
          <h3>سلام دنیا</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
 name: 'theIntroCard'
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