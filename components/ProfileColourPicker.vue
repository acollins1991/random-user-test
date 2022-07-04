<template>
  <div>
    <input
      type="color"
      id="profileColour"
      name="profileColour"
      v-bind:value="state"
      ref="colourPicker"
      v-on:change="updateColour($refs.colourPicker.value)"
    />
    <label for="profileColour">Head</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState({
      state: (state) => state.colourPicker.value,
    }),
  },
  methods: {
    ...mapActions({
      updateColour: 'colourPicker/updateColour',
    }),
  },
})
</script>
