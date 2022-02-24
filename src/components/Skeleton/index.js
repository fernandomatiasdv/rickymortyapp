import CardSkeleton from "./CardSkeleton";

const Skeleton = () => {
  return (
    <div class="loading-skeleton">
      {[...Array(8)].map((index) => (
          <CardSkeleton key={index} />
      ))}
    </div>
  );
};
export default Skeleton;
