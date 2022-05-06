import { MaterialLink } from "@/types/global";
import { Modal } from "../Modal";
import { Tabs, Tab } from "../Tabs";
import { WebsiteUploader } from "./WebsiteUploader";
import { PdfUploader } from "./PdfUploader";

interface MaterialLinkModalProps {
  value: MaterialLink;
  onConfirm: (newLink: MaterialLink) => void;
  onCancel: VoidFunction;
}

export type FileEventTarget = React.ChangeEventHandler<HTMLInputElement> & {
  target: { files: FileList };
};

export const MaterialLinkModal: React.FC<MaterialLinkModalProps> = ({
  value,
  onConfirm,
  onCancel,
}) => {
  const onConfirmWebsite = (url: string) =>
    onConfirm({
      value: url,
      type: "website",
    });

  const onConfirmPdf = (url: string) =>
    onConfirm({
      value: url,
      type: "pdf",
    });

  const defaultLabel = value?.type === "pdf" ? "Pdf" : "Website";

  return (
    <Modal>
      <div className="p-4">
        <div className="mb-8">
          Please select the type of link you want to add, then add the link or
          upload the PDF.
        </div>
        <Tabs defaultLabel={defaultLabel}>
          <Tab label="Website">
            <WebsiteUploader value={value} onConfirm={onConfirmWebsite} />
          </Tab>

          <Tab label="Pdf">
            <PdfUploader value={value} onConfirm={onConfirmPdf} />
          </Tab>
        </Tabs>

        <div className="flex justify-end mt-4">
          <button className="btn-admin" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};
