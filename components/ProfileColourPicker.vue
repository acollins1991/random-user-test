<template>
  <div class="profile-colour-picker">
    <input
      type="color"
      id="profileColour"
      name="profileColour"
      v-bind:value="getColour"
      ref="colourPicker"
      v-on:change="updateColour($refs.colourPicker.value)"
    />
    <label for="profileColour">Profile Colour</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters({
      getColour: 'colourPicker/getColour',
    }),
  },
  methods: {
    ...mapActions({
      updateColour: 'colourPicker/updateColour',
    }),
  },
})
</script>
