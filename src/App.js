import React from "react";
import "./App.css";
import RegistrationForm from "./components/AuthForms/RegistrationForm/RegistrationForm";
import Tab from "./components/Tab/Tab";
import TabHeader from "./components/Tab/TabHeader";
import TabContent from "./components/Tab/TabContent";
import LoginForm from "./components/AuthForms/LoginForm/LoginForm";

function App() {
  return (
    <div className="App">
      <Tab>
        <TabHeader filter={"Register"}>{"Je n'ai pas de compte"}</TabHeader>
        <TabHeader filter={"Login"}>{"J'ai pas de compte"}</TabHeader>

        <TabContent filter={"Register"}>
          <RegistrationForm />
        </TabContent>
        <TabContent filter={"Login"}>
          <LoginForm />
        </TabContent>
      </Tab>
    </div>
  );
}

export default App;
