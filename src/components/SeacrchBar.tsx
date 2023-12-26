import { ChangeEvent, useState, MouseEvent } from "react";
import Input from "./Input";
import Button from "./Button";
import { SearchParams } from "@/App";
import Loading from "./Loading";

export type SearchBarProps = {
  onSearch: (search: SearchParams) => void;
  loading: boolean;
};

const SearchBar = (props: SearchBarProps): React.ReactElement => {
  const { onSearch, loading } = props;
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const [content, setContent] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;

    if (id === "title") {
      setTitle(value);
    }

    if (id === "autor") {
      setAutor(value);
    }

    if (id === "content") {
      setContent(value);
    }
  };
  const handleSearch = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (typeof onSearch == "function") {
      onSearch({ title, autor, content });
    }
  };

  return (
    <div className="py-8">
      <h2 className="text-md font-semibold mb-2">
        Buscar por titulo, autor o contenido
      </h2>
      <div className="flex flex-row">
        <Input
          type="search"
          id="title"
          name="title"
          className="block"
          placeholder="Titulo"
          onChange={handleSearchChange}
          value={title}
        />
      </div>
      <div className="flex flex-row">
        <Input
          type="search"
          id="autor"
          className="block"
          placeholder="Autor"
          onChange={handleSearchChange}
          value={autor}
        />
      </div>
      <div className="flex flex-row">
        <Input
          type="search"
          id="content"
          className="block"
          placeholder="Contenido"
          onChange={handleSearchChange}
          value={content}
        />
      </div>
      <Button title="Buscar" onClick={handleSearch} />
      {loading && <Loading />}
    </div>
  );
};

export default SearchBar;
