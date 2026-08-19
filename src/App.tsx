import InsuranceForm from "./component/InsuranceForm";
const App = () => {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl items-center justify-center">
        <InsuranceForm />
      </div>
    </main>
  );
};

export default App;
