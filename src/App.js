import logo from './logo.svg';
import './App.css';
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages } from "./locales/en/messages";
import { t } from '@lingui/macro';

i18n.load("en", messages);
i18n.activate("en");

function App() {
  const text = t({ id: 'i_am_the_id', message: 'I am the actual message'})

  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
