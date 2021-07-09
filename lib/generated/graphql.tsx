import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  recipeCollection?: Maybe<RecipeCollection>;
  featuredPageCollection?: Maybe<FeaturedPageCollection>;
  seoCollection?: Maybe<SeoCollection>;
  storyCollection?: Maybe<StoryCollection>;
  homeCollection?: Maybe<HomeCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsRecipeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsFeaturedPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsSeoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsStoryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags_exists?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ContentfulMetadataTagsFilter>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};



export type Entry = {
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type EntryFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  OR?: Maybe<Array<Maybe<EntryFilter>>>;
  AND?: Maybe<Array<Maybe<EntryFilter>>>;
};

export enum EntryOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Featured page on home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/featuredPage) */
export type FeaturedPage = Entry & {
  __typename?: 'FeaturedPage';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FeaturedPageLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Asset>;
  page?: Maybe<Heritage>;
};


/** Featured page on home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/featuredPage) */
export type FeaturedPageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Featured page on home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/featuredPage) */
export type FeaturedPageTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Featured page on home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/featuredPage) */
export type FeaturedPageDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Featured page on home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/featuredPage) */
export type FeaturedPageThumbnailArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Featured page on home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/featuredPage) */
export type FeaturedPagePageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FeaturedPageCollection = {
  __typename?: 'FeaturedPageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<FeaturedPage>>;
};

export type FeaturedPageFilter = {
  page?: Maybe<CfHeritageNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  thumbnail_exists?: Maybe<Scalars['Boolean']>;
  page_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<FeaturedPageFilter>>>;
  AND?: Maybe<Array<Maybe<FeaturedPageFilter>>>;
};

export type FeaturedPageLinkingCollections = {
  __typename?: 'FeaturedPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
};


export type FeaturedPageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FeaturedPageLinkingCollectionsHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum FeaturedPageOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Specific recipes page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/heritage) */
export type Heritage = Entry & {
  __typename?: 'Heritage';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HeritageLinkingCollections>;
  uid?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  recipesCollection?: Maybe<HeritageRecipesCollection>;
  seo?: Maybe<Seo>;
};


/** Specific recipes page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/heritage) */
export type HeritageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Specific recipes page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/heritage) */
export type HeritageUidArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Specific recipes page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/heritage) */
export type HeritageOrderArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Specific recipes page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/heritage) */
export type HeritageTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Specific recipes page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/heritage) */
export type HeritageRecipesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Specific recipes page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/heritage) */
export type HeritageSeoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type HeritageCollection = {
  __typename?: 'HeritageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Heritage>>;
};

export type HeritageFilter = {
  seo?: Maybe<CfSeoNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  uid_exists?: Maybe<Scalars['Boolean']>;
  uid?: Maybe<Scalars['String']>;
  uid_not?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_contains?: Maybe<Scalars['String']>;
  uid_not_contains?: Maybe<Scalars['String']>;
  order_exists?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  order_not?: Maybe<Scalars['Int']>;
  order_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order_gt?: Maybe<Scalars['Int']>;
  order_gte?: Maybe<Scalars['Int']>;
  order_lt?: Maybe<Scalars['Int']>;
  order_lte?: Maybe<Scalars['Int']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  recipesCollection_exists?: Maybe<Scalars['Boolean']>;
  seo_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<HeritageFilter>>>;
  AND?: Maybe<Array<Maybe<HeritageFilter>>>;
};

export type HeritageLinkingCollections = {
  __typename?: 'HeritageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  featuredPageCollection?: Maybe<FeaturedPageCollection>;
};


export type HeritageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type HeritageLinkingCollectionsFeaturedPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum HeritageOrder {
  UidAsc = 'uid_ASC',
  UidDesc = 'uid_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HeritageRecipesCollection = {
  __typename?: 'HeritageRecipesCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Recipe>>;
};


/** Home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/home) */
export type Home = Entry & {
  __typename?: 'Home';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HomeLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Asset>;
  featuredPageCollection?: Maybe<HomeFeaturedPageCollection>;
  seo?: Maybe<Seo>;
};


