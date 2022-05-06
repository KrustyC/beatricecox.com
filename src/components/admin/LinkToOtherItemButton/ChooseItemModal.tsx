import { ReactElement, useEffect } from "react";
import { useLinkerToExternalItem } from "@/hooks/useLinkerToExternalItem";
import { toast } from "react-toastify";
import { Modal } from "../Modal";
import { LoadingSpinner } from "../LoadingSpinner";

interface ChooseItemModalProps<T, Response> {
  fetchPath: string;
  currentItem?: T;
  labelAttribute: keyof T;
  parseResponse: (response: Response) => T[];
  onSelectItem: (value: T) => void;
  onCancel: VoidFunction;
}

export const ChooseItemModal = <T extends Record<string, unknown>, Response>(
  props: ChooseItemModalProps<T, Response>
): ReactElement | null => {
  const {
    fetchPath,
    currentItem,
    labelAttribute,
    parseResponse,
    onSelectItem,
    onCancel,
  } = props;

  const { items, loading, error } = useLinkerToExternalItem<T, Response>({
    fetchUrlPath: fetchPath,
    parseResponse: parseResponse,
  });

  useEffect(() => {
    if (error) {
      toast.error("Error fetching images");
    }
  }, [error]);

  const onChooseItem = (i: number) => {
    onSelectItem(items[i]);
  };

  return (
    <Modal>
      <div className="flex flex-col">
        <div>
          <div className="text-left px-5 flex-auto justify-center">
            <h2 className="text-2xl text-admin-primary font-bold py-4">
              Choose an item
            </h2>
          </div>

          {loading ? (
            <div className="h-24 flex align-center justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="flex flex-col">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center px-4 py-4 border-2 border-slate-300 rounded-xl mb-4 ${
                    item._id === currentItem?._id
                      ? "bg-orange-300 border-orange-400"
                      : ""
                  }`}
                >
                  {item[labelAttribute]}
                  <button
                    type="button"
                    disabled={item._id === currentItem?._id}
                    className="btn-admin btn-outlined-primary btn-sm disabled:opacity-50"
                    onClick={() => onChooseItem(index)}
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="text-right mt-8 pt-3 border-t-2 justify-end">
            <button
              type="button"
              className="btn-admin btn-danger"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
