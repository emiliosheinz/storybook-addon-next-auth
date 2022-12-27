import { faker } from "@faker-js/faker";
import { Session } from "next-auth";

export type AuthState =
  | { data: Session; status: "authenticated" }
  | { data: null; status: "unauthenticated" | "loading" };

export const AUTH_STATES: Record<
  string,
  { title: string; session: AuthState | undefined }
> = {
  unknown: {
    title: "Session Unknown",
    session: undefined,
  },
  loading: {
    title: "Session Loading",
    session: {
      data: null,
      status: "loading",
    },
  },
  unauthenticated: {
    title: "Not Authenticated",
    session: {
      data: null,
      status: "unauthenticated",
    },
  },
  authenticated: {
    title: "Authenticated",
    session: {
      data: {
        user: {
          name: faker.name.fullName(),
          email: faker.internet.email(),
          image: faker.internet.avatar(),
        },
        expires: faker.date.future().toString(),
      },
      status: "authenticated",
    },
  },
};
