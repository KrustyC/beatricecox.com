/* eslint-disable */
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
};

export type Asset = {
  __typename?: "Asset";
  contentType?: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  fileName?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
};

export type Project = Entry & {
  __typename?: "Project";
  blocksCollection?: Maybe<ProjectBlocksCollection>;
  category?: Maybe<Scalars["String"]["output"]>;
  categoryText?: Maybe<Scalars["String"]["output"]>;
  comingSoon?: Maybe<Scalars["Boolean"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  intro?: Maybe<Scalars["String"]["output"]>;
  isPasswordProtected?: Maybe<Scalars["Boolean"]["output"]>;
  mainImage?: Maybe<Asset>;
  metaDescription?: Maybe<Scalars["String"]["output"]>;
  order?: Maybe<Scalars["Int"]["output"]>;
  protectionPassword?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  thumbnailImage?: Maybe<Asset>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ProjectRichtextAssets = {
  __typename?: "ProjectRichtextAssets";
  block: Array<Maybe<Asset>>;
};

export type ProjectRichtextEntries = {
  __typename?: "ProjectRichtextEntries";
  block: Array<Maybe<Entry>>;
};

export type Richtext = {
  __typename?: "Richtext";
  json: Scalars["JSON"]["output"];
  links: RichtextLinks;
};

export type RichtextLinks = {
  __typename?: "RichtextLinks";
  assets: ProjectRichtextAssets;
  entries: ProjectRichtextEntries;
};

export type Sys = {
  __typename?: "Sys";
  id: Scalars["String"]["output"];
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type CarouselBlock = {
  __typename?: "CarouselBlock";
  imagesCollection?: Maybe<AssetCollection>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type FullScreenBlock = {
  __typename?: "FullScreenBlock";
  image?: Maybe<Asset>;
};

export type ProjectBlocksCollection = {
  __typename?: "ProjectBlocksCollection";
  items: Array<Maybe<ProjectBlocksItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ProjectInfoBlock = {
  __typename?: "ProjectInfoBlock";
  client?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Richtext>;
  role?: Maybe<Scalars["String"]["output"]>;
  skills?: Maybe<Scalars["String"]["output"]>;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  team?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type TitleTextBlock = {
  __typename?: "TitleTextBlock";
  colorCode?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Richtext>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type TitlesWithSideParagraphsBlock = {
  __typename?: "TitlesWithSideParagraphsBlock";
  colorCode?: Maybe<Scalars["String"]["output"]>;
  description1?: Maybe<Scalars["String"]["output"]>;
  description2?: Maybe<Scalars["String"]["output"]>;
  title1?: Maybe<Scalars["String"]["output"]>;
  title2?: Maybe<Scalars["String"]["output"]>;
};

export type ProjectBlocksItem =
  | CarouselBlock
  | FullScreenBlock
  | ProjectInfoBlock
  | TitleTextBlock
  | TitlesWithSideParagraphsBlock;
