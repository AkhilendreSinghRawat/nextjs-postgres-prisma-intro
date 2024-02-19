import { Post } from "@prisma/client";
import DeletePostButton from "./DeletePostButton";

export function Post({ post }: { post: Post & { author: { name: string | null } | null } }) {


    return (
        <div style={{ backgroundColor: 'white', padding: '2rem', border: '1px solid gray', borderRadius: '1rem' }}>
            <h3>{post?.author?.name}</h3>
            <h3>{post.title}</h3>
            <text>{post.content}</text>
            <DeletePostButton id={post.id} />
        </div>
    )
}