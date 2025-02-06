import AppRouterProvider from "./routes"; // ✅ Import Router Provider
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator loginMechanism={["email"]}>
      <AppRouterProvider />
    </Authenticator>
  );
}

export default App;
