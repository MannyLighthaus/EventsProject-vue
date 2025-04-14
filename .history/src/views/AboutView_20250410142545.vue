<script>
import AboutContent from '@/components/AboutContent.vue'
</script>

<template>
  <AboutContent />
</template>

<style scoped>
.about-wrapper {
  padding: 20px;
  background-color: white;
}
.about-hero {
  display: flex;
  flex-direction: column;
  gap: 72px;
}
p {
  font-size: 18px;
}
.about-hero_header {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: start;
}
img {
  max-width: 100%;
}
.why {
  background-color: red;

  border-radius: 8px;
  padding: 20px;
  margin-top: 20%;
}

.why h4 {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}
.why p,
h4 {
  margin: 0;
  text-align: start;
}
.about-hero_header,
h1 {
  color: black;
  font-size: 30px;
  line-height: 38px;
}

.about-hero_header,
p {
  color: black;
  font-size: 16px;
  line-height: 24px;
}
</style>
