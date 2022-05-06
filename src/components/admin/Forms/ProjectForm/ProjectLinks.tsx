import { Controller, Control } from "react-hook-form";
import {
  TeachingResource,
  FormProject,
  Product,
  Publication,
} from "@/types/global";
import { LinkToOtherItemButton } from "@/components/admin/LinkToOtherItemButton";

interface ProjectLinksProps {
  control: Control<FormProject>;
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ control }) => {
  return (
    <div className="flex flex-col">
      <span className="mt-10 mb-2 text-xl uppercase">
        Links to other resources
      </span>

      <table className="w-full table-fixed">
        <thead>
          <tr className="uppercase w-1/2 text-left text-sm border-b-2 border-gray-300">
            <th className="w-2/6 pb-1 px-2">Link to</th>
            <th className="w-3/6 pb-1 px-2">Name</th>
            <th className="w-1/6 pb-1 px-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          <Controller
            name="links.teacherResources"
            control={control}
            render={({ field: { value, onChange } }) => (
              <tr className="border-b-2 border-gray-300">
                <td className="py-5 w-2/6 px-2">Teacher Resource</td>
                <td className="w-3/6 pb-1 px-2">
                  {value?.title || "Not Selected"}
                </td>
                <td className="w-1/6 pb-1 px-2">
                  <LinkToOtherItemButton<
                    Partial<TeachingResource>,
                    { teachingResources: TeachingResource[] }
                  >
                    value={value}
                    onChange={onChange}
                    fetchPath="/admin-teaching-resources"
                    labelAttribute="title"
                    parseResponse={(response) => response.teachingResources}
                  />
                </td>
              </tr>
            )}
          />

          <Controller
            name="links.press"
            control={control}
            render={({ field: { value, onChange } }) => (
              <tr className="border-b-2 border-gray-300">
                <td className="py-5 w-2/6 px-2">Press</td>
                <td className="w-3/6 pb-1 px-2">
                  {value?.title || "Not Selected"}
                </td>
                <td className="w-1/6 pb-1 px-2">
                  <LinkToOtherItemButton<
                    Partial<Publication>,
                    { publications: Publication[] }
                  >
                    value={value}
                    onChange={onChange}
                    fetchPath="/admin-publications"
                    labelAttribute="title"
                    parseResponse={(response) => response.publications}
                  />
                </td>
              </tr>
            )}
          />

          {/* <Controller
            name="links.research"
            control={control}
            render={({ field: { value, onChange } }) => (
              <tr className="border-b-2 border-gray-300">
                <td className="py-5 w-2/6 px-2 font-semibold">
                  Research
                </td>
                <td className="w-3/6 pb-1 px-2">
                  {value?.title || "Not Selected"}
                </td>
                <td className="w-1/6 pb-1 px-2">
                  <LinkToOtherItemButton<
                    Partial<TeachingResource>,
                    { teachingResources: TeachingResource[] }
                  >
                    value={value}
                    onChange={onChange}
                    fetchPath="/admin-research"
                    labelAttribute="title"
                    parseResponse={(response) => response.teachingResources}
                  />
                </td>
              </tr>
            )}
          /> */}

          <Controller
            name="links.shop"
            control={control}
            render={({ field: { value, onChange } }) => (
              <tr className="border-b-2 border-gray-300">
                <td className="py-5 w-2/6 px-2">Shop Product</td>
                <td className="w-3/6 pb-1 px-2">
                  {value?.name || "Not Selected"}
                </td>
                <td className="w-1/6 pb-1 px-2">
                  <LinkToOtherItemButton<
                    Partial<Product>,
                    { products: Product[] }
                  >
                    value={value}
                    onChange={onChange}
                    fetchPath="/admin-products"
                    labelAttribute="name"
                    parseResponse={(response) => response.products}
                  />
                </td>
              </tr>
            )}
          />
        </tbody>
      </table>
    </div>
  );
};
