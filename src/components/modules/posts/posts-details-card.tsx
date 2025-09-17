import Card from "@/components/atoms/card";
import { Post, User } from "@/types";

interface PostDetailCardProps {
  post: Post;
  user?: User;
}

export default function PostDetailCard({ post, user }: PostDetailCardProps) {
  return (
    <div className="max-w-4xl">
      <Card className="animate-fade-in">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-blue-600 font-medium">
              Post #{post.id}
            </span>

            {user && (
              <div className="text-sm text-gray-600">
                By <span className="font-medium">{user.name}</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">{post.body}</p>
          </div>

          {user && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                About the Author
              </h3>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <div>
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-gray-600">{user.email}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
