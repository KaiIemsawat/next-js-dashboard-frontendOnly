import BackButton from "@/components/BackButton";

import PostsTable from "@/components/posts/PostsTable";

const page = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
    </>
  );
};
export default page;
