"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function vercelWebHook() {
    axios_1.default.post("https://api.vercel.com/v1/integrations/deploy/prj_bBvHt3dlBTxzgmXyF2x64FkWkau8/1MlLf95C5K");
}
function asdf() {
}
exports.default = {
    afterCreate(event) {
        vercelWebHook();
    },
    afterCreateMany(event) {
        vercelWebHook();
    },
    afterUpdate(event) {
        vercelWebHook();
    },
    afterDelete(event) {
        vercelWebHook();
    },
    afterDeleteMany(event) {
        vercelWebHook();
    },
};
