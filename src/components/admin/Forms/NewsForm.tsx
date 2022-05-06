import { Controller, useForm } from "react-hook-form";
import { News } from "@/types/global";
import { ImageSelector } from "@/components/admin/ImageSelector";
import { DayPicker } from "@/components/admin/DayPicker";
import { isValidDescription, isValidDate } from "@/utils/validators";
import { LoadingSpinner } from "../LoadingSpinner";
import { Input } from "../Input";
import { Editor } from "../Editor";

interface NewsFormProps {
  className?: string;
  news?: News;
  pending?: boolean;
  onSaveNews: (news: News) => void;
}

const DEFAULT_NEWS: News = {
  title: "",
  description: "",
  image: "",
  expirationDate: "",
};

export const NewsForm: React.FC<React.PropsWithChildren<NewsFormProps>> = ({
  news = DEFAULT_NEWS,
  pending,
  onSaveNews,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<News>({
    defaultValues: { ...news },
    mode: "onBlur",
  });

  return (
    <form className="flex flex-col w-9/12" onSubmit={handleSubmit(onSaveNews)}>
      <div className="flex mb-8">
        <div className="flex flex-col w-1/2">
          <div className="mb-4">
            <Input
              register={register}
              options={{ required: "Please add a title" }}
              error={errors.title}
              label="Title"
              name="title"
              type="text"
              placeholder="News Title"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="uppercase block text-gray-700 text-sm font-bold mb-3">
              Date
            </label>

            <Controller
              name="expirationDate"
              rules={{ required: true, validate: isValidDate }}
              render={(props) => (
                <DayPicker
                  value={props.field.value}
                  error={errors?.expirationDate}
                  onChange={(newDate) => {
                    props.field.onChange(newDate);
                    props.field.onBlur();
                  }}
                />
              )}
              control={control}
            />
          </div>

          <div>
            <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Description
            </span>
            <div>
              <Controller
                control={control}
                name="description"
                rules={{ validate: isValidDescription }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Editor
                    value={value}
                    error={errors?.description}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 ml-8">
          <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
            Image
          </span>

          <Controller
            name="image"
            render={(props) => (
              <ImageSelector
                currentImage={props.field.value}
                error={errors?.image}
                onBlur={() => props.field.onBlur()}
                onSelectImage={(image) => {
                  props.field.onChange(image);
                }}
              />
            )}
            control={control}
          />
        </div>
      </div>

      <div className="flex items-center border-t-2 border-slate-300 pt-4 h-24">
        <button
          className="btn-admin btn-primary mr-4"
          type="submit"
          disabled={pending || !isValid || !isDirty}
        >
          {pending ? <LoadingSpinner /> : "Save News"}
        </button>
      </div>
    </form>
  );
};
