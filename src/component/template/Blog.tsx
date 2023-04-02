import BlogCard from '../organism/BlogCard';

export default function Blog({ data }: { data: string[] }) {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-x-8 gap-y-12 px-3 md:grid-cols-3 lg:px-0">
      {data.map((_, i) => {
        return (
          <div key={i} className={i === 0 ? 'col-span-full' : ''}>
            <BlogCard index={i}></BlogCard>
          </div>
        );
      })}
    </div>
  );
}
