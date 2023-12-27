import { useState } from "react";

export type Blog = {
  title: string;
  autor: string;
  publishAt: string;
  content: string;
  shortContent: string;
};

export type BlogProps = {
  blog: Blog;
};

const BlogComponent = ({ blog }: BlogProps): React.ReactElement => {
  const [showContent, toogleShowContent] = useState<boolean>(false);

  return (
    <article className="p-6 bg-white w-96 rounded-lg border border-gray-200 shadow-md">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="text-sm">{blog.publishAt}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate">
        <a href="#">Titulo: {blog.title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        Contenido:
      </p>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {showContent ? blog.content : blog.shortContent}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-medium">Autor: {blog.autor}</span>
        </div>
        <button
          className="w-36 m-2 p-2 text-sm border border-gray-300 rounded-lg bg-gray-50"
          onClick={() => toogleShowContent(!showContent)}
        >
          {showContent ? "Ocultar contenido" : "Mostrar contenido"}
        </button>
      </div>
    </article>
  );
};

export default BlogComponent;
