<template>
  <div>
    <ul>
      <li v-for="review in reviews" :key="`review_${review.id}`">
        {{ review.title }}
        {{ review.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Review',
  computed: {
    ...mapGetters(['reviews'])
  },
  methods: {
    ...mapActions(['fetchReviews'])
  },
  created() {
    this.fetchReviews()
  }
}
</script>