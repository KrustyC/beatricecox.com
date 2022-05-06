import { useEditor, EditorContent } from "@tiptap/react";
import { FieldError } from "react-hook-form";
import StarterKit from "@tiptap/starter-kit";
import BubbleMenuExtension from "@tiptap/extension-bubble-menu";
import { InputErrorMessage } from "../InputErrorMessage";
import { BubbleMenu } from "./BubbleMenu";

interface EditorProps {
  value: string;
  error?: FieldError;
  onChange: (content: string) => void;
  onBlur?: VoidFunction;
}

export const Editor: React.FC<EditorProps> = ({
  value,
  error,
  onChange,
  onBlur,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      BubbleMenuExtension.configure({
        element: document.querySelector(".bubble-menu") as
          | HTMLElement
          | null
          | undefined,
      }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="relative min-h-full">
      {editor && <BubbleMenu editor={editor} />}

      <div
        className={`editor-container min-h-full shadow appearance-none border ${
          error ? "border-red-500" : ""
        } rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      >
        <EditorContent editor={editor} onBlur={onBlur} />
      </div>

      {error ? <InputErrorMessage message={error.message || ""} /> : null}
    </div>
  );
};
