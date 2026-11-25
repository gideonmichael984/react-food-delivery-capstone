import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
        <Navbar cartCount={2}/>
        <Hero />
    </>
  )
}

export default Home