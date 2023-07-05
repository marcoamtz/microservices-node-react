import { useState } from "react";
import Router from "next/router";

import getCurrentUser from "../../api/getCurrentUser";
import useRequest from "../../hooks/useRequest";
import BaseLayout from "../../components/BaseLayout";

export const getServerSideProps = async (context) => {
  const currentUser = await getCurrentUser(context);

  return { props: { currentUser } };
};

const Signin = ({ currentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    doRequest();
  };

  return (
    <BaseLayout currentUser={currentUser}>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div className="form-group">
          <label>Email Address</label>
          <input className="form-control" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
        </div>
        {errors}
        <button className="btn btn-primary">Sign in</button>
      </form>
    </BaseLayout>
  );
};

export default Signin;
