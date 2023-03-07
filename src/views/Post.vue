<template>
  <div class="All">
    <div class="box">
      <h2>{{ mainTitle }}</h2>
      <a href='https://github.com/mehranalam'><button type="button" name="button">فورک این محتوا در گیتهاب</button></a>
    </div>
    <img class="imgintro" :src="require(`../assets/Images/ContentImage/${MainImage}`)" alt="Main Blog Photo" height="300"
      width="620">
    <div class="boxify">
      <div class="intro">
        <i class="icon-bell"></i>
        <p>انتشار در : {{ publishedDay }}</p>
      </div>
      <div class="intro">
        <i class="icon-archive"></i>
        <p>دسته بندی : {{ categories }}</p>
      </div>
      <div class="intro">
        <i class="icon-edit"></i>
        <p>نویسنده : {{ Auther }}</p>
      </div>
    </div>
    <div class="content">
      <h3 id="5">{{ Title5 }}</h3>
      <p>{{ path }}</p>
      <img class="imgintro" :src="require(`../assets/Images/ContentImage/${MainImage}`)" alt="Main Blog Photo"
        height="300">
    </div>
  </div>
</template>

<script>

import json from "../ContentGenerator.json"


export default {
  data() {
    return {
      id: json[this.$route.params.id].id,
      categories: json[this.$route.params.id].categories,
      publishedDay: json[this.$route.params.id].publishedDay,
      Auther: json[this.$route.params.id].Auther,
      mainTitle: json[this.$route.params.id].mainTitle,
      Title1: json[this.$route.params.id].Title1,
      Title2: json[this.$route.params.id].Title2,
      Title3: json[this.$route.params.id].Title3,
      Title4: json[this.$route.params.id].Title4,
      Title5: json[this.$route.params.id].Title5,
      path: json[this.$route.params.id].path,
      MainImage: json[this.$route.params.id].MainImage,
      Imagesrc1: json[this.$route.params.id].Imagesrc1,
      Imagesrc2: json[this.$route.params.id].Imagesrc2,
    }
  },
  methods: {
    callback() {
      let id = this;
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
        id.path = this.responseText;
      }
      xhttp.open("GET", this.path);
      xhttp.send();
    }
  },
  mounted() {
    this.callback();
  }
  ,
  name: "ThePost",
  props: {
    url: String,
    IntroParagraph: String
  }
}
</script>

<style scoped>
.shooted {
  align-self: right;
  border-right: 3px solid #A0BCC2;
  margin: 5%;
}

.shooted ul {
  list-style-type: disc;
  list-style: circle;
}

li {
  display: block;
  color: var(--text-color);
  font-size: 18px;
  margin-right: 2%;
}

li:hover {
  color: #8c9fa3;
}

.All {
  display: flex;
  flex-direction: column;
}

.box {
  display: flex;
  justify-content: space-between;
  margin: 5%;
}

.intro {
  display: flex;
  justify-content: space-between;
}

.boxify {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  width: 620px;
  align-self: center;
  background-color: #d1c080;
  padding: 16px;
  border-radius: 13px;
}

button {
  margin: 0;
  border: none;
  border-radius: 7px;
  background-color: #d1c080;
  height: 40px;
  cursor: pointer;
  padding: 10px;
}

.imgintro {
  align-self: center;
  border-radius: 20px;
  margin-bottom: 4%;
}

.content {
  display: flex;
  margin-bottom: 4%;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
}

.content img {
  align-self: center;
  border-radius: 20px;
  margin-bottom: 4%;
  margin-top: 4%;
}
</style>
