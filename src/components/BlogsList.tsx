import BlogComponent, { Blog } from "./Blog";

type BlogsListProps = {
  blogs: Blog[];
};

const BlogsList = ({ blogs }: BlogsListProps): React.ReactElement => {
  const blogsList = blogs?.map((blog: Blog) => <BlogComponent blog={blog} />);

  const isEmpty = Boolean(blogs.length <= 0);

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <h2 className="text-md font-semibold mb-2">Total: {blogs.length}</h2>
        <div className="grid gap-8 lg:grid-cols-2">{blogsList}</div>
        <h3 className="text-sm font-bold"></h3>
        {isEmpty && "Sin resultados"}
      </div>
    </section>
  );
};

export default BlogsList;
