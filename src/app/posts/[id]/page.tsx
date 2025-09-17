import SinglePostContainer from "@/components/containers/single-post-container";

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <SinglePostContainer postId={id} />;
}
