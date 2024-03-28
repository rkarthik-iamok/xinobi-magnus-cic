const config = {
  oidc: {
    clientId: process.env.CLIENT_ID,
    domain: process.env.DOMAIN,
    redirectUri: `${window.location.origin}`,
  },
};

export default config;
