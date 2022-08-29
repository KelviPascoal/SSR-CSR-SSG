import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href="/ssr">SSR</Link>
      <Link href="/ssg">SSG</Link>
      <Link href="/csr">CSR</Link>
    </div>
  );
};

export default Home;
