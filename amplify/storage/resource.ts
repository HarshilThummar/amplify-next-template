import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'myS3Bucket',
  access: (allow) => ({
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete'])
    ],
    'Demo1/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete'])
    ],
    'Demo2/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read'])
    ]
    //'private/{entity_id}/*': [
    //  allow.entity('identity').to(['read', 'write', 'delete'])
    //]
  })
});