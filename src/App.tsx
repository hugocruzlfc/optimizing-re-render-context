import { StoreProvider } from "./context";
import { DisplayContainer, FormContainer } from "./components";

function App() {
  return (
    <main className="container">
      <h5>App</h5>

      <StoreProvider>
        <div className="container">
          <h5>ContentContainer</h5>
          <FormContainer />
          <DisplayContainer />
        </div>
      </StoreProvider>
    </main>
  );
}

export default App;
