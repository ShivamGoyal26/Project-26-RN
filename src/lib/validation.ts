import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().trim().min(1, "Username Required"),
  password: z.string().trim().min(1, "Password Required"),
});

export type LoginValues = z.infer<typeof loginSchema>;
