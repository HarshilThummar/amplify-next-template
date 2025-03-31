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
    ],
    'Demo3/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write'])
    ],
    'private_bucket/*': [
      allow.authenticated.to(['read']),
      allow.entity('identity').to(['read', 'write'])
    ],
    //'private/{entity_id}/*': [
    //  allow.entity('identity').to(['read', 'write', 'delete'])
    //]
  })
});