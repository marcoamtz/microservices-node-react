import getCurrentUser from "../api/getCurrentUser";
import BaseLayout from "../components/BaseLayout";

export const getServerSideProps = async (context) => {
  const currentUser = await getCurrentUser(context);

  return { props: { currentUser } };
};

const Landing = ({ currentUser }) => {
  return (
    <BaseLayout currentUser={currentUser}>
      {currentUser ? <h1>You are signed in</h1> : <h1>You are NOT signed in</h1>}
    </BaseLayout>
  );
};

export default Landing;
