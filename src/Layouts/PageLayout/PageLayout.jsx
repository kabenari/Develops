import {Flex,Box} from "@chakra-ui/react"
import SideBar from "../../components/SideBar/SideBar"
import { useLocation } from "react-router-dom"

function PageLayout({children}) {

    const {pathname} = useLocation();


  return (
    <Flex>
        {/* left side main navbar */}



        {pathname !== "/auth" ? <Box w={{base:"70px",md:"240px"}}>
            <SideBar/>
        </Box> : null}





        {/* right side main baki dynamic contents */}


        
        <Box flex={1} w={{base:"calc(100% - 70px)",md:"calc(100% - 240px)"}}>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout
