<template>
  <div>testing</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
  name: 'App',
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
