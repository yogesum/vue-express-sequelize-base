<template lang='pug'>
.container
  //- <!-- <form v-if="!$store.state.user" @submit.prevent="login"> -->
  form(v-if='!$store.state.user' action='/auth/local' method='post')
    h1 Please login to see the secret content
    p.error(v-if="form.error") {{ form.error }}
    p: i
      | To login, use
      b yogesum@gmail.com
      |  as email and
      b  SuperAdmin
      | as password.
    p
      | Email:
      input(type="email" v-model="form.email" name="email")
    p
      | Password:
      input(type="password" v-model="form.password" name="password")
    button(type="submit") Login
  div(v-else)
    | Hello {{ $store.state.user.email }}!
    pre I am the secret content, I am shown only when the use is connected.
    p: i You can also refresh this page, you'll still be connected!
    button(@click='$store.dispatch("logout")') Logout

  p: nuxt-link(to='/secret') Super secret page
</template>

<script>
export default {
  data() {
    return {
      form: {
        error: null, email: 'yogesum@gmail.com', password: 'SuperAdmin',
      },
    };
  },
  methods: {
    async login() {
      try {
        const { email, password } = this.form;
        await this.$store.dispatch('login', { email, password });

        this.form = { error: null, email: 'yogesum@gmail.com', password: 'SuperAdmin' };
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
