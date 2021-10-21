import axios from "axios";
import { isEmpty } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Search from "../components/search/Search";
import DataTotal from "../components/table/DataTotal";
import styles from "../styles/Home.module.css";

export const Home = ({ data }) => {
  const [value, setValue] = useState("");
  const [start, setStart] = useState("2020-03-01T00:00:00Z");
  const [end, setEnd] = useState("2020-04-01T00:00:00Z");
  const [datasearch, setDatas] = useState([]);
  const [datas, setData] = useState([]);
  const router = useRouter();

  const subMit = async () => {
    if (value === null || value === "") {
      const res = await axios.get(`https://api.covid19api.com/summary`);
      const data = res.data;
      setData(data);
      setDatas([]);
    } else {
      let resp = await axios.get(
        `https://api.covid19api.com/country/${
          isEmpty(value) ? value : value.replace(/\s/g, "")
        }?from=${start}&to=${end}`
      );
      let data = resp.data;
      setDatas(data);
    }
  };
  const handleCountry = async (e) => {
    setValue(e.target.value);
    // if (value === null || value === "") {
    //   const res = await axios.get(`https://api.covid19api.com/summary`);
    //   const data = res.data;
    //   setData(data);
    //   setDatas([]);
    // } else {
    //   let resp = await axios.get(
    //     `https://api.covid19api.com/country/${
    //       isEmpty(value) ? value : value.replace(/\s/g, "")
    //     }?from=${start}&to=${end}`
    //   );
    //   let data = resp.data;
    //   setDatas(data);
    // }
  };
  let datapush = isEmpty(datasearch) ? data : datasearch;

  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <Head>
        <title>{`${value ? value : `Trang chủ`} | `} Covid 19 </title>
        <meta name="keyword" content={"thong tin covid 19 cac quoc gia"} />

        <meta name="description" content={"thong tin covid 19"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Search
          setEnd={setEnd}
          setValue={setValue}
          setStart={setStart}
          subMit={subMit}
          handleCountry={handleCountry}
        />
        <DataTotal data={datapush} />
      </main>

      <footer className={styles.footer}>
        <a
          style={{ textDecoration: "none" }}
          href="https://react-redux-vn.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>React-redux, All Rights Reserved</span>
        </a>
      </footer>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await axios.get(`https://api.covid19api.com/country/vietnam`);
  const data = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
export default Home;
