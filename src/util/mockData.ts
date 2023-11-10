import type vendorItem from "@/model/vendor.model";
import { reactive } from "vue";

const allowedCommon = ["'self'"];
const vendorListMock: Array<vendorItem> = reactive([
  {
    id: 0,
    logoSrc:
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/logo-en-official_Kivisense_new.png",
    vendorName: "Chengdu Kivisense Technology Co., Ltd.",
    vendorCategory: "Product Discovery",
    vendorCategoryNum: 12,
    brandFounded: "2018",
    leadTime: "Try-on product: 2 weeks 3D modeling: 2 mandays per piece of SKU",
    vendorBrief:
      "Kivisense focuses on WebAR solutions in E-commerce and digital-marketing. We are a MarTech company that uses proprietary AI technology as its core to automatically create AR algorithm products through type AIGC technology capabilities. Our solutions cover multiple links in new retail including content, social, e-commerce, data, etc., and create value beyond reality for brand customers based on AI and AR capabilities. It's our duty to help your e-commerce integrate our SaaS faster, easier and better performance. It's omnichannel for your service including website, APP, Shopify, boutique store and popup store. Our AR platform Kivicube provides the base-engine of rendering, physics, the essential function in metaverse in digi-content authoring, aiming to solve the needs of AR mass production efficiency and difficulty, and provide secure and stable underlying support for UGC and PGC. Our AR try-on products provide full category product try-on capabilities for e-commerce brand customers, solving the urgent needs of consumers' online shopping, and being an important engine for brand GMV growth. Our AI algorithms provide customers with a wide range of AI scene customization requirements. We believe that AI can change the world, so we can kick it off from changing our own R&D efficiency.",
    briefIntroduction:
      "Our AR try-on products provide full category product try-on capabilities for e-commerce brand customers, solving the pain point needs of consumers' online shopping, and being an important engine for brand GMV growth. It's the omnichannel support from head to toe where you can try everthing from clothing, bag, shoes, jewelry, watches and even for bags.  The AR try-on is the end-computing engine, so there won't be anything uploaded to the cloud. Our 3D rendering engine is also our key product that we can shot 30 images of the product and let it automate the modeling process. We take a deep webgl development and you may see for the 3D of tiffany, it may have the best 3d quality.",
    vendorTags: [
      "Application Scenario tags - #ProductDiscovery; ",
      "#VirtualTry-on",
    ],
    solutionCase:
      "We solve the painpoint of online shopping. It's quite hard for people who shop online to try-on see the style of the product. ",
    claimedKpis:
      "6million monthly purchase value from AR try-on for contact lens;10millon monthly add-to-cart value from our AR try-on page for high jewelry brand BVLGARI",
    priceModel:
      "About 20k - 40k Euro annual SaaS license for each AR try-on category with unlimited SKU and traffic. There wil be good discount for try-on head to toe of all the try-on license",
    featureDemo: [
      {
        desc: "AR try-on from head to toe",
        src: "https://www.youtube.com/watch?v=bu0QHVT2DyE&t=7s",
      },
      {
        desc: "Ulysse Nardin watch try-on",
        src: "https://www.youtube.com/watch?v=EdUsFeXZmq0",
      },
      {
        desc: "Celine bag 3D interaction",
        src: "https://www.youtube.com/watch?v=u76O_-xhlw4",
      },
      {
        desc: "Valentino shoes try-on",
        src: "https://www.youtube.com/watch?v=TW0TOK8gMbM",
      },
    ],
    serviceBrandLogos: [
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/lv_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/dior_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chaumet_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/bulgari_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/tiffany_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/celine_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/baiwei-logo.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/kering_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/gucci_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/GRAFF_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/qeelin_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/pomellato_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ulysse.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Loreal_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/YSL_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Maybelline.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/prada_white.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chivas_white_logo.png",
    ],
    serviceBrandProjects: [
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/celine_logo.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/bulgari_logo.png",
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/tiffanylogo.png",
    ],
    projectDetail:[
      {desc:"bvlgari AR try-on:",src:"https://bvlgari.kivisense.com/bvlgari-tryon-center/index.html"},
      {desc:"bvlgari size guide:",src:"https://www.bulgari.cn/zh-cn/products/an860189"},
      {desc:"tiffany high quality 3D:",src:"https://www.youtube.com/watch?v=IsYCnMgusEE"},
      {desc:"3D here:",src:"https://meta.kivisense.com/tiffany-wx/display.html?sku=GRP11535"},
      {desc:"Tiffany AR try-on:",src:"https://www.youtube.com/watch?v=LhjoFHOibr4"},
    ],
    vendorStatus: "2. Used by Maison;",
    vendorDot: 2,
  },
  {
    id: 1,
    logoSrc: "/images/vendor.png",
    vendorName: "hexapodant",
    vendorCategory: "In-store interactive experience ",
    vendorCategoryNum: 12,
    brandFounded: "1995.04.07",
    leadTime: "4 weeks",
    vendorBrief:
      "Founded in 2019, it is dedicated to using digital innovations and tools to create, and enhance the user experience online and offline.",
    vendorTags: ["Artificial Intelligence", "3D Display"],
    vendorStatus: "4. Blueprint",
    vendorDot: 3,
  },
  {
    id: 2,
    logoSrc: "/images/vendor.png",
    vendorName: "hexapodant",
    vendorCategory: "In-store interactive experience ",
    vendorCategoryNum: 12,
    brandFounded: "1995.04.07",
    leadTime: "4 weeks",
    vendorBrief:
      "ceshi in 2019, it is dedicated to using digital innovations and tools to create, and enhance the user experience online and offline.",
    vendorTags: ["Artificial Intelligence", "3D Display"],
    vendorStatus: "4. Blueprint",
    vendorDot: 2,
  },
  {
    id: 3,
    logoSrc: "/images/vendor.png",
    vendorName: "hexapodant",
    vendorCategory: "In-store interactive experience ",
    vendorCategoryNum: 12,
    brandFounded: "1995.04.07",
    leadTime: "4 weeks",
    vendorBrief:
      "test in 2019, it is dedicated to using digital innovations and tools to create, and enhance the user experience online and offline.",
    vendorTags: ["Artificial Intelligence", "3D Display"],
    vendorStatus: "4. Blueprint",
    vendorDot: 1,
  },
]);

