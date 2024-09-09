import { TNavLink } from "../../types";

export const doctorRoutes = {
  profile: {
    path: "/profile/:doctorId",
    label: "Profile",
  },
  timetable: {
    path: "/timetable",
    label: "TimeTable",
  },
};

const { timetable } = doctorRoutes;
export const doctorLinks: TNavLink[] = [timetable];
