import Uploader from "../../components/Uploader";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Header />
      <div className="mb-20">
        <Uploader />
      </div>
    </div>
  );
};

export default Home;
