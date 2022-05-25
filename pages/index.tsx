import type { NextPage } from "next";
import Head from "next/head";

import dynamic from "next/dynamic";

import Home from "@app/container/Home/Home";

// const Home = dynamic(() => import("@app/container/Home/Home"), { 
//   loading: () => <p>loadinasasasaskjkjkjg</p>, 
//   ssr: false 
// });

const Index: NextPage = () => {
  return <>
   <Head>
      <title>Paalamugan || Senior Software Engineer</title>
    </Head>
    <div className="loader-container">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
    <Home />
  </>
};

export default Index;
