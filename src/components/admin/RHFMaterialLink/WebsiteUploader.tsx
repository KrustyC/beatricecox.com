import { useState } from "react";
import { MaterialLink } from "@/types/global";

interface WebsiteUploaderProps {
  value?: MaterialLink;
  onConfirm: (value: string) => void;
}

const URL_REGEX =
  /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;

export const WebsiteUploader: React.FC<
  React.PropsWithChildren<WebsiteUploaderProps>
> = ({ value, onConfirm }) => {
  const [input, setInput] = useState(
    value?.type === "website" ? value.value : ""
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onClickConfirm = () => onConfirm(input);

  return (
    <div className="flex h-[350px] flex-start px-2 py-4 justify-start flex-col">
      <label className="font-bold mb-2">
        Enter a URL for the website link. Once you pasted your link, please
        click confirm
      </label>
      <input
        value={input}
        type="url"
        onChange={onChange}
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      {input && (
        <div className="flex flex-col mt-2">
          <span className="font-bold text-sm">Preview:</span>
          <a
            className="text-primary"
            href={input}
            target="_blank"
            rel="noopener noreferrer"
          >
            {input}
          </a>
        </div>
      )}

      <button
        type="button"
        disabled={!URL_REGEX.test(input)}
        className="btn-admin btn-primary w-40 mt-8"
        onClick={onClickConfirm}
      >
        Confirm
      </button>
    </div>
  );
};
