<template>
  <div class="people-slider">
    <ul
      class="people-slider__inner"
      ref="slider"
      v-bind:style="{ left: leftPosition }"
    >
      <!-- ID is sometimes null so key constructed from props that should ensure uniqueness -->
      <people-slide
        v-for="person in people"
        v-bind:key="`${person.phone}-${person.email}`"
        v-bind:person="person"
        class="js-slide"
      />
    </ul>
    <div class="people-slider__pagination-wrapper">
      <button
        class="people-slider__pagination-button"
        v-bind:disabled="currentPage === 1"
        v-on:click="moveToPrevPage()"
      >
        <pagination-button-icon direction="prev" />
      </button>
      <button
        class="people-slider__pagination-button"
        v-on:click="moveToNextPage()"
      >
        <pagination-button-icon direction="next" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import PaginationButton from './PaginationButtonIcon.vue'
export default Vue.extend({
  components: { PaginationButton },
  name: 'PeopleSlider',
  props: {
    people: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sliderInitialised: {
        type: Boolean,
        default: false,
      },
      currentPage: 1,
      pages: {
        1: {
          loaded: true,
        },
      },
      slideWidth: {
        type: Number,
        default: 0,
      },
      slidesToShow: {
        type: Number,
        default: 1,
      },
    }
  },
  computed: {
    leftPosition() {
      return this.currentPage === 1
        ? 0
        : `-${this.slideWidth * this.slidesToShow * (this.currentPage - 1)}px`
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.updateSlidesToShow()
      this.updateSlideWidth()
    })
  },
  updated() {
    if (!this.sliderInitialised.default || !this.sliderInitialised) {
      this.initSlider()
    }
  },
  methods: {
    ...mapActions({
      addPeople: 'people/addPeople',
    }),
    initSlider() {
      this.sliderInitialised = true
      this.updateSlidesToShow()
      this.updateSlideWidth()
    },
    loadNextPage() {
      this.addPeople(3)
    },
    moveToNextPage() {
      if (!this.pages[this.currentPage + 1]) {
        this.loadNextPage()
        this.pages[this.currentPage + 1] = { loaded: true }
      }
      this.currentPage = this.currentPage + 1
    },
    moveToPrevPage() {
      this.currentPage = this.currentPage - 1
    },
    updateSlideWidth() {
      const slider: any = this.$refs.slider
      const firstSlide = slider.querySelector('.js-slide')
      this.slideWidth = firstSlide.offsetWidth
    },
    updateSlidesToShow() {
      let slidesToShow = 3
      if (window.innerWidth < 520) {
        slidesToShow = 1
      } else if (window.innerWidth < 760) {
        slidesToShow = 2
      }
      this.slidesToShow = slidesToShow
    },
  },
})
</script>
