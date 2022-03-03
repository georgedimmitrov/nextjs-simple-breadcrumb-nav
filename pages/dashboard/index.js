import Head from "next/head";

function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard | NextJS Breadcrumb Example</title>
        <meta
          name="description"
          content="A simple example application for a NextJS Breadcrumb tutorial"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl">Breadcrumb Navigation Example with NextJS</h1>
      </main>
    </div>
  );
}

export default Dashboard;
