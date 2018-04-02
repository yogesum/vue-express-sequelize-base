<template lang='pug'>
el-row(:gutter='20')
  el-col(:xs='{span:16, offset:4}' :sm='{span:8, offset:8}' :md='{span:6, offset:9}')
    h1 Please login to see the secret content
    p.error(v-if="form.error") {{ form.error }}
    p: i
      span To login, use
      b  yogesum@gmail.com
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
</template>

<script>
export default {
  data() {
    return {
      form: { error: '', email: 'yogesum@gmail.com', password: 'SuperAdmin' },
    }
  },
}
</script>
