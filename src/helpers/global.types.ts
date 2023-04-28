export type IObjectKeys = {
  [key: string]: any;
};

export enum LoadStatus {
  Idle,
  Loading,
  Failed,
  Success,
}

export interface IRequestData {
  page: number;
  per_page: number;
}
export interface IResponseErrors {
  response: {
    status: number;
    data: IResponseDataErrors;
    [key: string]: unknown;
  };
}

export interface IResponseDataErrors {
  cod: string;
  message: string;
}

export interface IVolume {
  value: number;
  unit: string;
}

export interface IHopeItem {
  add: string;
  amount: IVolume;
  attribute: string;
  name: string;
}

export interface IMaltItem {
  amount: IVolume;
  name: string;
}

export interface IMashTempItem {
  duration: number;
  temp: IVolume;
}

export interface IMethod {
  fermentation: {
    temp: IVolume
  };
  mash_temp: IMashTempItem[]
  twist: string | null;
}


export interface IIngredients {
  hops: IHopeItem[];
  malt: IMaltItem[];
  yeast: string;
}

export interface IBeerItem {
  abv: number;
  attenuation_level: number;
  boil_volume: IVolume;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: IIngredients;
  method: IMethod;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: IVolume;
}

export interface IAppStore {
  isSnackbarVisible: boolean;
  message: string;
}
