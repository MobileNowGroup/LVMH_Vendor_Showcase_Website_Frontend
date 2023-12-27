
export type VendorBaseModel = {
  id:number;
  src:string;
  title:string;
  style:string;
  type:string;
  value:string;
  desc:string;
  itemArr:Array<VendorBaseModel>;
}
export type  exampleModel = VendorBaseModel & {}
export type BriefItemModel = VendorBaseModel & {}

export type TagItemModel = VendorBaseModel & {}

export type ServiceBrandLogoModel = VendorBaseModel & {}

export type BriefsIntroductionModel = VendorBaseModel & {}

export type UseCaseExampleModel = VendorBaseModel & {
  url:string;
}

export type ClaimedKpiModel = VendorBaseModel & {}

export type PriceModelCardItemModel = VendorBaseModel & {}

export type PriceModel = VendorBaseModel & {
  cards:Array<PriceModelCardItemModel>
}

export type FeatureDemoModel = VendorBaseModel & {
  links:Array<VendorBaseModel>;
  qrCodes:Array<VendorBaseModel>;
  videos:Array<VendorBaseModel>
}

export type BrandItemModel = VendorBaseModel & {
  logo:string;
  isCommingSoon:false;
  example:Array<VendorBaseModel>
}

export type ServiceBrandModel = VendorBaseModel & {
  brands:Array<BrandItemModel>
}

export type VendorItemModel  = VendorBaseModel & {
  id: number;
  logo: string;
  title: string;
  shortName: string;
  fullName:string;
  category: string;
  categoryCount: number;
  brandFounded: string;
  leadTime: string;
  dot: number;
  status: string;
  introductions: Array<BriefItemModel>;
  serviceBrandLogo: ServiceBrandLogoModel;
  briefsIntroduction: BriefsIntroductionModel;
  tags:Array<TagItemModel>;
  useCaseExample: UseCaseExampleModel;
  claimedKpis: ClaimedKpiModel;
  priceModelCard: PriceModel;
  featureDemo: FeatureDemoModel;
  serviceBrand: ServiceBrandModel;
}
