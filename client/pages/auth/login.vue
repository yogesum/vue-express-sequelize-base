<template lang="pug">
section
  button.button.is-primary.is-medium(@click='open = true') Launch component modal
    b-modal(:active.sync='open' has-modal-card): modal-form(v-bind='formProps')
</template>

<script>
import ModalForm from '~/components/ModalForm';

export default {
  components: { ModalForm },
  data() {
    return {
      open: true,
      formProps: {
        email: 'yogesum@gmail.com',
        password: 'SuperAdmin',
      },
    };
  },
};
</script>
