import { z } from "zod";

export const academicSemesterSchma = z.object({
  name: z.string({ required_error: "Plase slecet a name" }),
  year: z.string({ required_error: "Plase slecet a year" }),
  startMonth: z.string({ required_error: "Plase slecet a startMonth" }),
  endMonth: z.string({ required_error: "Plase slecet a  endMonth" }),
});
