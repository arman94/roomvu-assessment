import type { NextPage } from "next";
import classnames from "classnames";
import { useTheme } from "next-themes";

import Header from "../components/header";
import PostCard from "../components/PostCard";
import { useFetchPosts } from "../hooks/useFetch";
import { useAppSelector } from "../hooks";

const Home: NextPage = () => {
  const { data, errors, loading, dataFetched } = useFetchPosts("posts");

  const { darkMode } = useAppSelector((state) => state.themeToggler);

  const { setTheme } = useTheme();
  setTheme(darkMode ? "dark" : "light");

  return (
    <main className="px-[2.625rem]">
      <Header />
      <div className="flex flex-col items-start justify-start">
        {data?.map((post) => (
          <PostCard key={post.id} title={post.title} id={post.id} body={post.body} userId={post.userId} />
        ))}
      </div>
    </main>
  );
};

export default Home;
