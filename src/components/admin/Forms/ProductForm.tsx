import { Controller, useForm } from "react-hook-form";
import { Product, FormProduct } from "@/types/global";
import { ImageSelector } from "@/components/admin/ImageSelector";
import { isValidDescription } from "@/utils/validators";
import { LoadingSpinner } from "../LoadingSpinner";
import { Input } from "../Input";
import { Editor } from "../Editor";

interface ProductFormProps {
  className?: string;
  product?: Product;
  pending?: boolean;
  onSaveProduct: (product: FormProduct) => void;
}

const DEFAULT_PRODUCT: Product = {
  name: "",
  description: "",
  image: "",
  order: 0,
  price: null,
  etsyLink: "",
};

export const ProductForm: React.FC<ProductFormProps> = ({
  product = DEFAULT_PRODUCT,
  pending,
  onSaveProduct,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<FormProduct>({
    defaultValues: { ...product, price: product.price?.toString() || "" },
    mode: "onBlur",
  });

  return (
    <form
      className="flex flex-col w-full"
      onSubmit={handleSubmit(onSaveProduct)}
    >
      <div className="flex mb-8">
        <div className="flex flex-col w-1/2">
          <div className="mb-4">
            <Input
              register={register}
              options={{ required: "Please add a name" }}
              error={errors.name}
              label="Name"
              name="name"
              type="text"
              placeholder="Product Name"
            />
          </div>

          <div className="mb-4">
            <Input
              register={register}
              options={{ required: "Please add a price" }}
              error={errors.price}
              type="text"
              label="Price"
              name="price"
              placeholder="10.50"
            />
          </div>

          <div className="mb-4">
            <Input
              register={register}
              options={{ required: "Please select the order of display" }}
              error={errors.order}
              type="number"
              label="Order of Display"
              name="order"
              placeholder="1"
            />
          </div>

          <div>
            <Input
              register={register}
              options={{ required: "Please add an Etsy Link" }}
              error={errors.etsyLink}
              type="url"
              label="Etsy Link"
              name="etsyLink"
              placeholder="Etsy Link"
            />
          </div>
        </div>

        <div className="w-1/2 ml-8">
          <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
            Image
          </span>

          <Controller
            name="image"
            rules={{ required: "Please make sure to add an image" }}
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

      <div className="mb-8">
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

      <div className="flex items-center border-t-2 border-slate-300 pt-4 h-24">
        <button
          className="btn-admin btn-primary mr-4"
          type="submit"
          disabled={pending || !isValid || !isDirty}
        >
          {pending ? <LoadingSpinner /> : "Save Product"}
        </button>
      </div>
    </form>
  );
};
