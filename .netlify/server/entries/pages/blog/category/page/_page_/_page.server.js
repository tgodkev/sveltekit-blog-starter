import { r as redirect } from "../../../../../../chunks/index.js";
import { p as postsPerPage } from "../../../../../../chunks/config.js";
import { f as fetchPosts } from "../../../../../../chunks/fetchPosts.js";
const load = async ({ fetch, params }) => {
  const page = parseInt(params.page) || 1;
  if (page <= 1) {
    redirect(301, "/blog");
  }
  let offset = page * postsPerPage - postsPerPage;
  const totalPostsRes = await fetch("/api/posts/count");
  const total = await totalPostsRes.json();
  const { posts } = await fetchPosts({ offset, page });
  return {
    posts,
    page,
    totalPosts: total
  };
};
export {
  load
};
