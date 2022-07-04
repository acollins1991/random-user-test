<template>
  <li class="people-slide">
    <div
      class="people-slide__inner"
      v-bind:style="{ backgroundColor: profileColour }"
    >
      <picture class="people-slide__thumbnail">
        <img
          v-bind:src="person.picture.large"
          v-bind:alt="`Profile picture for ${fullName}`"
          width="128"
          height="128"
          loading="lazy"
        />
      </picture>
      <div>{{ fullName }}</div>
      <div>{{ person.email }}</div>
      <div>{{ person.phone }}</div>
      <div>{{ location }}</div>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  props: {
    person: {
      type: Object,
      default: () => [],
    },
  },
  computed: {
    ...mapState({
      profileColour: (state) => state.colourPicker.value,
    }),
    fullName() {
      return `${this.person.name.title} ${this.person.name.first} ${this.person.name.last}`
    },
    location() {
      const { person } = this
      const { location } = person
      return `${location.street.number} ${location.street.name}, ${location.city}, ${location.country}, ${location.postcode}`
    },
  },
})
</script>
