import { gql } from "@apollo/client";

const GET_POSTS = gql`
  {
    allPosts(first: 10) {
      id
      title
      url
    }
  }
`;
export { GET_POSTS };
