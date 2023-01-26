# Here a lib folder with a octaConfig.ts file is needed

```
export const oktaConfig = {
    clientId: '<your client id>',
    issuer: '<your okta issuer',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}
```
