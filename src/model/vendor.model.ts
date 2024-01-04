import { reactive } from 'vue'

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
  introductions: Array<VendorBaseModel>;
  serviceBrandLogo: ServiceBrandLogoModel;
  briefsIntroduction: BriefsIntroductionModel;
  tags: Array<VendorBaseModel>;
  useCaseExample: UseCaseExampleModel;
  claimedKpis: ClaimedKpiModel;
  priceModelCard: PriceModel;
  featureDemo: FeatureDemoModel;
  serviceBrand: ServiceBrandModel;
}
//获取公共模型数据
function getVendorBaseModel(baseData:Array<any>){
  let vendorBaseItemArr = [] as Array<VendorBaseModel>
  if (baseData.length) {
    baseData.forEach((element: any) => {
      let itemObj:VendorBaseModel = reactive({} as VendorBaseModel)
      itemObj.id = element.id  ?? 1
      itemObj.src = element.src ?? ""
      itemObj.title = element.title ?? ""
      itemObj.style = element.style ?? ""
      itemObj.type = element.type ?? ""
      itemObj.value = element.value ?? ""
      itemObj.desc = element.desc ?? ""
      itemObj.itemArr = getVendorBaseModel(element.itemArr ?? [])
      vendorBaseItemArr.push(itemObj)
    });
  }
  return vendorBaseItemArr
}
//获取卡片模型数据
export function getVendorCardData(vendorCardData:Array<any>){
  let vendorCardArr = [] as Array<VendorItemModel>
  vendorCardData.forEach((element)=>{
    let vendorItemM:VendorItemModel = reactive({} as VendorItemModel)
    vendorItemM.id = element.id
    vendorItemM.logo = element.logo
    vendorItemM.title = element.title
    vendorItemM.shortName = element.shortName
    vendorItemM.fullName = element.fullName
    vendorItemM.category = element.category
    vendorItemM.categoryCount = element.categoryCount
    vendorItemM.brandFounded = element.brandFounded
    vendorItemM.leadTime = element.leadTime
    vendorItemM.status = element.status
    vendorItemM.dot = element.dot
    //introductions
    vendorItemM.introductions = getVendorBaseModel(element.introductions)
    //serviceBrandLogo
    let serviceBrandLogoM = reactive({} as ServiceBrandLogoModel)
    serviceBrandLogoM.title = element.serviceBrandLogo.title
    serviceBrandLogoM.itemArr = getVendorBaseModel(element.serviceBrandLogo.itemArr)
    vendorItemM.serviceBrandLogo = serviceBrandLogoM
    //briefsIntroduction
    let briedfsIntroductionM = reactive({} as BriefsIntroductionModel)
    briedfsIntroductionM.title = element.briefsIntroduction.title
    briedfsIntroductionM.itemArr = getVendorBaseModel(element.briefsIntroduction.itemArr)
    vendorItemM.briefsIntroduction = briedfsIntroductionM
    //tags
    vendorItemM.tags = getVendorBaseModel(element.tags)
    //useCaseExample
    let useCaseExampleM = reactive({} as UseCaseExampleModel)
    useCaseExampleM.title = element.useCaseExample.title
    useCaseExampleM.url = element.useCaseExample.url
    useCaseExampleM.itemArr = getVendorBaseModel(element.useCaseExample.itemArr)
    vendorItemM.useCaseExample = useCaseExampleM
    //claimedKpis
    let claimedKpiM = reactive({} as ClaimedKpiModel)
    claimedKpiM.title = element.claimedKpis.title
    claimedKpiM.itemArr = getVendorBaseModel(element.claimedKpis.itemArr)
    vendorItemM.claimedKpis = claimedKpiM
    //priceModelCard
    let priceM = reactive({} as PriceModel)
    priceM.title = element.priceModelCard.title
    priceM.itemArr = getVendorBaseModel(element.priceModelCard.itemArr)
    priceM.cards = getVendorBaseModel(element.priceModelCard.cards)
    vendorItemM.priceModelCard = priceM
    //featureDemo
    let featureDemoM = reactive({} as FeatureDemoModel) 
    featureDemoM.title = element.featureDemo.title
    featureDemoM.links = getVendorBaseModel(element.featureDemo.links)
    featureDemoM.qrCodes = getVendorBaseModel(element.featureDemo.qrCodes)
    featureDemoM.videos = getVendorBaseModel(element.featureDemo.videos)
    vendorItemM.featureDemo = featureDemoM
    //serviceBrand
    let serviceBrandM = reactive({} as ServiceBrandModel)
    let brandArr = [] as Array<BrandItemModel>
    element.serviceBrand.brands.forEach((brandItem:any) => {
      let brandItemM = reactive({} as BrandItemModel)
      brandItemM.id = brandItem.id
      brandItemM.logo = brandItem.logo
      brandItemM.isCommingSoon = brandItem.isCommingSoon
      brandItemM.example = getVendorBaseModel(brandItem.example)
      brandArr.push(brandItemM)
    });
    serviceBrandM.brands = brandArr
    serviceBrandM.title = element.serviceBrand.title
    vendorItemM.serviceBrand = serviceBrandM
    vendorCardArr.push(vendorItemM)
  })
  return vendorCardArr
}