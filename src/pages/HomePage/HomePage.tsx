import toast from "react-hot-toast";
import { useLoading } from "../../utils/providers/hooks";
import ScrollReveal from "../../utils/animations/ScrollReveal";
import Card from "../../components/Card";
import Dropzone from "../../components/Dropzone";
import { Helmet } from "react-helmet-async";
import Onboarding from "../../components/Onboarding";
import React from "react";
import DataTable from "../../components/DataTable/DataTable";
import { Column } from "react-table";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";

export const HomePage = () => {
  const { isLoading, setLoading } = useLoading();
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const promise = new Promise((resolve, reject) => {
    (async () => {
      try {
        const name = "Paul";
        await timeout(5000);

        if (name === "Paul") {
          resolve("Promise resolved successfully");
        } else {
          reject(new Error("Promise rejected"));
        }
      } catch (error) {
        reject(error);
      }
    })();
  });

  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns: Column[] = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta
          name="description"
          content="This is an example of using React Helmet in the application."
        />
      </Helmet>

      <div id="step-1">
        <Card />
      </div>

      <div>
        <h1>Login</h1>
        <LoginForm />
        <h1>Register</h1>
        <RegisterForm />
      </div>

      <div id="step-2">
        <Dropzone />
      </div>

      <div>
        <h1>My Data Table</h1>
        <DataTable columns={columns} data={data} />
      </div>

      <ScrollReveal style={{ marginBottom: "200px", marginTop: "30vh" }}>
        <button
          id="step-3"
          onClick={() => toast("This is a simple notification!")}
        >
          click for notifications
        </button>
      </ScrollReveal>

      <ScrollReveal style={{ marginBottom: "200px" }}>
        <button
          id="step-4"
          onClick={() => toast.success("This is a simple success!")}
        >
          click for success
        </button>
      </ScrollReveal>

      <ScrollReveal style={{ marginBottom: "200px" }}>
        <button
          id="step-5"
          onClick={() => toast.error("This is a simple error!")}
        >
          click for error
        </button>
      </ScrollReveal>

      <ScrollReveal style={{ marginBottom: "200px" }}>
        <button
          id="step-6"
          onClick={() =>
            toast.custom(
              <div style={{ backgroundColor: "yellow" }}>Hello World</div>
            )
          }
        >
          click for custom
        </button>
      </ScrollReveal>

      <ScrollReveal style={{ marginBottom: "200px" }}>
        <button
          onClick={() =>
            toast.promise(promise, {
              loading: "Loading",
              success: "Got the data",
              error: "Error when fetching",
            })
          }
        >
          click for load
        </button>
      </ScrollReveal>

      <ScrollReveal style={{ marginBottom: "200px" }}>
        <button onClick={() => setLoading(!isLoading)}>
          click for load all
        </button>
      </ScrollReveal>

      <Onboarding />
    </>
  );
};
