import React from "react";
import { useSession } from "next-auth/react";

import "./page.css";

export const Page = () => {
  const session = useSession();

  return (
    <article>
      <section>
        <h2>Example Page</h2>
        <p>{`Current Session State: ${JSON.stringify(session)}`}</p>
      </section>
    </article>
  );
};
