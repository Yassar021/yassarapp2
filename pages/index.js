import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Footer from "../components/Footer"
import Home from "../components/Home"
import Navbar from "../components/Navbar"

const Index = () => {
  return (
    <>
    <Head>
      <title>Yassar</title>
    </Head>

    <Box bgColor={'#02091C'}>
        <Navbar />
        <Home />
        <Footer />
    </Box>
    </>
  )
}

export default Index