/** Home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/home) */
export type HomeLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/home) */
export type HomeTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/home) */
export type HomeHeroImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/home) */
export type HomeFeaturedPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Home page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/home) */
export type HomeSeoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type HomeCollection = {
  __typename?: 'HomeCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Home>>;
};

export type HomeFeaturedPageCollection = {
  __typename?: 'HomeFeaturedPageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<FeaturedPage>>;
};

export type HomeFilter = {
  seo?: Maybe<CfSeoNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  heroImage_exists?: Maybe<Scalars['Boolean']>;
  featuredPageCollection_exists?: Maybe<Scalars['Boolean']>;
  seo_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<HomeFilter>>>;
  AND?: Maybe<Array<Maybe<HomeFilter>>>;
};

export type HomeLinkingCollections = {
  __typename?: 'HomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomeLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum HomeOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};



export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  heritage?: Maybe<Heritage>;
  heritageCollection?: Maybe<HeritageCollection>;
  recipe?: Maybe<Recipe>;
  recipeCollection?: Maybe<RecipeCollection>;
  featuredPage?: Maybe<FeaturedPage>;
  featuredPageCollection?: Maybe<FeaturedPageCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  story?: Maybe<Story>;
  storyCollection?: Maybe<StoryCollection>;
  home?: Maybe<Home>;
  homeCollection?: Maybe<HomeCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QueryHeritageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHeritageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<HeritageFilter>;
  order?: Maybe<Array<Maybe<HeritageOrder>>>;
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryRecipeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<RecipeFilter>;
  order?: Maybe<Array<Maybe<RecipeOrder>>>;
};


export type QueryFeaturedPageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFeaturedPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<FeaturedPageFilter>;
  order?: Maybe<Array<Maybe<FeaturedPageOrder>>>;
};


export type QuerySeoArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySeoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SeoFilter>;
  order?: Maybe<Array<Maybe<SeoOrder>>>;
};


export type QueryStoryArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryStoryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<StoryFilter>;
  order?: Maybe<Array<Maybe<StoryOrder>>>;
};


export type QueryHomeArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<HomeFilter>;
  order?: Maybe<Array<Maybe<HomeOrder>>>;
};


export type QueryEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EntryFilter>;
  order?: Maybe<Array<Maybe<EntryOrder>>>;
};

