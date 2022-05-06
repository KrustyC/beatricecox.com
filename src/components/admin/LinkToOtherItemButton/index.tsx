import type { ReactElement } from "react";
import { useState } from "react";
import { ChooseItemModal } from "./ChooseItemModal";

interface LinkToOtherItemProps<T, Response> {
  value?: T | null;
  onChange: (value: T) => void;
  fetchPath: string;
  labelAttribute: keyof T;
  parseResponse: (response: Response) => T[];
}

export const LinkToOtherItemButton = <
  T extends Record<string, unknown>,
  Response
>(
  props: LinkToOtherItemProps<T, Response>
): ReactElement | null => {
  const { value, onChange, fetchPath, labelAttribute, parseResponse } = props;
  const [showModal, setShowModal] = useState(false);

  const onSelectItem = (newValue: T) => {
    onChange(newValue);
    setShowModal(false);
  };

  const onShowModal = () => {
    setShowModal(true);
  };

  const onCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <ChooseItemModal
          fetchPath={fetchPath}
          currentItem={value || undefined}
          labelAttribute={labelAttribute}
          parseResponse={parseResponse}
          onSelectItem={onSelectItem}
          onCancel={onCancel}
        />
      )}

      <button
        className="btn-admin btn-primary btn-sm ml-4"
        type="button"
        onClick={onShowModal}
      >
        {!value ? "Add" : "Edit"} Link
      </button>
    </>
  );
};
