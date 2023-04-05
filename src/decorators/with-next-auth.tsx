import { SessionContext as NextSessionContext } from "next-auth/react";
import type { DecoratorFunction, Renderer, PartialStoryFn as StoryFunction, StoryContext } from "@storybook/types";
import { useMemo } from "react";
import React from "react";
import { AuthState, AUTH_STATES } from "../constants/auth-state";

type SessionContextProps = {
  children: any;
  session: AuthState | undefined;
}

const SessionContext = ({ session, children }: SessionContextProps) => {
  const value = useMemo((): AuthState => {
    return session ? session : { data: null, status: "unauthenticated" };
  }, [session]);

  return (
    <NextSessionContext.Provider value={value}>
      {children}
    </NextSessionContext.Provider>
  );
};

export const withNextAuth: DecoratorFunction = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  const session = AUTH_STATES[context.globals.authState]?.session;

  return <SessionContext session={session}>{StoryFn()}</SessionContext>;
};
