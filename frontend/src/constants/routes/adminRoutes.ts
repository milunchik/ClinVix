import { TNavLink } from "../../types";

export const adminRoutes = {
  timetable: {
    path: "/timetable",
    label: "Timetable",
  },
};

const { timetable } = adminRoutes;
export const adminLinks: TNavLink[] = [timetable];
