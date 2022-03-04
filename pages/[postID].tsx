import { useRouter } from "next/router";

import PostCard from "../components/PostCard";
import { useFetchPostById } from "../hooks/useFetch";

export default function PostDetails() {
  const router = useRouter();
  const { postID } = router.query;

  const { data, errors, loading, dataFetched } = useFetchPostById(`posts/${postID as string}`);

  if (data) {
    return <PostCard body={data.body} id={data.id} title={data.title} userId={data.userId} />;
  }

  return <h3>Wrong Post ID</h3>;
}
