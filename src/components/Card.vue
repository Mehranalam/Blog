<template>
   <div class="card">
      <div class="child">
        <img src="../assets/Images/white.jpg"
        alt="a littel photo" width="200" height="120">
        <div class="rowCAs">
            <i class="icon-checkmark"></i>
            <p>ارسال شده در 2/3/2022</p>
          </div>
        <h4>لورم ایپسوم متن ساختگی با تولید سادگی</h4>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <ButtonVue />
      </div>
      <div class="child">
        <img src="../assets/Images/white.jpg"
        alt="a littel photo" width="200" height="120">
        <div class="rowCAs">
            <i class="icon-checkmark"></i>
            <p>ارسال شده در 2/3/2022</p>
          </div>
        <h4>لورم ایپسوم متن ساختگی با تولید سادگی</h4>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <ButtonVue />
      </div>
      <div class="child">
        <img src="../assets/Images/white.jpg"
        alt="a littel photo" width="200" height="120">
        <div class="rowCAs">
            <i class="icon-checkmark"></i>
            <p>ارسال شده در 2/3/2022</p>
          </div>
        <h4>لورم ایپسوم متن ساختگی با تولید سادگی</h4>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <ButtonVue />
      </div>
    </div>
</template>

<script>
import ButtonVue from "./Button.vue"

export default {
    name: 'TheCard',
    components : {
      ButtonVue
    }
}
</script>

<style>
.card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 120px;
}

.child {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  width:200px ;
  margin-left: 3%;
  margin-bottom: 3%;
}

.child img {
  border-radius: 16px;
}

.child p {
  font-size: small;
}

.rowCAs {
  display: flex;
  flex-direction: row;
  margin-top: 3%;
}
</style>
