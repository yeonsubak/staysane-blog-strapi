import axios from "axios";

const vercelWebHook = (publishedAt: string | undefined | null) => {
  // Use an environment variable to protect webhook URL
  const webhookURL = process.env.VERCEL_WEBHOOK_URL;

  // If publishedAt is not null or undefined; fires webhook on Vercel to redeploy
  publishedAt ? axios.post(webhookURL) : null;
};

export default {
  afterCreate(event) {
    vercelWebHook(event.result.publishedAt);
  },

  afterCreateMany(event) {
    vercelWebHook(event.result.publishedAt);
  },

  afterUpdate(event) {
    vercelWebHook(event.result.publishedAt);
  },

  afterDelete(event) {
    vercelWebHook(event.result.publishedAt);
  },

  afterDeleteMany(event) {
    vercelWebHook(event.result.publishedAt);
  },
};
