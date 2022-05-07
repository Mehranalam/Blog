<template>
   <div class="card">
      <div class="child">
        <img src="../assets/Images/white.jpg" 
        alt="a littel photo" width="200" height="120">
        <p class="pa">انتشار یافته در اردیبشهت 14001</p>
        <h4>لورم ایپسوم متن ساختگی با تولید سادگی</h4>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
      </div>
      <div class="child">
        <img src="../assets/Images/white.jpg" 
        alt="a littel photo" width="200" height="120">
        <p class="pa">انتشار یافته در اردیبشهت</p>
        <h4>لورم ایپسوم متن ساختگی با تولید سادگی</h4>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
      </div>
      <div class="child">
        <img src="../assets/Images/white.jpg" 
        alt="a littel photo" width="200" height="120">
        <p class="pa">انتشار یافته در اردیبشهت</p>
        <h4>لورم ایپسوم متن ساختگی با تولید سادگی</h4>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'TheCard'
}
</script>

<style>
.card {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.child {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  width:200px ;
  margin-left: 3%;
}

.child img {
  border-radius: 16px;
}

.child .pa {
    margin-top: 3%;
    font-size: smaller;
}
</style>