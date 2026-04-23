import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default function Dashboard() {
  return (
    <div style={{ display: "none" }} className="dashboard">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
