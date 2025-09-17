import SinglePostContainer from "@/components/containers/single-post-container";

export default function SinglePostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return <SinglePostContainer postId={id} />;
}
