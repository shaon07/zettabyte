import Card from "@/components/atoms/card";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 animate-fade-in h-full">
      <div className="p-6 flex flex-col justify-between h-full">
        <div className="flex items-start justify-between mb-3">
          <span className="text-sm text-blue-600 font-medium">
            Post #{post.id}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            User {post.userId}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {post.body}
        </p>

        <Link
          href={`/posts/${post.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group"
        >
          Read more
          <svg
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </Card>
  );
}
