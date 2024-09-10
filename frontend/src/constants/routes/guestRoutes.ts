export const guestRoutes = {
  signIn: {
    path: "/sign-in",
    label: "Sign In",
  },
  signUp: {
    path: "/sign-up",
    label: "Sign Up",
  },
};

const { signIn, signUp } = guestRoutes;
export const guestLinks = [signIn, signUp];
