export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-sage/15 animate-pulse">
      <div className="aspect-[4/3] bg-sage/10" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-24 bg-sage/15 rounded-full" />
        <div className="h-4 w-3/4 bg-slate/10 rounded-full" />
        <div className="h-3 w-full bg-slate/8 rounded-full" />
        <div className="h-3 w-5/6 bg-slate/8 rounded-full" />
        <div className="flex gap-2 pt-1">
          <div className="h-5 w-16 bg-sage/10 rounded-full" />
          <div className="h-5 w-20 bg-sage/10 rounded-full" />
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="h-6 w-14 bg-slate/10 rounded" />
          <div className="h-8 w-20 bg-sage/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
