<template>
  <div class="All">
    <div class="box">
      <h2>{{mainTitle}}</h2>
      <a href='https://github.com/mehranalam'><button type="button" name="button">فورک این محتوا در گیتهاب</button></a>
    </div>
    <img class="imgintro" :src="require(`../assets/Images/ContentImage/${MainImage}`)" alt="Main Blog Photo" height="300" width="620">
    <div class="boxify">
      <div class="intro">
        <i class="icon-bell"></i>
        <p>انتشار در : {{publishedDay}}</p>
      </div>
      <div class="intro">
        <i class="icon-archive"></i>
        <p>دسته بندی : {{categories}}</p>
      </div>
      <div class="intro">
        <i class="icon-edit"></i>
        <p>نویسنده : {{Auther}}</p>
      </div>
    </div>
    <div class="shooted">
      <ol>
        <a href="#1"><li>{{Title1}}</li></a>
        <a href="#2"><li>{{Title2}}</li></a>
        <a href="#3"><li>{{Title3}}</li></a>
        <a href="#4"><li>{{Title4}}</li></a>
        <a href="#5"><li>{{Title5}}</li></a>
      </ol>
    </div>

    <div class="content">
      <h3 id="1">{{Title1}}</h3>
      <p v-for="paragraph in letter1" :key="paragraph">
        {{paragraph}}
      </p>
      <img :src="require(`../assets/Images/ContentImage/${Imagesrc1}`)" alt="Main Blog Photo" height="300" width="620">
      <h3 id="2">{{Title2}}</h3>
      <p v-for="paragraph in letter2" :key="paragraph">
        {{paragraph}}
      </p>
    </div>

    <div class="content">
      <h3 id="3">{{Title3}}</h3>
      <p v-for="paragraph in letter3" :key="paragraph">
        {{paragraph}}
      </p>
      <img :src="require(`../assets/Images/ContentImage/${Imagesrc2}`)" alt="Main Blog" height="300" width="620">
      <h3 id="4">{{Title4}}</h3>
      <p v-for="paragraph in letter4" :key="paragraph">
        {{paragraph}}
      </p>
    </div>

    <div class="content">
      <h3 id="5">{{Title5}}</h3>
      <p v-for="paragraph in letter5" :key="paragraph">
        {{paragraph}}
      </p>
    </div>
  </div>
</template>

<script>

import json from "../ContentGenerator.json"
// import Content
import {D2022P05ContentParaghraph1,
D2022P05ContentParaghraph2,
D2022P05ContentParaghraph3,
D2022P05ContentParaghraph4,
D2022P05ContentParaghraph5} from '../ContentHandel.js'


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
      letter1: D2022P05ContentParaghraph1.split("\n\n"),
      letter2: D2022P05ContentParaghraph2.split("\n\n"),
      letter3: D2022P05ContentParaghraph3.split("\n\n"),
      letter4: D2022P05ContentParaghraph4.split("\n\n"),
      letter5: D2022P05ContentParaghraph5.split("\n\n"),
      MainImage: json[this.$route.params.id].MainImage,
      Imagesrc1: json[this.$route.params.id].Imagesrc1,
      Imagesrc2: json[this.$route.params.id].Imagesrc2,
    }
  }
  ,
  name : "ThePost",
  props: {
    url : String,
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

li{
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
  background-color: #c7c0a5;
  padding: 16px;
  border-radius: 13px;
}

button {
  margin: 0;
  border: none;
  border-radius: 7px;
  background-color: #c7c0a5;
  height: 40px;
  color: rgb(58, 55, 55);
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