/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type Recipe = Entry & {
  __typename?: 'Recipe';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<RecipeLinkingCollections>;
  uid?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnail?: Maybe<Asset>;
  sliderCollection?: Maybe<AssetCollection>;
  ingredients?: Maybe<RecipeIngredients>;
  preparation?: Maybe<RecipePreparation>;
  plating?: Maybe<RecipePlating>;
  cooksNote?: Maybe<RecipeCooksNote>;
  seo?: Maybe<Seo>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipeLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipeUidArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipeTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipeSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipeTagsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipeThumbnailArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipeSliderCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipeIngredientsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipePreparationArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipePlatingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipeCooksNoteArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A recipe [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/recipe) */
export type RecipeSeoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type RecipeCollection = {
  __typename?: 'RecipeCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Recipe>>;
};

export type RecipeCooksNote = {
  __typename?: 'RecipeCooksNote';
  json: Scalars['JSON'];
  links: RecipeCooksNoteLinks;
};

export type RecipeCooksNoteAssets = {
  __typename?: 'RecipeCooksNoteAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type RecipeCooksNoteEntries = {
  __typename?: 'RecipeCooksNoteEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type RecipeCooksNoteLinks = {
  __typename?: 'RecipeCooksNoteLinks';
  entries: RecipeCooksNoteEntries;
  assets: RecipeCooksNoteAssets;
};

export type RecipeFilter = {
  seo?: Maybe<CfSeoNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  uid_exists?: Maybe<Scalars['Boolean']>;
  uid?: Maybe<Scalars['String']>;
  uid_not?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_contains?: Maybe<Scalars['String']>;
  uid_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  subtitle_exists?: Maybe<Scalars['Boolean']>;
  subtitle?: Maybe<Scalars['String']>;
  subtitle_not?: Maybe<Scalars['String']>;
  subtitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtitle_contains?: Maybe<Scalars['String']>;
  subtitle_not_contains?: Maybe<Scalars['String']>;
  tags_exists?: Maybe<Scalars['Boolean']>;
  tags_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnail_exists?: Maybe<Scalars['Boolean']>;
  sliderCollection_exists?: Maybe<Scalars['Boolean']>;
  ingredients_exists?: Maybe<Scalars['Boolean']>;
  ingredients_contains?: Maybe<Scalars['String']>;
  ingredients_not_contains?: Maybe<Scalars['String']>;
  preparation_exists?: Maybe<Scalars['Boolean']>;
  preparation_contains?: Maybe<Scalars['String']>;
  preparation_not_contains?: Maybe<Scalars['String']>;
  plating_exists?: Maybe<Scalars['Boolean']>;
  plating_contains?: Maybe<Scalars['String']>;
  plating_not_contains?: Maybe<Scalars['String']>;
  cooksNote_exists?: Maybe<Scalars['Boolean']>;
  cooksNote_contains?: Maybe<Scalars['String']>;
  cooksNote_not_contains?: Maybe<Scalars['String']>;
  seo_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<RecipeFilter>>>;
  AND?: Maybe<Array<Maybe<RecipeFilter>>>;
};

export type RecipeIngredients = {
  __typename?: 'RecipeIngredients';
  json: Scalars['JSON'];
  links: RecipeIngredientsLinks;
};

export type RecipeIngredientsAssets = {
  __typename?: 'RecipeIngredientsAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type RecipeIngredientsEntries = {
  __typename?: 'RecipeIngredientsEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type RecipeIngredientsLinks = {
  __typename?: 'RecipeIngredientsLinks';
  entries: RecipeIngredientsEntries;
  assets: RecipeIngredientsAssets;
};

export type RecipeLinkingCollections = {
  __typename?: 'RecipeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heritageCollection?: Maybe<HeritageCollection>;
};


export type RecipeLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type RecipeLinkingCollectionsHeritageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum RecipeOrder {
  UidAsc = 'uid_ASC',
  UidDesc = 'uid_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type RecipePlating = {
  __typename?: 'RecipePlating';
  json: Scalars['JSON'];
  links: RecipePlatingLinks;
};

export type RecipePlatingAssets = {
  __typename?: 'RecipePlatingAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type RecipePlatingEntries = {
  __typename?: 'RecipePlatingEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type RecipePlatingLinks = {
  __typename?: 'RecipePlatingLinks';
  entries: RecipePlatingEntries;
  assets: RecipePlatingAssets;
};

export type RecipePreparation = {
  __typename?: 'RecipePreparation';
  json: Scalars['JSON'];
  links: RecipePreparationLinks;
};

export type RecipePreparationAssets = {
  __typename?: 'RecipePreparationAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type RecipePreparationEntries = {
  __typename?: 'RecipePreparationEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type RecipePreparationLinks = {
  __typename?: 'RecipePreparationLinks';
  entries: RecipePreparationEntries;
  assets: RecipePreparationAssets;
};

/** Seo [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/seo) */
export type Seo = Entry & {
  __typename?: 'Seo';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Asset>;
};


/** Seo [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Seo [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/seo) */
export type SeoTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Seo [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Seo [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/seo) */
export type SeoOgImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Seo>>;
};

export type SeoFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  ogImage_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<SeoFilter>>>;
  AND?: Maybe<Array<Maybe<SeoFilter>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heritageCollection?: Maybe<HeritageCollection>;
  recipeCollection?: Maybe<RecipeCollection>;
  storyCollection?: Maybe<StoryCollection>;
  homeCollection?: Maybe<HomeCollection>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SeoLinkingCollectionsHeritageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SeoLinkingCollectionsRecipeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SeoLinkingCollectionsStoryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SeoLinkingCollectionsHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum SeoOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** The story page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/story) */
export type Story = Entry & {
  __typename?: 'Story';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<StoryLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<StoryDescription>;
  signature?: Maybe<Scalars['String']>;
  photo?: Maybe<Asset>;
  seo?: Maybe<Seo>;
};


