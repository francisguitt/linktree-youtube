import Footer from "./_components/Footer";
import Header from "./_components/Header";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700  to-blue-400  shadow-xl shadow-blue-600/50 backdrop-blur-sm ">
      <main>
        <Header />
        <NavBar />

        <div className="mt-18">
          <Footer />
        </div>
      </main>
    </div>
  );
}
