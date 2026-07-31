import { useState } from "react";

import PasswordScreen from "./components/PasswordScreen";
import NotebookApp from "./NotebookApp";

export default function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    return loggedIn
        ? <NotebookApp />
        : <PasswordScreen unlock={() => setLoggedIn(true)} />;

}