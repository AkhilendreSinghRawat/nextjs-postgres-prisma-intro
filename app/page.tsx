import Link from "next/link";
import { Post } from "./components/Post";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: { select: { name: true } }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <h1>Feed</h1>
        <Link href={'/add-post'} style={{ textDecoration: 'none' }}>
          <h1 style={{ position: 'absolute', right: 0, top: 0 }}>+</h1>
        </Link>
      </div>
      <div style={{
        width: '100%', display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
        gap: "1rem",
      }}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
