<template>
  <div class="people-slider">
    <ul class="people-slider__inner">
      <!-- ID is sometimes null so key constructed from props that should ensure uniqueness -->
      <people-slide
        v-for="person in people"
        v-bind:key="`${person.phone}-${person.email}`"
        v-bind:person="person"
      />
    </ul>
    <button ref="prev">Previous</button>
    <button ref="next">Next</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'PeopleSlider',
  props: {
    people: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    pagination() {
      return {
        current: 1,
        totalPeopleLoaded: 3,
        totalPages: 1,
      }
    },
  },
  mounted() {
    const nextButton: any = this.$refs.next
    nextButton.addEventListener('click', () => {
      this.addPeople(3)
    })
  },
  methods: {
    ...mapActions({
      addPeople: 'people/addPeople',
    }),
  },
})
</script>
