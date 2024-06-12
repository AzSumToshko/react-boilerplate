import { Pages } from "../constants/Pages";

// Interface for a single route in the page info
export interface Route {
  title: Pages;
  path: string;
}

// Interface for information about a single page
export interface PageInfo {
  title: Pages;
  route: Route[];
  imgPath: string;
}

// Interface for the PagesInfo object
export type PagesInfoType = {
  [key in Pages]: PageInfo;
};
