module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e0ff9f5c9bc1becc759339b6de58d998'),
  },
});
