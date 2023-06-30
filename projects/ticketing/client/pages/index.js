import buildClient from "../api/buildClient";

export const getServerSideProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return { props: { currentUser: data.currentUser } };
};

const Landing = ({ currentUser }) => {
  return currentUser ? <h1>You are signed in</h1> : <h1>You are NOT signed in</h1>;
};

export default Landing;
