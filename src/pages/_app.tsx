import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        {/* <title>Palestine illustrated</title>
        <meta
          name="description"
          content="This is a website that diplays historical information about palestine"
        /> */}
        <title>React Challenges</title>
        <meta
          name="description"
          content="This site is dedicated to displaying react challenges solved by Mohamed Elabasiri"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      
    </>
  );
};

export default MyApp;
