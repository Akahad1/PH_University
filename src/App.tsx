import MainLayout from "./componets/layout/MainLayout";
import ProtectorRoute from "./componets/layout/ProtectorRoute";

function App() {
  return (
    <>
      <ProtectorRoute role={undefined}>
        <MainLayout></MainLayout>
      </ProtectorRoute>
    </>
  );
}

export default App;
