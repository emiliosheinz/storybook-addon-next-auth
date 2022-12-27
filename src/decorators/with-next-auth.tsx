import { SessionContext as NextSessionContext } from "next-auth/react";
import type { DecoratorFunction } from "@storybook/addons";
import { useMemo } from "react";
import React from "react";
import { AuthState, AUTH_STATES } from "../constants/auth-state";

const SessionContext: React.FC<{ session: AuthState }> = ({
  session,
  children,
}) => {
  const value = useMemo((): AuthState => {
    return session ? session : { data: undefined, status: "unauthenticated" };
  }, [session]);

  return (
    <NextSessionContext.Provider value={value}>
      {children}
    </NextSessionContext.Provider>
  );
};

export const withNextAuth: DecoratorFunction = (StoryFn, context) => {
  const session = AUTH_STATES[context.globals.authState]?.session;

  return <SessionContext session={session}>{StoryFn()}</SessionContext>;
};
