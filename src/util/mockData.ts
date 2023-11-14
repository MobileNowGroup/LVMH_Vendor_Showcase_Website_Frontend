import type vendorItem from "@/model/vendor.model";
import { reactive } from "vue";

const allowedCommon = ["'self'"];
const vendorListMock: Array<vendorItem> = reactive([
  {
    id: 0,
    logoSrc:
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/logo-en-official_Kivisense_new.png",
    vendorName: "Kivisense",
    vendorShortName: "Kivisense",
    vendorFullName: "Chengdu Kivisense Technology Co., Ltd.",
    vendorCategory: "Product Discovery",
    vendorCategoryNum: 1, // vendorCategory的数量
    brandFounded: "2018",
    leadTime: "Try-on product: 2 weeks 3D modeling: 2 mandays per piece of SKU",
    vendorBrief:
      "Kivisense focuses on WebAR solutions in E-commerce and digital-marketing. We are a MarTech company that uses proprietary AI technology as its core to automatically create AR algorithm products through type AIGC technology capabilities. Our solutions cover multiple links in new retail including content, social, e-commerce, data, etc., and create value beyond reality for brand customers based on AI and AR capabilities. It's our duty to help your e-commerce integrate our SaaS faster, easier and better performance. It's omnichannel for your service including website, APP, Shopify, boutique store and popup store. Our AR platform Kivicube provides the base-engine of rendering, physics, the essential function in metaverse in digi-content authoring, aiming to solve the needs of AR mass production efficiency and difficulty, and provide secure and stable underlying support for UGC and PGC. Our AR try-on products provide full category product try-on capabilities for e-commerce brand customers, solving the urgent needs of consumers' online shopping, and being an important engine for brand GMV growth. Our AI algorithms provide customers with a wide range of AI scene customization requirements. We believe that AI can change the world, so we can kick it off from changing our own R&D efficiency.",
    briefIntroduction:
      "Our AR try-on products provide full category product try-on capabilities for e-commerce brand customers, solving the pain point needs of consumers' online shopping, and being an important engine for brand GMV growth. It's the omnichannel support from head to toe where you can try everthing from clothing, bag, shoes, jewelry, watches and even for bags.  The AR try-on is the end-computing engine, so there won't be anything uploaded to the cloud. Our 3D rendering engine is also our key product that we can shot 30 images of the product and let it automate the modeling process. We take a deep webgl development and you may see for the 3D of tiffany, it may have the best 3d quality.",
    vendorTags: ["#ProductDiscovery;", "#VirtualTry-on"],
    solutionCaseSrc:
      "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/logo-en-official_Kivisense_new.png",
    solutionCase:
      "We solve the painpoint of online shopping. It's quite hard for people who shop online to try-on see the style of the product. ",
    claimedKpis:
      "6million monthly purchase value from AR try-on for contact lens;10millon monthly add-to-cart value from our AR try-on page for high jewelry brand BVLGARI",
    priceModel:
      "About 20k - 40k Euro annual SaaS license for each AR try-on category with unlimited SKU and traffic. There wil be good discount for try-on head to toe of all the try-on license",
    priceModelCard: [
      {
        title: "Host",
        src: "/images/icon/hosting.svg",
        list: ["Private Cloud", "Cloud Provider", "On Premise"],
      },
      {
        title: "Integration",
        src: "/images/icon/integration.svg",
        list: [
          "Front End Integration",
          // "Front End Integration (Browse, HTML, JS)",
          // "Back End Integration (API)",
          "Back End Integration",
          "CRM Integration",
          "Specific Integration",
        ],
      },
      {
        title: "Mobile Integration",
        src: "/images/icon/mobileintegration.svg",
        list: ["API", "SDK", "Front end / Web"],
      },
      {
        // title: "PIPL (Personal Information Protection Law)",
        title: "PIPL",
        src: "/images/icon/PIPL.svg",
        list: ["Basic", "Advanced", "No Data Collected"],
      },
      {
        // title: "MLPS (Multi-Level Protection Scheme)",
        title: "MLPS",
        src: "/images/icon/MPLS.svg",
        list: ["Level 1", "Level 2", "Level 3"],
      },
    ],
    featureDemo: [
      {
        type: "link",
        desc: "AR try-on from head to toe",
        src: "https://www.youtube.com/watch?v=bu0QHVT2DyE&t=7s",
      },
      {
        type: "link",
        desc: "Ulysse Nardin watch try-on",
        src: "https://www.youtube.com/watch?v=EdUsFeXZmq0",
      },
      {
        type: "link",
        desc: "Celine bag 3D interaction",
        src: "https://www.youtube.com/watch?v=u76O_-xhlw4",
      },
      {
        type: "link",
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
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/celine_logo.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Link Only",
            exampleContent: "CELINE 3D:",
            exampleType: "link",
            exampleSrc:
              "https://meta.kivisense.com/celine-3d-web/index.html?sku=10I822DS9.04LU",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/bulgari_logo.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Link Only",
            exampleContent: "bvlgari AR try-on:",
            exampleType: "link",
            exampleSrc:
              "https://bvlgari.kivisense.com/bvlgari-tryon-center/index.html",
          },
          {
            exampleDesc: "Link Only",
            exampleContent: "bvlgari size guide:",
            exampleType: "link",
            exampleSrc: "https://www.bulgari.cn/zh-cn/products/an860189",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/tiffanylogo.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Link Only",
            exampleContent: "tiffany high quality 3D:",
            exampleType: "link",
            exampleSrc: "https://www.youtube.com/watch?v=IsYCnMgusEE",
          },
          {
            exampleDesc: "Link Only",
            exampleContent: "3D here:",
            exampleType: "link",
            exampleSrc:
              "https://meta.kivisense.com/tiffany-wx/display.html?sku=GRP11535",
          },
          {
            exampleDesc: "Link Only",
            exampleContent: "Tiffany AR try-on:",
            exampleType: "link",
            exampleSrc: "https://www.youtube.com/watch?v=LhjoFHOibr4",
          },
        ],
      },
      {
        logo: "https://meta.kivisense.com/celine-3d-web/index.html?sku=10I822DS9.04LU",
        isCommingSoon: true,
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/logo-christian-dior-couture.png",
        isCommingSoon: true,
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chaumet.png",
        isCommingSoon: true,
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/pomellato_logo.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Link Only",
            exampleContent: "sizing guide:",
            exampleType: "link",
            exampleSrc: "https://www.youtube.com/watch?v=_UOpG9BK7Lc",
          },
          {
            exampleDesc: "Link Only",
            exampleContent: "try here:",
            exampleType: "link",
            exampleSrc:
              "https://www.pomellato.com/en_intl/jewelry/rings/ring-nudo-classic-rose-gold-18kt-white-gold-18kt-blue-london-topaz?childSku=PAA1100_O6000_000TL_58",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/valention-logo.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Link Only",
            exampleContent: "shoes try-on:",
            exampleType: "link",
            exampleSrc: "https://www.youtube.com/watch?v=TW0TOK8gMbM",
          },
          {
            exampleDesc: "Link Only",
            exampleContent: "try here:",
            exampleType: "link",
            exampleSrc: "https://www.valentino.cn/zh-cn/WW2S0CS4RUSL71",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/gucci.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Link Only",
            exampleContent: "bracelace:",
            exampleType: "link",
            exampleSrc:
              "https://meta.kivisense.com/gucci-tmall-tryon-web/bracelet.html",
          },
          {
            exampleDesc: "Link Only",
            exampleContent:
              "gucci shoes try-on for wechat, tmall, website .cn (mobile only):",
            exampleType: "link",
            exampleSrc: "https://gucci.kivisense.com/",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Givenchy_logo.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Media Only",
            exampleContent: "",
            exampleType: "video",
            exampleSrc:
              "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/%E7%BA%AA%E6%A2%B5%E5%B8%8CGivenchy.mp4",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Chopard.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Media Only",
            exampleContent: "",
            exampleType: "video",
            exampleSrc:
              "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/%E8%90%A7%E9%82%A6chopard.mp4",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/%E5%AE%9D%E7%8F%80Blancpain.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Media Only",
            exampleContent: "",
            exampleType: "video",
            exampleSrc:
              "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/%E5%AE%9D%E7%8F%80Blancpain.mp4",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/stellamccartney.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Media Only",
            exampleContent: "",
            exampleType: "video",
            exampleSrc:
              "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/stellamccartney.mp4",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Etro.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Media Only",
            exampleContent: "",
            exampleType: "video",
            exampleSrc:
              "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/etro.mp4",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/EMPORIO_ARMANI.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Media Only",
            exampleContent: "",
            exampleType: "video",
            exampleSrc:
              "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Armani.mp4",
          },
          {
            exampleDesc: "Media Only",
            exampleContent: "",
            exampleType: "video",
            exampleSrc:
              "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Armani%E5%8C%85.mp4",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/alexanderwang.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Media Only",
            exampleContent: "",
            exampleType: "video",

            exampleSrc:
              "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/%E5%A4%A7%E7%8E%8BAlexander%20wang.mp4",
          },
        ],
      },
      {
        logo: "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Burberry.png",
        isCommingSoon: false,
        example: [
          {
            exampleDesc: "Media Only",
            exampleContent: "",
            exampleType: "video",
            exampleSrc:
              "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/BBY.mp4",
          },
          {
            exampleDesc: "Media Only",
            exampleContent: "",
            exampleType: "video",
            exampleSrc:
              "https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Burberry%20%E4%B8%8A%E7%BA%BFdemo.MOV",
          },
        ],
      },
    ],
    projectDetail: [
      {
        desc: "bvlgari AR try-on:",
        src: "https://bvlgari.kivisense.com/bvlgari-tryon-center/index.html",
      },
      {
        desc: "bvlgari size guide:",
        src: "https://www.bulgari.cn/zh-cn/products/an860189",
      },
      {
        desc: "tiffany high quality 3D:",
        src: "https://www.youtube.com/watch?v=IsYCnMgusEE",
      },
      {
        desc: "3D here:",
        src: "https://meta.kivisense.com/tiffany-wx/display.html?sku=GRP11535",
      },
      {
        desc: "Tiffany AR try-on:",
        src: "https://www.youtube.com/watch?v=LhjoFHOibr4",
      },
    ],
    vendorStatus: "2. Used by Maison",
    vendorDot: 2,
  }
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
    MenuTitle: "TECHNOLOGY",
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { desc: "AIGC", isChoosed: false },
      { desc: "ML", isChoosed: false },
      { desc: "NLP", isChoosed: false },
      { desc: "Computer Vision", isChoosed: false },
      { desc: "Screen", isChoosed: false },
      { desc: "Sensor", isChoosed: false },
      { desc: "Screen", isChoosed: false },
      { desc: "HardwareDevices", isChoosed: false },
      { desc: "VR", isChoosed: false },
      { desc: "AR", isChoosed: false },
      { desc: "Blockchain", isChoosed: false },
      { desc: "3D", isChoosed: false },
    ],
  },
  {
    MenuTitle: "APPLICATION",
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { desc: "VirualExhibition/Pop-up", isChoosed: false },
      { desc: "VirtualStore", isChoosed: false },
      { desc: "3DDisplay", isChoosed: false },
      { desc: "Gamification", isChoosed: false },
      { desc: "VirtualTry-on", isChoosed: false },
      { desc: "SizeMeasurement", isChoosed: false },
      { desc: "ContentAggregation", isChoosed: false },
      { desc: "PersonalRecommendation", isChoosed: false },
      { desc: "Gifting", isChoosed: false },
      { desc: "DigitalMessages", isChoosed: false },
      { desc: "NFT", isChoosed: false },
    ],
  },
  {
    MenuTitle: "CHANNEL",
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { desc: "Online", isChoosed: false },
      { desc: "Retail", isChoosed: false },
      { desc: "Omnichannel", isChoosed: false }
    ],
  },
  {
    MenuTitle: "PLATFORM",
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { desc: "Wechat", isChoosed: false },
      { desc: "Wecom", isChoosed: false },
      { desc: "Taobao", isChoosed: false },
      { desc: "Tmall", isChoosed: false },
      { desc: "JD", isChoosed: false },
      { desc: "Douyin", isChoosed: false },
      { desc: "Kuaishou", isChoosed: false },
      { desc: "H5", isChoosed: false },
      { desc: "Weibo", isChoosed: false },
      { desc: "RED", isChoosed: false },
    ],
  },
]);

export default {
  vendorListMock,
  filterListMock,
};
