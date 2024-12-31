import Header from "@/components/header";
import { Navbar } from "@/components/nav";

const HomePage = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-sky-200">
      <div className="w-full max-w-screen-2xl mx-auto p-20 bg-slate-100 rounded-2xl shadow-lg">
        <Navbar />
        <Header />
        <h1 className="text-green-500 text-5xl font-bold">Home Page</h1>
      </div>
    </main>
  );
};

export default HomePage;