/** The story page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/story) */
export type StoryLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** The story page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/story) */
export type StoryTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** The story page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/story) */
export type StoryDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** The story page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/story) */
export type StorySignatureArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** The story page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/story) */
export type StoryPhotoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** The story page [See type definition](https://app.contentful.com/spaces/ip0p3v3kqvk3/content_types/story) */
export type StorySeoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type StoryCollection = {
  __typename?: 'StoryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Story>>;
};

export type StoryDescription = {
  __typename?: 'StoryDescription';
  json: Scalars['JSON'];
  links: StoryDescriptionLinks;
};

export type StoryDescriptionAssets = {
  __typename?: 'StoryDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type StoryDescriptionEntries = {
  __typename?: 'StoryDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type StoryDescriptionLinks = {
  __typename?: 'StoryDescriptionLinks';
  entries: StoryDescriptionEntries;
  assets: StoryDescriptionAssets;
};

export type StoryFilter = {
  seo?: Maybe<CfSeoNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  signature_exists?: Maybe<Scalars['Boolean']>;
  signature?: Maybe<Scalars['String']>;
  signature_not?: Maybe<Scalars['String']>;
  signature_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  signature_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  signature_contains?: Maybe<Scalars['String']>;
  signature_not_contains?: Maybe<Scalars['String']>;
  photo_exists?: Maybe<Scalars['Boolean']>;
  seo_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<StoryFilter>>>;
  AND?: Maybe<Array<Maybe<StoryFilter>>>;
};

export type StoryLinkingCollections = {
  __typename?: 'StoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type StoryLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum StoryOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SignatureAsc = 'signature_ASC',
  SignatureDesc = 'signature_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
};

export type CfHeritageNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  uid_exists?: Maybe<Scalars['Boolean']>;
  uid?: Maybe<Scalars['String']>;
  uid_not?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_contains?: Maybe<Scalars['String']>;
  uid_not_contains?: Maybe<Scalars['String']>;
  order_exists?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  order_not?: Maybe<Scalars['Int']>;
  order_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order_gt?: Maybe<Scalars['Int']>;
  order_gte?: Maybe<Scalars['Int']>;
  order_lt?: Maybe<Scalars['Int']>;
  order_lte?: Maybe<Scalars['Int']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  recipesCollection_exists?: Maybe<Scalars['Boolean']>;
  seo_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfHeritageNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfHeritageNestedFilter>>>;
};

export type CfSeoNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  ogImage_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfSeoNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfSeoNestedFilter>>>;
};

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = (
  { __typename?: 'Query' }
  & { home?: Maybe<(
    { __typename?: 'Home' }
    & Pick<Home, 'title'>
    & { heroImage?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'title' | 'url'>
    )>, featuredPageCollection?: Maybe<(
      { __typename?: 'HomeFeaturedPageCollection' }
      & { items: Array<Maybe<(
        { __typename?: 'FeaturedPage' }
        & Pick<FeaturedPage, 'title' | 'description'>
        & { page?: Maybe<(
          { __typename?: 'Heritage' }
          & Pick<Heritage, 'uid'>
        )>, thumbnail?: Maybe<(
          { __typename?: 'Asset' }
          & Pick<Asset, 'title' | 'url'>
        )> }
      )>> }
    )>, seo?: Maybe<(
      { __typename?: 'Seo' }
      & SeoFragment
    )> }
  )> }
);

export type PageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PageQuery = (
  { __typename?: 'Query' }
  & { heritage?: Maybe<(
    { __typename?: 'Heritage' }
    & { recipesCollection?: Maybe<(
      { __typename?: 'HeritageRecipesCollection' }
      & { items: Array<Maybe<(
        { __typename?: 'Recipe' }
        & Pick<Recipe, 'title' | 'uid'>
        & { thumbnail?: Maybe<(
          { __typename?: 'Asset' }
          & Pick<Asset, 'title' | 'url'>
        )> }
      )>> }
    )>, seo?: Maybe<(
      { __typename?: 'Seo' }
      & SeoFragment
    )> }
  )> }
);

