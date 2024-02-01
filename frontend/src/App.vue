<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const POSTS_QUERY = gql`
  query posts {
    posts {
      id
      title
      body
      userId
    }
  }
`

const { result, loading, error } = useQuery(POSTS_QUERY);
</script>

<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <p v-else v-for="post in result.posts" :key="post.id">
    {{ post.title }}
  </p>
  <div></div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
