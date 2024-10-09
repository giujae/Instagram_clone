import usePostStore from '../store/postStore';

const useGetUserPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { posts, setPosts } = usePostStore();
};

export default useGetUserPosts;
