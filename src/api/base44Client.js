import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68acd1756a0f65e4cc375844", 
  requiresAuth: true // Ensure authentication is required for all operations
});
