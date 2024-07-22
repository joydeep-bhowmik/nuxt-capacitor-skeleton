<template>
  <h1>Hello</h1>

  <ul>
    <li v-for="user in users">{{ user.first_name }} {{ user.last_name }}</li>
  </ul>
</template>
<script setup>
const { data, error } = await useAsyncData(() =>
  $http("https://reqres.in/api/users", {
    params: {
      page: 1,
    },
  })
);

const users = data.value.data;
</script>
