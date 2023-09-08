import { ConnectButton } from '@rainbow-me/rainbowkit';
import NavBar from "./components/navbar"

const Home = () => {
  return (
    <main className="flex min-h-screen max-h-[100%] flex-col items-center justify-between">
      <NavBar />
      <h1>Welcome</h1>
    </main>
  );
};

export default Home;
