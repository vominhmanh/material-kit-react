export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/events/dashboard',
    account: '/events/dashboard/account',
    customers: '/events/dashboard/customers',
    integrations: '/events/dashboard/integrations',
    settings: '/events/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
