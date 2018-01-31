<template lang='pug'>
el-row(:gutter='20' v-if='!$store.state.user')
  el-col(:xs='{span:16, offset:4}' :sm='{span:8, offset:8}' :md='{span:6, offset:9}')
    h1 Please login to see the secret content
    p.error(v-if="form.error") {{ form.error }}
    p: i
      span To login, use
      b yogesum@gmail.com
      span  as email and
      b  SuperAdmin
      span  as password.
    el-form(
      action='/auth/local'
      method='post'
      status-icon
      label-width='60px')

      el-form-item(label='Email' prop='email')
        el-input(
          name='email'
          type='email'
          v-model='form.email'
          auto-complete='off')

      el-form-item(label='Password' prop='password')
        el-input(
          name='password'
          type='password'
          v-model='form.password'
          auto-complete='off')

      el-form-item
        el-button(type='primary' native-type='submit') Login

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
