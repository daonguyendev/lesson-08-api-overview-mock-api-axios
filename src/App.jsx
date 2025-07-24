import "./App.css";
import Menu from "./components/common/Menu";
import AppRoutes from "./routes/AppRoutes";
import "./assets/css/form.css";
import "./assets/css/table.css";

function App() {
  return (
    <>
      <h2>Product Management App</h2>
      <Menu />
      <AppRoutes />
    </>
  );
}

export default App;
