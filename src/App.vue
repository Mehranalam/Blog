<template> 
  <div class="holder">
    <div class="diva">
      <h2>مهران علم بیگی</h2>
      <ul>
        <li> رزومه</li>
        <li> پروژه ها</li>
        <li> درخواست پروژه</li>
        <li> تیکه کد</li>
      </ul>
    </div>

    <theIntroCard />
    <theCard />
    <theCard />
    <theCard />
    <theFooter />

  </div>
</template>

<script>
import theIntroCard from './components/IntroCard.vue'
import theCard from './components/Card.vue'
import theFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    theIntroCard,
    theCard,
    theFooter
  }
}
</script>

<style>
.diva {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3%;
}

ul li {
  font-family:'IRANYekanMedium' ,Arial, Helvetica, sans-serif;
  display: inline;
  margin: 9px;
}

ul li:hover {
  color: #A0BCC2;
  cursor: pointer;
}

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

.card {
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
  justify-content: center;
}

.child {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 5%;
  width: 200px;
  margin: 3%;
}

.card img {
  border-radius: 16px;
}
</style>
