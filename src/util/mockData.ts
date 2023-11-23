import type vendorItem from '@/model/vendor.model'
import { reactive } from 'vue'

const allowedCommon = ["'self'"]
const vendorListMock: Array<vendorItem> = reactive([
  {
    id: 1,
    logoSrc:
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Kivisense_logo_new.png',
    vendorName: 'Chengdu Kivisense Technology Co., Ltd.',
    vendorShortName: 'Kivisense',
    vendorFullName: 'Chengdu Kivisense Technology Co., Ltd.',
    vendorCategory: 'Product Discovery',
    vendorCategoryNum: 1, // vendorCategory的数量
    brandFounded: '2018',
    leadTime:
      'Try-on product: 2 weeks; 3D modeling: 2 mandays per piece of SKU',
    vendorBrief:
      "Kivisense focuses on WebAR solutions in E-commerce and digital-marketing. We are a MarTech company that uses proprietary AI technology as its core to automatically create AR algorithm products through type AIGC technology capabilities. Our solutions cover multiple links in new retail including content, social, e-commerce, data, etc., and create value beyond reality for brand customers based on AI and AR capabilities. It's our duty to help your e-commerce integrate our SaaS faster, easier and better performance. It's omnichannel for your service including website, APP, Shopify, boutique store and popup store. Our AR platform Kivicube provides the base-engine of rendering, physics, the essential function in metaverse in digi-content authoring, aiming to solve the needs of AR mass production efficiency and difficulty, and provide secure and stable underlying support for UGC and PGC. Our AR try-on products provide full category product try-on capabilities for e-commerce brand customers, solving the urgent needs of consumers' online shopping, and being an important engine for brand GMV growth. Our AI algorithms provide customers with a wide range of AI scene customization requirements. We believe that AI can change the world, so we can kick it off from changing our own R&D efficiency.",
    briefIntroduction:
      "Our AR try-on products provide full category product try-on capabilities for e-commerce brand customers, solving the pain point needs of consumers' online shopping, and being an important engine for brand GMV growth. It's the omnichannel support from head to toe where you can try everthing from clothing, bag, shoes, jewelry, watches and even for bags.  The AR try-on is the end-computing engine, so there won't be anything uploaded to the cloud. Our 3D rendering engine is also our key product that we can shot 30 images of the product and let it automate the modeling process. We take a deep webgl development and you may see for the 3D of tiffany, it may have the best 3d quality.",
    vendorTags: ['#ProductDiscovery;', '#VirtualTry-on'],
    useCaseExampleSrc:
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/kivisense_painpoint.png',
    useCaseExample: [
      "We solve the painpoint of online shopping. It's quite hard for people who shop online to try-on see the style of the product.",
    ],
    claimedKpis: [
      '6million monthly purchase value from AR try-on for contact lens;10millon monthly add-to-cart value from our AR try-on page for high jewelry brand BVLGARI',
    ],
    cost: [
      'About 20k - 40k Euro annual SaaS license for each AR try-on category with unlimited SKU and traffic. There wil be good discount for try-on head to toe of all the try-on license',
    ],
    priceModelCard: [
      {
        id: 1,
        title: 'Host',
        src: '/images/icon/hosting.svg',
        list: ['Cloud Provider'],
      },
      {
        id: 2,
        title: 'Integration',
        src: '/images/icon/integration.svg',
        list: [
          'Front End Integration',
          // "Front End Integration (Browse, HTML, JS)",
          // "Back End Integration (API)",
          'Back End Integration',
          'CRM Integration',
        ],
      },
      {
        id: 3,
        title: 'Mobile Integration',
        src: '/images/icon/mobileintegration.svg',
        list: ['Front end / Web'],
      },
      {
        id: 4,
        // title: "PIPL (Personal Information Protection Law)",
        title: 'PIPL',
        src: '/images/icon/PIPL.svg',
        list: ['No Data Collected'],
      },
      {
        id: 5,
        // title: "MLPS (Multi-Level Protection Scheme)",
        title: 'MLPS',
        src: '/images/icon/MPLS.svg',
        list: ['Level 3'],
      },
    ],
    featureDemo: [
      {
        id: 1,
        type: 'link',
        desc: 'AR try-on from head to toe',
        src: 'https://www.youtube.com/watch?v=bu0QHVT2DyE&t=7s',
      },
      {
        id: 2,
        type: 'link',
        desc: 'Ulysse Nardin watch try-on',
        src: 'https://www.youtube.com/watch?v=EdUsFeXZmq0',
      },
      {
        id: 3,
        type: 'link',
        desc: 'Celine bag 3D interaction',
        src: 'https://www.youtube.com/watch?v=u76O_-xhlw4',
      },
      {
        id: 4,
        type: 'link',
        desc: 'Valentino shoes try-on',
        src: 'https://www.youtube.com/watch?v=TW0TOK8gMbM',
      },
    ],
    serviceBrandLogos: [
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/lv_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/dior_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chaumet_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/bulgari_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/tiffany_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/celine_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/baiwei-logo.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/kering_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/gucci_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/GRAFF_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/qeelin_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/pomellato_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ulysse.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Loreal_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/YSL_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Maybelline.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/prada_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chivas_white_logo.png',
    ],
    serviceBrandProjects: [
      {
        id: 1,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/celine_logo.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Link Only',
            exampleContent: 'CELINE 3D:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc:
                  'https://meta.kivisense.com/celine-3d-web/index.html?sku=10I822DS9.04LU',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/bulgari_logo.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Link Only',
            exampleContent: 'bvlgari AR try-on:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc:
                  'https://bvlgari.kivisense.com/bvlgari-tryon-center/index.html',
              },
            ],
          },
          {
            id: 2,
            exampleDesc: 'Link Only',
            exampleContent: 'bvlgari size guide:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc: 'https://www.bulgari.cn/zh-cn/products/an860189',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/tiffanylogo.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Link Only',
            exampleContent: 'tiffany high quality 3D:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc: 'https://www.youtube.com/watch?v=IsYCnMgusEE',
              },
            ],
          },
          {
            id: 2,
            exampleDesc: 'Link Only',
            exampleContent: '3D here:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc:
                  'https://meta.kivisense.com/tiffany-wx/display.html?sku=GRP11535',
              },
            ],
          },
          {
            id: 3,
            exampleDesc: 'Link Only',
            exampleContent: 'Tiffany AR try-on:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc: 'https://www.youtube.com/watch?v=LhjoFHOibr4',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/logo-christian-dior-couture.png',
        isCommingSoon: true,
      },
      {
        id: 5,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chaumet.png',
        isCommingSoon: true,
      },
      {
        id: 6,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/pomellato_logo.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Link Only',
            exampleContent: 'sizing guide:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc: 'https://www.youtube.com/watch?v=_UOpG9BK7Lc',
              },
            ],
          },
          {
            id: 2,
            exampleDesc: 'Link Only',
            exampleContent: 'try here:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc:
                  'https://www.pomellato.com/en_intl/jewelry/rings/ring-nudo-classic-rose-gold-18kt-white-gold-18kt-blue-london-topaz?childSku=PAA1100_O6000_000TL_58',
              },
            ],
          },
        ],
      },
      {
        id: 7,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/valention-logo.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Link Only',
            exampleContent: 'shoes try-on:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc: 'https://www.youtube.com/watch?v=TW0TOK8gMbM',
              },
            ],
          },
          {
            id: 2,
            exampleDesc: 'Link Only',
            exampleContent: 'try here:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc: 'https://www.valentino.cn/zh-cn/WW2S0CS4RUSL71',
              },
            ],
          },
        ],
      },
      {
        id: 8,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/gucci.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Link Only',
            exampleContent: 'bracelace:',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc:
                  'https://meta.kivisense.com/gucci-tmall-tryon-web/bracelet.html',
              },
            ],
          },
          {
            id: 2,
            exampleDesc: 'Link Only',
            exampleContent:
              'gucci shoes try-on for wechat, tmall, website .cn (mobile only):',
            exampleType: 'link',
            exampleArr: [
              {
                id: 1,
                type: 'link',
                exampleSrc: 'https://gucci.kivisense.com/',
              },
            ],
          },
        ],
      },
    ],
    projectDetail: [
      {
        id: 1,
        desc: 'bvlgari AR try-on:',
        src: 'https://bvlgari.kivisense.com/bvlgari-tryon-center/index.html',
      },
      {
        id: 2,
        desc: 'bvlgari size guide:',
        src: 'https://www.bulgari.cn/zh-cn/products/an860189',
      },
      {
        id: 3,
        desc: 'tiffany high quality 3D:',
        src: 'https://www.youtube.com/watch?v=IsYCnMgusEE',
      },
      {
        id: 4,
        desc: '3D here:',
        src: 'https://meta.kivisense.com/tiffany-wx/display.html?sku=GRP11535',
      },
      {
        id: 5,
        desc: 'Tiffany AR try-on:',
        src: 'https://www.youtube.com/watch?v=LhjoFHOibr4',
      },
    ],
    vendorStatus: '2. Used by Maison',
    vendorDot: 2,
  },
  {
    id: 2,
    logoSrc:
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/FancyTechLogoNew.png',
    vendorName: 'FANCY TECHNOLOGY (NANJING) CO., LTD',
    vendorShortName: 'FANCY TECH',
    vendorFullName: 'FANCY TECHNOLOGY (NANJING) CO., LTD',
    vendorCategory: 'Clienteling',
    vendorCategoryNum: 1, // vendorCategory的数量
    brandFounded: '2020',
    leadTime: '2-4 weeks',
    vendorBrief:
      ' Founded in 2020, FancyTech is committed to empowering intelligent businesses through self-developed AIGC technology. \n As a pioneer and significant driver in the AIGC field, we have always pursued a dual-track approach of technology-driven innovation and commercial implementation. By leveraging our industry-leading LLM model - FancyGPT, we drive content generation and management in consumer scenarios. We provide efficient and stable AIGC solutions to a vast number of consumer industry clients, achieving cost reduction and efficiency improvement.\n We firmly believe that AIGC will revolutionize traditional content generation and management methods. With its efficient and innovative generation capabilities, it will break barriers in content creation and unlock greater commercial value.',
    briefIntroduction:
      "Short-form video is becoming a vital part of every brand’s marketing strategy, the most popular medium for reaching mass audiences quickly. We've developed an industry-specific LLM, FancyGPT, tailored for short-from video generation. With our unique technology, we are able to create product centric short videos to highlight key product attributes in a cost-efficient way. Our solution combines 3D scanning technology with AI-driven video creation and rendering process, which allows our output videos to maintain high-quality product demonstration.",
    vendorTags: ['#AI', '#AIGC', '#3DDisplay'],
    useCaseExampleSrc: '',
    useCaseExample: [
      'Brand Pain Points: Inadequate availability of complete product styles for new arrivals, along with a lack of any video or image assets.',
      'Our Solution: We address these challenges by leveraging the available product styles to create 3D models for those items that are yet to arrive. These 3D models serve as the foundation for producing high-quality videos and images that showcase product functionality and intricate details, effectively compensating for the absence of traditional assets. This not only ensures a comprehensive representation of the entire product range but also offers a visually engaging and informative means of presenting these styles to customers.',
    ],
    claimedKpis: [
      'Click rate for products with 3D videos would be higher than those without videos\n High efficiency for the lead time, around/less than 2 weeks for a 3D video production',
      'Cost saving, Avg 30% off vs existing/traditional production house',
    ],
    cost: [
      'AIGC video: 5000-10000/per video (depends on category)\n 3D modeling: 2500-30000/SKU (depends on category)',
    ],
    priceModelCard: [
      {
        id: 1,
        title: 'Host',
        src: '/images/icon/hosting.svg',
        list: ['Cloud Provider'],
      },
      {
        id: 2,
        title: 'Integration',
        src: '/images/icon/integration.svg',
        list: [
          'Front End Integration (Browse, HTML, JS)',
          'Back End Integration (API)',
          'Specific Integration',
        ],
      },
      {
        id: 3,
        title: 'Mobile Integration',
        src: '/images/icon/mobileintegration.svg',
        list: ['API', 'SDK', 'Front end / Web'],
      },
      {
        id: 4,
        // title: "PIPL (Personal Information Protection Law)",
        title: 'PIPL',
        src: '/images/icon/PIPL.svg',
        list: ['No Data Collected'],
      },
      {
        id: 5,
        // title: "MLPS (Multi-Level Protection Scheme)",
        title: 'MLPS',
        src: '/images/icon/MPLS.svg',
        list: ['Level 1'],
      },
    ],
    featureDemo: [],
    serviceBrandLogos: [
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Givenchy_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Chopard_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/%E5%AE%9D%E7%8F%80Blancpain_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/stellamccartney_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Etro_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/EMPORIO_ARMANI_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/alexanderwang_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Burberry_white.png',
    ],
    serviceBrandProjects: [
      {
        id: 1,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Givenchy_logo.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Media Only',
            exampleContent: '',
            exampleType: 'video',
            exampleArr: [
              {
                id: 1,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/%E7%BA%AA%E6%A2%B5%E5%B8%8CGivenchy.mp4',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Chopard.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Meida Only',
            exampleContent: '',
            exampleType: 'video',
            exampleArr: [
              {
                id: 1,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/%E8%90%A7%E9%82%A6chopard.mp4',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/%E5%AE%9D%E7%8F%80Blancpain.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Meida Only',
            exampleContent: '',
            exampleType: 'video',
            exampleArr: [
              {
                id: 1,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/%E5%AE%9D%E7%8F%80Blancpain.mp4',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/stellamccartney.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Meida Only',
            exampleContent: '',
            exampleType: 'video',
            exampleArr: [
              {
                id: 1,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/stellamccartney.mp4',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Etro.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Meida Only',
            exampleContent: '',
            exampleType: 'video',
            exampleArr: [
              {
                id: 1,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/etro.mp4',
              },
            ],
          },
        ],
      },
      {
        id: 6,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/EMPORIO_ARMANI.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Meida Only',
            exampleContent: '',
            exampleType: 'video',
            exampleArr: [
              {
                id: 1,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Armani.mp4',
              },
              {
                id: 2,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Armani%E5%8C%85.mp4',
              },
            ],
          },
        ],
      },
      {
        id: 7,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/alexanderwang.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Meida Only',
            exampleContent: '',
            exampleType: 'video',
            exampleArr: [
              {
                id: 1,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/%E5%A4%A7%E7%8E%8BAlexander%20wang.mp4',
              },
            ],
          },
        ],
      },
      {
        id: 8,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Burberry.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Media Only',
            exampleContent: '',
            exampleType: 'video',
            exampleArr: [
              {
                id: 1,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/BBY.mp4',
              },
              {
                id: 2,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Burberry%20%E4%B8%8A%E7%BA%BFdemo.MOV',
              },
            ],
          },
        ],
      },
    ],
    vendorStatus: '2. Used by Maison',
    vendorDot: 2,
  },
  {
    id: 3,
    logoSrc:
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ICC%20Logo.png',
    vendorName: 'iCC Grow',
    vendorShortName: 'iCC Grow',
    vendorFullName: 'iCC Grow',
    vendorCategory: 'Clienteling',
    vendorCategoryNum: 1, // vendorCategory的数量
    brandFounded: '2019',
    leadTime: '4-6 weeks',
    vendorBrief:
      ' iCC Grow is an AI technology company that offers user growth services. Through chat technology solutions, it helps businesses establish valuable user connections and achieve commercial growth. iCC has experienced robust business growth in China, having served over 100 brands. Its SaaS products have rapidly expanded, covering top brands in sectors such as catering and apparel. With a cumulative user base of 320 million, coverage of 230,000 stores, and a total community of 1.65 million members, iCC has made a significant impact. The company has received the initial authorization from Microsoft China Azure AI, establishing itself as a pioneering enterprise in applying AI to brand-owned communication in the private domain.',
    briefIntroduction:
      "The integration of Chattech and AI equips sales assistants with an intelligent language package, enabling them to provide professional responses and enhance user interaction. AI utilizes a vast database to answer user queries, allowing sales assistants to adapt to different user preferences. Beyond addressing inquiries, AI offers sales recommendations throughout the customer lifecycle, including customer referrals, topic guidance, and content generation. The intelligent recommendation system analyzes user information, providing product recommendations and strategies to enhance conversion rates for high-value customers. AI alleviates the headquarters' data organization workload, offering quick summary tables and real-time anomaly alerts. The open cloud note feature assists sales assistants in creating personalized notes to meet their needs. Chattech and AI not only serve as assistants to sales, but also as intelligent tools to boost sales performance.",
    vendorTags: ['#Clienteling', '#AI', '#CSCmonitor'],
    useCaseExampleSrc: '',
    useCaseExample: [
      'Brand Pain Points:',
      'Time and Cost Investment: The traditional approach of training sales personnel consumes a significant amount of time and resources. Both brands and sales representatives undergo lengthy training cycles, resulting in a dual investment of cost and time as a major market pain point.Low Sales Efficiency and Conversion Rates: Traditional sales methods struggle to enhance sales efficiency and conversion rates. Sales representatives lack real-time tools to understand customer needs, leading to suboptimal interaction effects and challenges in achieving anticipated conversion rates.',
      'Solutions:',
      'AI Response - Providing Skillful Replies',
      "The combination of Chattech and AI is like enhancing a salesperson with an intelligent language package, enabling them to deliver more professional and skillful responses, thereby enhancing the warmth of the chat with users. For example, when a user asks a salesperson a question beyond their knowledge, AI can provide precise responses based on the brand's extensive database. Of course, the salesperson can customize different roles and tones of responses, allowing them to adapt to users with different chat preferences.",
      'AI Insight - Offering Expert Sales Strategies',
      'The AI can provide high-value recommendations to sales based on the user lifecycle, thereby improving sales performance. By analyzing user data and purchase habits, the system provides targeted recommendations to high-value customers and incentive suggestions to potential customers. This helps junior sales quickly achieve better sales results.',
      'AI Data Statistics',
      "Instant Business Data Summary: AI's data organization work can significantly reduce the headquarters' workload. Simply ask the AI assistant about this month's performance or ranking to receive a satisfying summary table.",
      'Data Analysis: Based on the data summary, the AI assistant can further analyze the data for you.',
      "Data Anomaly Alerts: Monitor data anomalies in real-time, such as a store's performance being three times higher than usual or fewer participants in a particular event, and receive timely alerts.",
      'AI Cloud Notes',
      'Assisting salespeople in automatically generating note content. Salespeople can customize cloud notes based on their needs, such as recommended usage scenarios, styling suggestions, and link them to order links.',
      'AI Consultation',
      'Copywriting: Let it help you write copies and polish cloud notes.',
      'Grassroots Platform Collection: Inquire with AI to organize links related to online shopping recommendations.',
    ],
    claimedKpis: [
      'Improvement in Business Performance:',
      'Enhanced Sales Team Efficiency: Achieving smarter sales interactions and more efficient customer management is expected to elevate the overall efficiency of the sales team.',
      'Strengthened Customer Relationships: Through more personalized and precise user interactions, there is potential to enhance customer awareness and loyalty to the brand, thereby increasing the stability of customer relationships.',
    ],
    cost: [
      'The expenses are divided into two main components. One part involves charging for accounts using AI functionalities within Enterprise WeChat, and the other relates to the cleaning work of the corpus.',
      'Accounts with AI functionalities: $2500 per account per year; (includes 6000 monthly AI information retrieval instances for one account, with the option to recharge beyond the allotted instances. Recharge starts at ¥1500, with a deduction of ¥1500 RMB for every 15,000 additional access instances.)',
      'Corpus cleaning: fees are determined based on the clarity difficulty and scale of the database: A one-time base fee of ¥30,000 RMB, with a monthly corpus cleaning fee quote of ¥25,000 RMB.',
    ],
    priceModelCard: [
      {
        id: 1,
        title: 'Host',
        src: '/images/icon/hosting.svg',
        list: ['Cloud Provider'],
      },
      {
        id: 2,
        title: 'Integration',
        src: '/images/icon/integration.svg',
        list: ['Back End Integration (API)'],
      },
      {
        id: 3,
        title: 'Mobile Integration',
        src: '/images/icon/mobileintegration.svg',
        list: ['API'],
      },
      {
        id: 4,
        // title: "PIPL (Personal Information Protection Law)",
        title: 'PIPL',
        src: '/images/icon/PIPL.svg',
        list: ['Basic'],
      },
      {
        id: 5,
        // title: "MLPS (Multi-Level Protection Scheme)",
        title: 'MLPS',
        src: '/images/icon/MPLS.svg',
        list: ['Level 3'],
      },
    ],
    featureDemo: [
      {
        id: 1,
        type: 'video',
        desc: '',
        src: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Featured%20Demo%20and%20%20Maison%20Cases_iCC.mp4',
      },
    ],
    serviceBrandLogos: [
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/lv_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/macdonald_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/burgerKing_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/subway_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/staccato_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LOCCITANE_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/starbucks_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/anta_white.png',
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/shell.png',
    ],
    serviceBrandProjects: [
      {
        id: 1,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/lv-logo-noir-ok.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            exampleDesc: 'Media Only',
            exampleContent: '',
            exampleType: 'video',
            exampleArr: [
              {
                id: 1,
                type: 'video',
                exampleSrc:
                  'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Featured%20Demo%20and%20%20Maison%20Cases_iCC.mp4',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/macdonald.png',
        isCommingSoon: true,
      },
      {
        id: 3,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/burgerKing.png',
        isCommingSoon: true,
      },
      {
        id: 4,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/subway.png',
        isCommingSoon: true,
      },
      {
        id: 5,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/staccato.png',
        isCommingSoon: true,
      },
      {
        id: 6,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LOCCITANE.png',
        isCommingSoon: true,
      },
      {
        id: 7,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/starbucks.png',
        isCommingSoon: true,
      },
      {
        id: 8,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/anta.png',
        isCommingSoon: true,
      },
      {
        id: 9,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/shell.png',
        isCommingSoon: true,
      },
    ],
    vendorStatus: '2. Used by Maison',
    vendorDot: 2,
  },
])

