import axios from "axios";

const vercelWebHook = () => {
  axios.post(
    "https://api.vercel.com/v1/integrations/deploy/prj_bBvHt3dlBTxzgmXyF2x64FkWkau8/1MlLf95C5K"
  );
}


export default {
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
