"use client";

import Loader from "@/components/atoms/loader";
import { usePost, usePostAuthor } from "@/hooks/use-posts";
import Link from "next/link";
import { useCallback } from "react";
import Button from "../atoms/button";
import Error from "../atoms/error";
import PostDetailCard from "../modules/posts/posts-details-card";

interface SinglePostContainerProps {
  postId: string;
}

export default function SinglePostContainer({
  postId,
}: SinglePostContainerProps) {
  const {
    data: post,
    isLoading: postLoading,
    error: postError,
  } = usePost(Number.parseInt(postId));

  const { data: user } = usePostAuthor(post?.userId || 0);

  const handleThrowError = useCallback(() => {
    window.location.pathname = "/posts/9999";
  }, []);

  return (
    <>
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <Link
            href="/posts"
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Posts
          </Link>
        </div>

        <Button onClick={handleThrowError}>Simulate Error</Button>

        {postLoading ? (
          <Loader />
        ) : postError ? (
          <Error error={postError} />
        ) : post ? (
          <PostDetailCard post={post} user={user || undefined} />
        ) : null}
      </div>
    </>
  );
}
