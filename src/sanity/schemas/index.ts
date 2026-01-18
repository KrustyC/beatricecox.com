import { aboutPage } from "./aboutPage";
import { blockContent } from "./blockContent";
import {
  carouselBlock,
  fullScreenBlock,
  gridBlock,
  projectInfoBlock,
  titleAndTextBlock,
  twoTitlesAndParagraphBlock,
} from "./blocks";
import { homepage } from "./homepage";
import { project } from "./project";

export const schemaTypes = [
  // Block content (rich text)
  blockContent,

  // Block types (used within project)
  projectInfoBlock,
  carouselBlock,
  fullScreenBlock,
  gridBlock,
  titleAndTextBlock,
  twoTitlesAndParagraphBlock,

  // Document types
  project,
  homepage,
  aboutPage,
];