export type HeritageQueryVariables = Exact<{ [key: string]: never; }>;


export type HeritageQuery = (
  { __typename?: 'Query' }
  & { heritageCollection?: Maybe<(
    { __typename?: 'HeritageCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Heritage' }
      & Pick<Heritage, 'uid' | 'order' | 'title'>
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ) }
    )>> }
  )> }
);

export type SliderFragment = (
  { __typename?: 'Recipe' }
  & { sliderCollection?: Maybe<(
    { __typename?: 'AssetCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'title' | 'url'>
    )>> }
  )> }
);

export type RecipeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type RecipeQuery = (
  { __typename?: 'Query' }
  & { recipe?: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'title' | 'subtitle'>
    & { thumbnail?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'title' | 'url'>
    )>, cooksNote?: Maybe<(
      { __typename?: 'RecipeCooksNote' }
      & Pick<RecipeCooksNote, 'json'>
    )>, plating?: Maybe<(
      { __typename?: 'RecipePlating' }
      & Pick<RecipePlating, 'json'>
    )>, preparation?: Maybe<(
      { __typename?: 'RecipePreparation' }
      & Pick<RecipePreparation, 'json'>
    )>, ingredients?: Maybe<(
      { __typename?: 'RecipeIngredients' }
      & Pick<RecipeIngredients, 'json'>
    )>, seo?: Maybe<(
      { __typename?: 'Seo' }
      & SeoFragment
    )> }
    & SliderFragment
  )> }
);

export type AllRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRecipesQuery = (
  { __typename?: 'Query' }
  & { recipeCollection?: Maybe<(
    { __typename?: 'RecipeCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'uid' | 'tags' | 'title' | 'subtitle'>
      & { thumbnail?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'title' | 'url'>
      )>, sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ) }
    )>> }
  )> }
);

export type StoryQueryVariables = Exact<{ [key: string]: never; }>;


export type StoryQuery = (
  { __typename?: 'Query' }
  & { story?: Maybe<(
    { __typename?: 'Story' }
    & Pick<Story, 'title' | 'signature'>
    & { description?: Maybe<(
      { __typename?: 'StoryDescription' }
      & Pick<StoryDescription, 'json'>
    )>, photo?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'title' | 'url'>
    )>, seo?: Maybe<(
      { __typename?: 'Seo' }
      & SeoFragment
    )> }
  )> }
);

export type SeoFragment = (
  { __typename?: 'Seo' }
  & Pick<Seo, 'title' | 'description'>
  & { ogImage?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'url'>
  )> }
);

export const SliderFragmentDoc = gql`
    fragment Slider on Recipe {
  sliderCollection {
    ... on AssetCollection {
      items {
        title
        url(transform: {quality: 70, width: 400})
      }
    }
  }
}
    `;
export const SeoFragmentDoc = gql`
    fragment Seo on Seo {
  title
  description
  ogImage {
    url(transform: {width: 1200, height: 630, resizeStrategy: FILL})
  }
}
    `;
export const HomeDocument = gql`
    query Home {
  home(id: "5PKbLvtccQnkKj7rDgcrti") {
    title
    heroImage {
      title
      url(transform: {width: 1920})
    }
    featuredPageCollection {
      items {
        title
        description
        page {
          uid
        }
        thumbnail {
          title
          url(transform: {width: 686})
        }
      }
    }
    seo {
      ...Seo
    }
  }
}
    ${SeoFragmentDoc}`;

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQuery(baseOptions?: Apollo.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeQuery, HomeQueryVariables>(HomeDocument, options);
      }
export function useHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeQuery, HomeQueryVariables>(HomeDocument, options);
        }
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = Apollo.QueryResult<HomeQuery, HomeQueryVariables>;
export const PageDocument = gql`
    query Page($id: String!) {
  heritage(id: $id) {
    recipesCollection {
      items {
        title
        uid
        thumbnail {
          title
          url
        }
      }
    }
    seo {
      ...Seo
    }
  }
}
    ${SeoFragmentDoc}`;

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePageQuery(baseOptions: Apollo.QueryHookOptions<PageQuery, PageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, options);
      }
