import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/date";
import Link from "next/link";

export default function Home() {
  const posts = getSortedPostsData();
  return (
    <section>
      <ul>
        {posts.map((post) => (
          <li className="my-4" key={post.id}>
            <Link
              className="text-sky-500 hover:bg-slate-200"
              href={`/post/${post.id}`}
            >
              {post.title}
            </Link>
            <br />
            <small>
              <Date dateString={post.date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
