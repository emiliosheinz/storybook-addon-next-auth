import { AUTH_STATES } from "../constants/auth-state";

export const authState = {
  authState: {
    name: "authState",
    description: "Set authentication state",
    toolbar: {
      icon: "user",
      items: Object.keys(AUTH_STATES).map((e) => {
        const stateKey = e as keyof typeof AUTH_STATES;

        return {
          value: e,
          title: AUTH_STATES[stateKey].title,
        };
      }),
    },
  },
};
