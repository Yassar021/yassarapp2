import { Box } from "@chakra-ui/react"
import Footer from "../components/Footer"
import Home from "../components/Home"
import Navbar from "../components/Navbar"

const Index = () => {
  return (
    <Box bgColor={'#02091C'}>
        <Navbar />
        <Home />
        <Footer />
    </Box>
  )
}

export default Index