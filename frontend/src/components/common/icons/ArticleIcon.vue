<template>
  <i :class = "`stroke-${props.color}`">
    <svg :width="props.width" :height="props.height" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.94573 3.10853H2.98794C2.46071 3.10853 1.95507 3.31797 1.58225 3.69078C1.20944 4.0636 1 4.56924 1 5.09647V19.0121C1 19.5393 1.20944 20.0449 1.58225 20.4177C1.95507 20.7906 2.46071 21 2.98794 21H16.9035C17.4308 21 17.9364 20.7906 18.3092 20.4177C18.682 20.0449 18.8915 19.5393 18.8915 19.0121V12.0543M17.4005 1.61757C17.7959 1.22215 18.3323 1 18.8915 1C19.4507 1 19.987 1.22215 20.3824 1.61757C20.7779 2.013 21 2.54931 21 3.10853C21 3.66775 20.7779 4.20406 20.3824 4.59949L10.9397 14.0422L6.96382 15.0362L7.95779 11.0603L17.4005 1.61757Z"
        stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </i>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'cocoa-600'
  },
  width: {
    type: String,
    default: '20'
  },
  height: {
    type: String,
    default: '20'
  }
})
</script>

<style scoped></style>
