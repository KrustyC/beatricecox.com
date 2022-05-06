import type { Editor } from "@tiptap/react";
import { BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";

interface BubbleMenuProps {
  editor: Editor;
}

interface BubbleMenuButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<React.PropsWithChildren<BubbleMenuButtonProps>> = ({
  isActive,
  onClick,
  children,
}) => (
  <button
    className={`text-white h-8 w-8 border-r-2 rounded-l-lg border-white px-2 hover:bg-gray-600 ${
      isActive ? "text-emerald-500" : ""
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export const BubbleMenu: React.FC<React.PropsWithChildren<BubbleMenuProps>> = ({
  editor,
}) => {
  return (
    <TipTapBubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className="flex relative items-center bg-gray-800 rounded-lg py-4 h-8 z-50"
    >
      <Button
        isActive={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        B
      </Button>

      <Button
        isActive={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        i
      </Button>

      <Button
        isActive={editor.isActive("strike")}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        S
      </Button>
    </TipTapBubbleMenu>
  );
};
