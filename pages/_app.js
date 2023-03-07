import Navbar from "./components/Navbar";
import "@/styles/tailwind.css";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
