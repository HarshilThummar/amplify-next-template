// import { defineAuth } from "@aws-amplify/backend";

// /**
//  * Define and configure your auth resource
//  * @see https://docs.amplify.aws/gen2/build-a-backend/auth
//  */
// export const auth = defineAuth({
//   loginWith: {
//     email: true,
//   },
// });

import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: process.env.REACT_APP_MY_USER_POOL_ID as string,
  identityPoolId: process.env.REACT_APP_MY_IDENTITY_POOL_ID as string,
  authRoleArn: process.env.REACT_APP_MY_AUTH_ROLE_ARN as string,
  unauthRoleArn: process.env.REACT_APP_MY_UNAUTH_ROLE_ARN as string,
  userPoolClientId: process.env.REACT_APP_MY_USER_POOL_CLIENT_ID as string,
});