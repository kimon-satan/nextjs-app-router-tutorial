import { getAllPostIds, getPostData } from "@/lib/posts";
import Date from "@/components/date";
import style from "./page.module.css";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts;
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  return (
    <article className="flex flex-col gap-2 items-center">
      <h1 className="text-2xl mt-2">{post.title}</h1>
      <div className="font-extralight">
        <Date dateString={post.date} />
      </div>

      <div
        className={style.postBody}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
