<template>
  <div class="container">
    <h1>Please login to see the secret content</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p class="error" v-if="form.error">{{ form.error }}</p>
      <p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
      <p>Username: <input type="text" v-model="form.username" name="username" /></p>
      <p>Password: <input type="password" v-model="form.password" name="password" /></p>
      <button type="submit">Login</button>
    </form>
    <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button @click="logout">Logout</button>
    </div>
    <p><nuxt-link to="/secret">Super secret page</nuxt-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        error: null, username: '', password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        const { username, password } = this.form;
        await this.$store.dispatch('login', { username, password });

        this.form = { error: null, username: '', password: '' };
      } catch (e) {
        this.form.error = e.message;
      }
    },

    async logout() {
      try {
        await this.$store.dispatch('logout');
      } catch (e) {
        this.form.error = e.message;
      }
    },
  },
};
</script>

<style>
.container {
  padding: 100px;
}

.error {
  color: red;
}
</style>
