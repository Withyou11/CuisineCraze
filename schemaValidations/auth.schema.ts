import z from 'zod';

// enum RoleValues {
//   Staff,
//   Manager,
// }

export const LoginBody = z
  .object({
    email: z.string().email(),
    password: z.string().min(6).max(100),
  })
  .strict();

export type LoginBodyType = z.TypeOf<typeof LoginBody>;

export const LoginRes = z.object({
  data: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    // account: z.object({
    //   id: z.number(),
    //   name: z.string(),
    // }),
  }),
});

export type LoginResType = z.TypeOf<typeof LoginBody>;
