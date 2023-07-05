import buildClient from "./buildClient";

const getCurrentUser = async (context) => {
  let currentUser;
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  currentUser = data.currentUser || null;

  return currentUser;
};

export default getCurrentUser;
