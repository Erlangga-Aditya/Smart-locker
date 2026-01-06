export const SkeletonCard = () => {
  return (
    <div className="card-elevated p-6">
      <div className="skeleton h-4 w-24 mb-4 rounded" />
      <div className="skeleton h-8 w-32 mb-2 rounded" />
      <div className="skeleton h-3 w-40 rounded" />
    </div>
  );
};

export const SkeletonLocker = () => {
  return (
    <div className="locker-card">
      <div className="skeleton w-16 h-16 rounded-xl mb-4" />
      <div className="skeleton h-5 w-24 mb-2 rounded" />
      <div className="skeleton h-6 w-20 rounded-full" />
    </div>
  );
};

export const SkeletonRow = () => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div className="skeleton w-10 h-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <div className="skeleton h-4 w-32 rounded" />
        <div className="skeleton h-3 w-24 rounded" />
      </div>
    </div>
  );
};
