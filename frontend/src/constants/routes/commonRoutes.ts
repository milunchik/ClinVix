import { TNavLink } from "../../types";

export const commonRoutes = {
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

const { about, departments, team, tips } = commonRoutes;
export const commonLinks: TNavLink[] = [about, departments, team, tips];
