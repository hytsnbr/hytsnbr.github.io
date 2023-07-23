export type JsonData = {
  createdAt: number;
  info: Info[];
};

export type Info = {
  title: string;
  recordNumbers: string[];
  releaseDate: Date;
  jacketUrl: string;
  limited: boolean;
  series: string;
  artist: string;
  downloadSiteList: SiteList[];
  purchaseSiteList: SiteList[];
};

export type SiteList = {
  name: string;
  url: string;
  isHiRes: boolean;
};