const filterListMock = reactive([
  {
    MenuTitle: "category",
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { desc: "Customization & Personalization (4)", isChoosed: false },
      { desc: "Customer Service (2)", isChoosed: false },
      { desc: "In-store Interactive Experience (2)", isChoosed: false },
      { desc: "Metaverse (4)", isChoosed: false },
      { desc: "Product Discovery (1)", isChoosed: false },
    ],
  },
  {
    MenuTitle: "category",
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { desc: "Customization & Personalization (4)", isChoosed: false },
      { desc: "Customer Service (2)", isChoosed: false },
      { desc: "In-store Interactive Experience (2)", isChoosed: false },
      { desc: "Metaverse (4)", isChoosed: false },
      { desc: "Product Discovery (1)", isChoosed: false },
    ],
  },
  {
    MenuTitle: "category",
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { desc: "Customization & Personalization (4)", isChoosed: false },
      { desc: "Customer Service (2)", isChoosed: false },
      { desc: "In-store Interactive Experience (2)", isChoosed: false },
      { desc: "Metaverse (4)", isChoosed: false },
      { desc: "Product Discovery (1)", isChoosed: false },
    ],
  },
  {
    MenuTitle: "category",
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { desc: "Customization & Personalization (4)", isChoosed: false },
      { desc: "Customer Service (2)", isChoosed: false },
      { desc: "In-store Interactive Experience (2)", isChoosed: false },
      { desc: "Metaverse (4)", isChoosed: false },
      { desc: "Product Discovery (1)", isChoosed: false },
    ],
  },
]);

export default {
  vendorListMock,
  filterListMock,
};
