import { useForm, SubmitHandler } from "react-hook-form";
import { Blog } from "./Blog";
import { useEffect } from "react";

export type SearchBarProps = {
  title: string;
  onSave: (search: Blog) => void;
  submitSuccess: boolean;
  textButton: string;
  required: boolean;
};

const FormBlog = (props: SearchBarProps): React.ReactElement => {
  const { onSave, submitSuccess, title, textButton, required } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Blog>();

  const onSubmit: SubmitHandler<Blog> = (data) => {
    onSave(data);
  };

  useEffect(() => {
    if (submitSuccess === true) {
      reset();
    }
  }, [submitSuccess]);

  return (
    <div className="">
      <h2 className="text-md font-semibold mb-2">{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          placeholder="Titulo"
          {...register("title", { required })}
          className={`m-2 p-2 text-sm border border-gray-300 rounded-lg bg-gray-50`}
        />
        {errors.title && <span>Un titulo es requerido</span>}
        <input
          placeholder="Autor"
          {...register("autor", { required })}
          className={`m-2 p-2 text-sm border border-gray-300 rounded-lg bg-gray-50`}
        />
        {errors.autor && <span>Un autor es requerido</span>}
        <textarea
          placeholder="Contenido"
          {...register("content", { required })}
          className={`m-2 p-2 text-sm border border-gray-300 rounded-lg bg-gray-50`}
        />
        {errors.content && <span>Contenido requerido</span>}
        <button
          type="submit"
          className={`w-36 m-2 p-2 text-sm border border-gray-300 rounded-lg bg-gray-50`}
        >
          {textButton || 'Guardar'}
        </button>
      </form>
    </div>
  );
};

export default FormBlog;
