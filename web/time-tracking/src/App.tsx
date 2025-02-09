import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { SessionObj, Entry, Event } from "./definitions";
import { useState } from "react";
import userList from "./users.json";
import Home from "./pages/Home";
import TimeTrackingContractor from "./components/TimeTrackingContractor";
import TimeTrackingManager from "./components/TimeTrackingManager";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const user = userList[0];
  const [session, setSession] = useState<SessionObj>({
    user,
  });
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      username: "will@ionic.io",
      src: "time",
      rel: "timesheet-approved",
      text: "Timesheet Approved",
    },
  ]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route exact path="/time-tracking/contractor">
            <TimeTrackingContractor session={session} />
          </Route>
          <Route exact path="/time-tracking/manager">
            <TimeTrackingManager session={session} />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
