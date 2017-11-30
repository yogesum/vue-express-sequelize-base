export default function ({ store, error }) {
  if (!store.state.user) {
    error({
      message: 'You are not connected',
      statusCode: 403,
    });
  }
}
