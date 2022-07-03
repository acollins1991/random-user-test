<template>
  <div>
    <people-slider v-bind:people="people" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import PeopleSlider from './PeopleSlider.vue'
export default Vue.extend({
  components: { PeopleSlider },
  computed: {
    ...mapState({
      people: 'people',
    }),
  },
  methods: {
    ...mapActions({
      addPeople: 'people/addPeople',
    }),
  },
  // computed: {
  //   ...mapState({
  //     people: (state) => state.people,
  //   }),
  // },
  mounted() {
    this.addPeople(3)
  },
})
</script>
