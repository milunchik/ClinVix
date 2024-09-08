import { TNavLink } from "../../types";

export const userRoutes = {
  home: {
    path: "/",
  },
  about: {
    path: "/about",
    label: "About Us",
  },
  tips: {
    path: "/tips",
    label: "Tips",
  },
  registration: {
    path: "/registration",
    label: "Registration",
  },
  team: {
    path: "/team",
    label: "Specialists",
  },
  departments: {
    path: "/departments",
    label: "Departments",
  },
  teamMember: {
    path: "/team/:memberId",
  },
};

const { about, tips, registration, team, departments } = userRoutes;
export const userLinks: TNavLink[] = [
  about,
  tips,
  registration,
  team,
  departments,
];
