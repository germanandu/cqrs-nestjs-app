export default () => {
  const config = {
    PORT: process.env.NODE_PORT,
    ENV: process.env.NODE_ENV,
    RabbitOptions: {
      host: process.env.RABBITMQ_HOST,
      secret: process.env.RABBITMQ_SECRET_MANAGER,
    },
  };
  return config;
};
