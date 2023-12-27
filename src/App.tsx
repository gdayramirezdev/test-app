import React, { useEffect, useState } from "react";
import BlogsList from "@/components/BlogsList";
import axios from "axios";
import constants from "./constants";
import FormBlog from "./components/FormBlog";
import { Blog } from "./components/Blog";
import Loading from "./components/Loading";
import Collapse from "./components/Collapse";

export type SearchParams = {
  title: string;
  autor: string;
  content: string;
};

function App(): React.ReactElement {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [searchSuccess, setSearchSuccess] = useState<boolean>(false);

  const search = async (params: SearchParams): Promise<void> => {
    const query = new URLSearchParams(params).toString();
    await getList(query);
  };

  const save = async (blog: Blog): Promise<void> => {
    try {
      const result = await axios(`${constants.urlApi}`, {
        method: "POST",
        data: {
          ...blog,
          publishAt: new Date().toISOString(),
        },
      });
      setloading(false);
      if ([200, 201].includes(result.status)) {
        setSaveSuccess(true);
        await getList("");
      } else {
        setSaveSuccess(false);
      }
    } catch (ex: any) {
      console.log(`Error [save]: ${ex?.message}`);
    }
  };

  const getList = async (query: string): Promise<void> => {
    try {
      const result = await axios(`${constants.urlApi}?${query}`, {
        method: "GET",
      });
      setloading(false);
      if ([200, 201].includes(result.status)) {
        setSearchSuccess(true);
        setBlogs(result.data.data);
      } else {
        setSearchSuccess(false);
      }
    } catch (ex: any) {
      console.log(`Error [getList]: ${ex?.message}`);
    }
  };

  useEffect(() => {
    getList("");
  }, []);

  return (
    <div className="container mx-auto px-4">
      {loading && <Loading />}
      <div className="flex flex-col lg:flex-row items-start">
        <div className="py-8">
          <FormBlog
            onSave={search}
            submitSuccess={searchSuccess}
            title="Buscar por titulo, autor o contenido"
            textButton="Buscar"
            required={false}
          />
        </div>

        <div className="w-full">
          <Collapse title="Crear Blog">
            <FormBlog
              onSave={save}
              submitSuccess={saveSuccess}
              title="Crear Blog"
              textButton="Guardar"
              required
            />
          </Collapse>
          <BlogsList blogs={blogs} />
        </div>
      </div>
    </div>
  );
}

export default App;
