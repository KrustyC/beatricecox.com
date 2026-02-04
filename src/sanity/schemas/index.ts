import { carouselBlockType, titleAndTextBlockType, fullScreenBlockType, gridBlockType, gridImagesType, projectInfoBlockType, titlesWithSideParagraphsBlockType, breakType } from "./blocks";
import { homePageType } from "./homePage";
import { projectType } from "./project";
import { aboutPageType } from "./aboutPage";
import { blockContentType } from "./blockContent";

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