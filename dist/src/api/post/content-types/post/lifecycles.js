"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const vercelWebHook = (publishedAt) => {
    // Use an environment variable to protect webhook URL
    const webhookURL = process.env.VERCEL_WEBHOOK_URL;
<<<<<<< HEAD
=======
    // If publishedAt is not null or undefined; fires webhook on Vercel to redeploy
>>>>>>> 24eac84bcdc7689dc0da32e169a98caabb7d1ab5
    publishedAt ? axios_1.default.post(webhookURL) : null;
};
exports.default = {
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
<<<<<<< HEAD
        console.log(event.result);
=======
>>>>>>> 24eac84bcdc7689dc0da32e169a98caabb7d1ab5
        vercelWebHook(event.result.publishedAt);
    },
};
