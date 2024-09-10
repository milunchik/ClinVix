import { TNavLink } from "../../types";

export const userRoutes = {
  registration: {
    path: "/registration",
    label: "Registration",
  },
};

const { registration } = userRoutes;
export const userLinks: TNavLink[] = [registration];
