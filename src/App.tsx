import MainLayout from "./componets/layout/MainLayout";
import ProtectorRoute from "./componets/layout/ProtectorRoute";

function App() {
  return (
    <>
      <ProtectorRoute>
        <MainLayout></MainLayout>
      </ProtectorRoute>
    </>
  );
}

export default App;
