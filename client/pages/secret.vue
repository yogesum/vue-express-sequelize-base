<template>
  <div>
    <h1>Super secret page</h1>
    <router-link to="/">Back to the home page</router-link>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  fetch({ store, redirect }) {
    if (!store.state.authUser) redirect('/');
  },
};
</script>
