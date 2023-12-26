import { useState } from "react";
import Button from "./Button";

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
  const [showContent, toogleShowContent] = useState(false);

  return (
    <article className="p-6 bg-white w-96 rounded-lg border border-gray-200 shadow-md">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="text-sm">{blog.publishAt}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
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
        <Button
          className="bg-gray-600 text-xs"
          title={showContent ? "Ocultar contenido" : "Mostrar contenido"}
          onClick={() => toogleShowContent(!showContent)}
        />
      </div>
    </article>
  );
};

export default BlogComponent;
