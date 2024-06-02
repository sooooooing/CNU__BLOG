import PostListItem from '../components/PostListItem';
import NoPostList from '../components/NoPostList';
import useGetPostList from '../queries/useGetPostList.ts';

const Home = () => {
  const { data: postList = [], isError, isLoading } = useGetPostList();

  if (isLoading) {
    return <div>...불러오는 중...</div>;
  }

  if (postList.length === 0 || isError) {
    return <NoPostList />;
  }

  return (
    <div>
      {postList.map(post => (
        <PostListItem key={post.id} id={post.id} title={post.title} contents={post.contents} tag={post.tag} />
      ))}
    </div>
  );
};

export default Home;
