export type Banner = {
  mainBannerId: number;
  title: string;
  sort: number;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
  startDate: string;
  creator: string;
  updater: string;
  deleter: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type MainShortcut = {
  mainShortcutId: number;
  title: string;
  sort: 1;
  imageUrl: string;
  linkUrl: string;
  creator: string;
  updater: string;
  deleter: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type CollectionResponse = {
  items: Collection[];
  totalCount: number;
};

export type Collection = {
  id: number;
  type: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod: string | null;
  installmentPrice: string | null;
  installmentPeriod: string | null;
  rating: number;
  startDate: string | null;
  endDate: string | null;
  viewType: string | null;
  createdAt: string;
  items: CollectionItem[];
  media: Media[];
  thumbnail: Thumbnail;
  taggings: [];
  singleCollections: [];
};

type Thumbnail = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  uuid: string;
  mimeType: string;
  uri: string;
  fileName: string;
  objectKey: string;
  deviceType: string | null;
  collectionId: number;
  seq: number;
  itemKey: string | null;
  type: string;
};

type Media = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  uuid: string;
  mimeType: string;
  uri: string;
  fileName: string;
  objectKey: string;
  deviceType: string | null;
  collectionId: number;
  seq: number;
  itemKey: string | null;
  type: string;
};

type CollectionItem = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  uuid: string;
  name: string;
  body: string | null;
  collectionId: number;
  key: string;
  seq: number;
  entityType: string;
  entityId: number;
  optionKey: null;
  publication: {
    id: number;
    title: string;
    code: string;
    productId: number;
    prdType: number;
    detailEntity: string;
    content: string;
    offeringType: string;
    rating: number;
    isExistResidual: boolean;
    isAdult: number;
    preface: string;
    prefaceIconUrl: string;
    productName: string;
    brandName: string;
    media: {
      se: string;
      type: string;
      uri: string;
      mimeType: string;
      deviceType: string | null;
    }[];
    isTrial: true;
    tagsOnImage: string[];
    tagsOnDesc: [];
    priceInfo: {
      price: number;
      discountPrice: number;
      discountRate: number;
    };
    discounts: {
      id: number;
      name: string | null;
      type: string;
      calcMethod: string;
      value: number;
      activeFrom: string | null;
      activeTo: string | null;
      qty: number;
      remain: number | null;
    }[];
    applyCoupon: boolean;
  };
  prdType: number;
};
