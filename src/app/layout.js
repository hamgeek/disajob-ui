import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

import { Suspense } from "react";
import Loading from "./loading";
import { Flex } from "@chakra-ui/react";
import DisabilityWidget from "@/component/DisabilityWidget";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ['latin'] });

export const metadata = {
  title: "DisaJob",
  
  other: {
    "dicoding:email": "ham.owne@gmail.com"
  }
}


export default function RootLayout({ children }) {


  
  return (
    <html lang="en">

      <body style={{background: '#e5e5e7'}} className={lexend.className}>
      

        <Providers>

            <Flex position={'relative'} flexDirection={'column'} m={'0 auto'} maxW={'420px'} bg={'gray.100'} h={'100dvh'}>
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense> 
              <DisabilityWidget />
            </Flex>


        </Providers> 
      </body>
    </html>
  );
}
