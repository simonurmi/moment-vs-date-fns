import moment from "moment";
import { addDays } from "date-fns";
import { Temporal, Intl as TemporalIntl } from "@js-temporal/polyfill";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Moment: {moment().add(1, "days").format("D.MM.YYYY")}</p>
        <p>
          date-fns:{" "}
          {new Intl.DateTimeFormat("fi-FI").format(addDays(new Date(), 1))}
        </p>
        <p>
          Temporal API polyfill:{" "}
          {new TemporalIntl.DateTimeFormat("fi-FI", {
            dateStyle: "short",
          }).format(
            Temporal.Now.zonedDateTime("gregory").add(
              Temporal.Duration.from({ days: 1 })
            )
          )}
        </p>
      </header>
    </div>
  );
};

export default App;
