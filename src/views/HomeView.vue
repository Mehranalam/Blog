<template>
    <theIntroCard />
    <theCard />
    <theCard />
    <theCard />
</template>

<script>
import theIntroCard from '../components/IntroCard.vue'
import theCard from '../components/Card.vue'

export default {
  name: 'HomeView',
  components: {
    theIntroCard,
    theCard,
  }
}
</script>
