import { aboutPageType } from "./aboutPage";
import { blockContentType } from "./blockContent";
import {
  breakType,
  carouselBlockType,
  fullScreenBlockType,
  gridBlockType,
  gridImagesType,
  projectInfoBlockType,
  titleAndTextBlockType,
  titlesWithSideParagraphsBlockType,
} from "./blocks";
import { homePageType } from "./homePage";
import { projectType } from "./project";

export const schemaTypes = [
  // Block content (rich text)
  blockContentType,

  // Block types (used within project)
  projectInfoBlockType,
  carouselBlockType,
  fullScreenBlockType,
  gridBlockType,
  gridImagesType,
  titleAndTextBlockType,
  titlesWithSideParagraphsBlockType,
  breakType,

  // Document types
  projectType,
  homePageType,
  aboutPageType,
];
