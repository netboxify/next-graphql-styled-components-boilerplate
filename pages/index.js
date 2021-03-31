import Button from "@/components/button";

import { initializeApollo } from "@/lib/apollo";

import { GET_POSTS } from "@/query/get-posts";

const Home = ({ data }) => {
  return (
    <div className="grid grid-pad">
      <div className="col-1-1">
        <div className="content">
          <Button text="Button" background="tomato" />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const apollo = initializeApollo();

  const data = await apollo.query({
    query: GET_POSTS,
  });

  return {
    props: {
      data: data?.data?.allPosts,
    },
  };
}

export default Home;
