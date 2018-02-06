<template lang='pug'>
div(v-if='$store.state.user')
  | Hello {{ $store.state.user.email }}!
  pre I am the secret content, I am shown only when the use is connected.
  p: i You can also refresh this page, you'll still be connected!
  a(href='/auth/logout') Logout

  p: nuxt-link(to='/secret') Super secret page
  p: nuxt-link(to='/about') /About
</template>
