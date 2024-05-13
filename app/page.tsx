"use client";
import { API, Auth } from "aws-amplify";
import { createResource } from "../src/graphql/mutations";
import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function Home({ signOut }: WithAuthenticatorProps) {
  const addResource = async () => {
    const session = await Auth.currentSession();
    await API.graphql({
      query: createResource,
      variables: {
        input: {
          actualHourlyRate: 20.5,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
      // authToken: session.getIdToken().getJwtToken(),
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={addResource}>Create Resource</button>
      <button onClick={signOut}>Sign Out</button>
    </main>
  );
}

export default withAuthenticator(Home);
