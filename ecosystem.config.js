module.export = ({ env }) => ({
  apps: [
    {
      name: "staysane-blog-strapi",
      cwd: env("CWD"),
      script: "yarn",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: env("DATABASE_HOST"),
        DATABASE_PORT: env("DATABASE_PORT"),
        DATABASE_NAME: env("DATABASE_NAME"),
        DATABASE_USERNAME: env("DATABASE_USERNAME"),
        DATABASE_PASSWORD: env("DATABASE_PASSWORD"),
        AWS_ACCESS_KEY_ID: env("AWS_ACCESS_KEY_ID"),
        AWS_ACCESS_SECRET: env("AWS_ACCESS_SECRET"),
        AWS_REGION: env("AWS_REGION"),
        AWS_BUCKET_NAME: env("AWS_BUCKET_NAME"),
      },
    },
  ],
});