const filterListMock = reactive([
  {
    id: 1,
    MenuTitle: 'category',
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      {
        id: 1,
        desc: 'Customization & Personalization (4)',
        isChoosed: false,
        type: 'category',
      },
      {
        id: 2,
        desc: 'Customer Service (2)',
        isChoosed: false,
        type: 'category',
      },
      {
        id: 3,
        desc: 'In-store Interactive Experience (2)',
        isChoosed: false,
        type: 'category',
      },
      { id: 4, desc: 'Metaverse (4)', isChoosed: false, type: 'category' },
      {
        id: 5,
        desc: 'Product Discovery (1)',
        isChoosed: false,
        type: 'category',
      },
    ],
  },
  {
    id: 2,
    MenuTitle: 'TECHNOLOGY',
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { id: 1, desc: 'AI', isChoosed: false, type: 'tags' },
      { id: 2, desc: 'AIGC', isChoosed: false, type: 'tags' },
      { id: 3, desc: 'ML', isChoosed: false, type: 'tags' },
      { id: 4, desc: 'NLP', isChoosed: false, type: 'tags' },
      { id: 5, desc: 'Computer Vision', isChoosed: false, type: 'tags' },
      { id: 6, desc: 'InteractiveHardware', isChoosed: false, type: 'tags' },
      { id: 7, desc: 'Screen', isChoosed: false, type: 'tags' },
      { id: 8, desc: 'Sensor', isChoosed: false, type: 'tags' },
      { id: 9, desc: 'Screen', isChoosed: false, type: 'tags' },
      { id: 10, desc: 'HardwareDevices', isChoosed: false, type: 'tags' },
      { id: 11, desc: 'Web3', isChoosed: false, type: 'tags' },
      { id: 12, desc: 'VR', isChoosed: false, type: 'tags' },
      { id: 13, desc: 'AR', isChoosed: false, type: 'tags' },
      { id: 14, desc: 'Blockchain', isChoosed: false, type: 'tags' },
      { id: 15, desc: '3D', isChoosed: false, type: 'tags' },
    ],
  },
  {
    id: 3,
    MenuTitle: 'APPLICATION',
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      {
        id: 1,
        desc: 'VirualExhibition/Pop-up',
        isChoosed: false,
        type: 'tags',
      },
      { id: 2, desc: 'VirtualStore', isChoosed: false, type: 'tags' },
      { id: 3, desc: '3DDisplay', isChoosed: false, type: 'tags' },
      { id: 4, desc: 'Gamification', isChoosed: false, type: 'tags' },
      { id: 5, desc: 'VirtualTry-on', isChoosed: false, type: 'tags' },
      { id: 6, desc: 'SizeMeasurement', isChoosed: false, type: 'tags' },
      { id: 7, desc: 'ContentAggregation', isChoosed: false, type: 'tags' },
      { id: 8, desc: 'PersonalRecommendation', isChoosed: false, type: 'tags' },
      { id: 9, desc: 'Gifting', isChoosed: false, type: 'tags' },
      { id: 10, desc: 'DigitalMessages', isChoosed: false, type: 'tags' },
      { id: 11, desc: 'NFT', isChoosed: false, type: 'tags' },
    ],
  },
  {
    id: 4,
    MenuTitle: 'CHANNEL',
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { id: 1, desc: 'Online', isChoosed: false, type: 'tags' },
      { id: 2, desc: 'Retail', isChoosed: false, type: 'tags' },
      { id: 3, desc: 'Omnichannel', isChoosed: false, type: 'tags' },
    ],
  },
  {
    id: 5,
    MenuTitle: 'PLATFORM',
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { id: 1, desc: 'Wechat', isChoosed: false, type: 'tags' },
      { id: 2, desc: 'Wecom', isChoosed: false, type: 'tags' },
      { id: 3, desc: 'Taobao', isChoosed: false, type: 'tags' },
      { id: 4, desc: 'Tmall', isChoosed: false, type: 'tags' },
      { id: 5, desc: 'JD', isChoosed: false, type: 'tags' },
      { id: 6, desc: 'Douyin', isChoosed: false, type: 'tags' },
      { id: 7, desc: 'Kuaishou', isChoosed: false, type: 'tags' },
      { id: 8, desc: 'H5', isChoosed: false, type: 'tags' },
      { id: 9, desc: 'Weibo', isChoosed: false, type: 'tags' },
      { id: 10, desc: 'RED', isChoosed: false, type: 'tags' },
    ],
  },
  {
    id: 6,
    MenuTitle: 'STATUS',
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      { id: 1, desc: 'LVMH Programs', isChoosed: false, type: 'status' },
      { id: 2, desc: 'Used by Maison', isChoosed: false, type: 'status' },
      { id: 3, desc: 'LVMH recommended', isChoosed: false, type: 'status' },
      { id: 4, desc: 'Blueprint', isChoosed: false, type: 'status' },
    ],
  },
])

export default {
  vendorListMock,
  filterListMock,
}
