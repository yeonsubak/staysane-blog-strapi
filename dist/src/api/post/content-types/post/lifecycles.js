"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const vercelWebHook = (publishedAt) => {
    // Use an environment variable to protect webhook URL
    const webhookURL = process.env.VERCEL_WEBHOOK_URL;
    // If publishedAt is not null or undefined; fires webhook on Vercel to redeploy
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
        vercelWebHook(event.result.publishedAt);
    },
};
