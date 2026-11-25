import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Services from "../components/Services"

const Home = () => {
  return (
    <>
        <Navbar cartCount={2}/>
        <Hero />
        <Services />
    </>
  )
}

export default Home