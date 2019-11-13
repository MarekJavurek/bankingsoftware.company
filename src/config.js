const local = {
  endpoint: "https://private-anon-ec4c0aaae1-note10.apiary-mock.com"
};

const env = process.env.REACT_APP_ENV;
let envConfig;
if (env === "local") {
  envConfig = local;
} else {
  throw Error(`Unknown environment: ${env}`);
}

export default {
  ...envConfig
};
