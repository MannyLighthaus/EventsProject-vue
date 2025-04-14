<script>
default {
  data: () => ({
    newCharacter: {
      name: ' ',
      element: [],
    },
    characterList: [
      { name: 'Aang', element: ['Air', 'Earth', 'Water', 'Fire'] },
      { name: 'Kitara', element: ['Water'] },
      { name: 'Zuko', element: ['Fire'] },
      { name: 'Toph', element: ['Earth'] },
    ],
    favoriteList: [],
  }),
  computed: {
    // getting the element statistics
    benderStatistics() {
      const elements = ['Air', 'Earth', 'Fire', 'Water']
      const statistics = {
        Air: 0,
        Earth: 0,
        Water: 0,
        Fire: 0,
      }

      this.characterList.forEach((character) => {
        elements.forEach((element) => {
          if (character.element.indexOf(element) > -1) {
            statistics[element] += 1
          }
        })
      })

      return statistics
    },
  },

  methods: {
    favoriteCharacter(character) {
      this.favoriteList.push(character)
    },
  },
}
</script>

<template>
  <h2>Statistics</h2>
  <ul>
    <!--key holds the property name while stat is the property value, bind the key as an id-->
    <li v-for="(stat, key) in benderStatistics" :id="key">{{ key }}: {{ stat }}</li>
  </ul>
  <hr />

  <ul>
    <li v-for="character in characterList">
      <p>{{ character.name }}</p>
      <button @click="favoriteCharacter(character)">⭐️ Favorite</button>
    </li>
  </ul>
  <hr />

  <h2>Favorite Characters</h2>
  <ul v-if="favoriteList.length > 0">
    <li v-for="character in favoriteList">{{ character.name }}</li>
  </ul>
  <p v-else>No favorite Characters yet!</p>

  <hr />

  <!-- <h2>New Characters</h2>
  <pre>{{ newCharacter }}</pre>

  <label for="character-name">Name</label>
  <input type="text" v-model="newCharacter.name" /> -->
</template>

<style>
h2 {
  background-color: brown;
}
body {
  background-color: gray;
}
button {
  background-color: burlywood;
  color: aqua;
  border-radius: 5px;
}
</style>
