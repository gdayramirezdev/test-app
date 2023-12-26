import React, { useEffect, useState } from "react";
import BlogsList from "@/components/BlogsList";
import axios from "axios";
import SearchBar from "./components/SeacrchBar";
import constants from "./constants";

export type SearchParams = {
  title: string;
  autor: string;
  content: string;
};

function App(): React.ReactElement {
  const [blogs, setBlogs] = useState([]);
  const [loading, setloading] = useState(true);

  const search = async (params: SearchParams): Promise<void> => {
    const query = new URLSearchParams(params).toString();
    await getList(query);
  };

  const getList = async (query: string): Promise<void> => {
    try {
      const result = await axios(`${constants.urlApi}?${query}`, {
        method: "GET",
      });
      setloading(false);
      if ([200, 201].includes(result.status)) {
        setBlogs(result.data.data);
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
      <div className="flex flex-col lg:flex-row items-start">
        <SearchBar onSearch={search} loading={loading} />
        <BlogsList blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