export function usePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(PageDocument, options);
        }
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>;
export const HeritageDocument = gql`
    query Heritage {
  heritageCollection {
    items {
      uid
      order
      title
      sys {
        id
      }
    }
  }
}
    `;

/**
 * __useHeritageQuery__
 *
 * To run a query within a React component, call `useHeritageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeritageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeritageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeritageQuery(baseOptions?: Apollo.QueryHookOptions<HeritageQuery, HeritageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeritageQuery, HeritageQueryVariables>(HeritageDocument, options);
      }
export function useHeritageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeritageQuery, HeritageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeritageQuery, HeritageQueryVariables>(HeritageDocument, options);
        }
export type HeritageQueryHookResult = ReturnType<typeof useHeritageQuery>;
export type HeritageLazyQueryHookResult = ReturnType<typeof useHeritageLazyQuery>;
export type HeritageQueryResult = Apollo.QueryResult<HeritageQuery, HeritageQueryVariables>;
export const RecipeDocument = gql`
    query Recipe($id: String!) {
  recipe(id: $id) {
    title
    subtitle
    thumbnail {
      title
      url(transform: {quality: 70, width: 500})
    }
    cooksNote {
      json
    }
    plating {
      json
    }
    preparation {
      json
    }
    ingredients {
      json
    }
    ...Slider
    seo {
      ...Seo
    }
  }
}
    ${SliderFragmentDoc}
${SeoFragmentDoc}`;

/**
 * __useRecipeQuery__
 *
 * To run a query within a React component, call `useRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRecipeQuery(baseOptions: Apollo.QueryHookOptions<RecipeQuery, RecipeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, options);
      }
export function useRecipeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipeQuery, RecipeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, options);
        }
export type RecipeQueryHookResult = ReturnType<typeof useRecipeQuery>;
export type RecipeLazyQueryHookResult = ReturnType<typeof useRecipeLazyQuery>;
export type RecipeQueryResult = Apollo.QueryResult<RecipeQuery, RecipeQueryVariables>;
export const AllRecipesDocument = gql`
    query AllRecipes {
  recipeCollection {
    items {
      uid
      tags
      title
      thumbnail {
        title
        url(transform: {quality: 50, width: 300})
      }
      sys {
        id
      }
      subtitle
    }
  }
}
    `;

/**
 * __useAllRecipesQuery__
 *
 * To run a query within a React component, call `useAllRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllRecipesQuery(baseOptions?: Apollo.QueryHookOptions<AllRecipesQuery, AllRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllRecipesQuery, AllRecipesQueryVariables>(AllRecipesDocument, options);
      }
export function useAllRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllRecipesQuery, AllRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllRecipesQuery, AllRecipesQueryVariables>(AllRecipesDocument, options);
        }
export type AllRecipesQueryHookResult = ReturnType<typeof useAllRecipesQuery>;
export type AllRecipesLazyQueryHookResult = ReturnType<typeof useAllRecipesLazyQuery>;
export type AllRecipesQueryResult = Apollo.QueryResult<AllRecipesQuery, AllRecipesQueryVariables>;
export const StoryDocument = gql`
    query Story {
  story(id: "4UAL9RZSXVKduHbgZTW2TN") {
    title
    description {
      json
    }
    signature
    photo {
      title
      url(transform: {width: 560})
    }
    seo {
      ...Seo
    }
  }
}
    ${SeoFragmentDoc}`;

/**
 * __useStoryQuery__
 *
 * To run a query within a React component, call `useStoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useStoryQuery(baseOptions?: Apollo.QueryHookOptions<StoryQuery, StoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StoryQuery, StoryQueryVariables>(StoryDocument, options);
      }
export function useStoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StoryQuery, StoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StoryQuery, StoryQueryVariables>(StoryDocument, options);
        }
export type StoryQueryHookResult = ReturnType<typeof useStoryQuery>;
export type StoryLazyQueryHookResult = ReturnType<typeof useStoryLazyQuery>;
export type StoryQueryResult = Apollo.QueryResult<StoryQuery, StoryQueryVariables>;