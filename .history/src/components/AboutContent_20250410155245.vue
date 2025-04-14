<script setup></script>
<template>
  <div class="about-wrapper">
    <div class="about-hero">
      <div class="about-hero_header">
        <h1>
          <strong> More than ticketing. Tix is the secret sauce <br />for the best events.</strong>
        </h1>
        <p>
          From seamless ticketing to powerful promotion and management tools, whether you're hosting
          a concert, a conference, a workshop, or a sporting event Tix is your partner every step of
          the way. Artists can showcase their work, promoters can connect with audiences, venues can
          streamline operations, and fans can find and buy tickets easily. It's all possible on Tix.
        </p>
      </div>

      <img src="../assets/images/party 2.jpeg" alt="About-Events" />
    </div>
    <div>
    <div class="why">
      <div>
        <h4>Why Tix?</h4>
        <p>
          We built Tix because fans deserve better - too many barriers stand between you and the
          events you love. Long lines, hidden fees, and clunky experiences can take the magic out of
          live events.
        </p>
      </div>
    </div>
  </div>
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
