<template>
  <div>
    <profile-colour-picker />
    <template v-if="people">
      <people-slider v-bind:people="people" />
    </template>
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
  mounted() {
    this.addPeople(3)
  },
})
</script>
