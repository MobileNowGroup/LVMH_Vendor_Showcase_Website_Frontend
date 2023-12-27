import { VendorItemModel ,getVendorCardData} from '@/model/vendor.model'
import { reactive } from 'vue'

const filterListMock = reactive([
  {
    id: 1,
    MenuTitle: 'category',
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      {
        id: 1,
        desc: 'Customization & Personalization',
        value: 0, //1,
        isChoosed: false,
        type: 'category',
      },
      {
        id: 2,
        desc: 'Customer Service',
        value: 0,
        isChoosed: false,
        type: 'category',
      },
      {
        id: 3,
        desc: 'In-store Interactive Experience',
        value: 0,
        isChoosed: false,
        type: 'category',
      },
      {
        id: 4,
        desc: 'Metaverse',
        value: 0,
        isChoosed: false,
        type: 'category',
      },
      {
        id: 5,
        desc: 'Product Discovery',
        value: 0, //1,
        isChoosed: false,
        type: 'category',
      },
      {
        id: 6,
        desc: 'Clienteling',
        value: 0, //'2',
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
      {
        id: 1,
        desc: 'AI',
        value: 0, //'2',
        isChoosed: false,
        type: 'tags',
      },
      {
        id: 2,
        desc: 'AIGC',
        value: 0, //'1',
        isChoosed: false,
        type: 'tags',
      },
      { id: 3, desc: 'ML', value: 0, isChoosed: false, type: 'tags' },
      { id: 4, desc: 'NLP', value: 0, isChoosed: false, type: 'tags' },
      {
        id: 5,
        desc: 'Computer Vision',
        value: 0,
        isChoosed: false,
        type: 'tags',
      },
      {
        id: 6,
        desc: 'InteractiveHardware',
        value: 0,
        isChoosed: false,
        type: 'tags',
      },
      { id: 7, desc: 'Screen', value: 0, isChoosed: false, type: 'tags' },
      { id: 8, desc: 'Sensor', value: 0, isChoosed: false, type: 'tags' },
      { id: 9, desc: 'Screen', value: 0, isChoosed: false, type: 'tags' },
      {
        id: 10,
        desc: 'HardwareDevices',
        value: 0,
        isChoosed: false,
        type: 'tags',
      },
      { id: 11, desc: 'Web3', value: 0, isChoosed: false, type: 'tags' },
      { id: 12, desc: 'VR', value: 0, isChoosed: false, type: 'tags' },
      { id: 13, desc: 'AR', value: 0, isChoosed: false, type: 'tags' },
      { id: 14, desc: 'Blockchain', value: 0, isChoosed: false, type: 'tags' },
      { id: 15, desc: '3D', value: 0, isChoosed: false, type: 'tags' },
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
        value: 0,
        isChoosed: false,
        type: 'tags',
      },
      {
        id: 2,
        desc: 'VirtualStore',
        value: 0,
        isChoosed: false,
        type: 'tags',
      },
      {
        id: 3,
        desc: '3DDisplay',
        value: 0, //'1',
        isChoosed: false,
        type: 'tags',
      },
      {
        id: 4,
        desc: 'Gamification',
        value: 0,
        isChoosed: false,
        type: 'tags',
      },
      {
        id: 5,
        desc: 'VirtualTry-on',
        value: 0, //'1',
        isChoosed: false,
        type: 'tags',
      },
      {
        id: 6,
        desc: 'SizeMeasurement',
        value: 0,
        isChoosed: false,
        type: 'tags',
      },
      {
        id: 7,
        desc: 'ContentAggregation',
        value: 0,
        isChoosed: false,
        type: 'tags',
      },
      {
        id: 8,
        desc: 'PersonalRecommendation',
        value: 0,
        isChoosed: false,
        type: 'tags',
      },
      { id: 9, desc: 'Gifting', value: 0, isChoosed: false, type: 'tags' },
      {
        id: 10,
        desc: 'DigitalMessages',
        value: 0,
        isChoosed: false,
        type: 'tags',
      },
      { id: 11, desc: 'NFT', value: 0, isChoosed: false, type: 'tags' },
    ],
  },
  {
    id: 4,
    MenuTitle: 'CHANNEL',
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      {
        id: 1,
        desc: 'Online',
        value: 0, //'1',
        isChoosed: false,
        type: 'tags',
      },
      { id: 2, desc: 'Retail', value: 0, isChoosed: false, type: 'tags' },
      { id: 3, desc: 'Omnichannel', value: 0, isChoosed: false, type: 'tags' },
    ],
  },
  {
    id: 5,
    MenuTitle: 'PLATFORM',
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      {
        id: 1,
        desc: 'Wechat',
        value: 0, //'1',
        isChoosed: false,
        type: 'tags',
      },
      {
        id: 2,
        desc: 'Wecom',
        value: 0, //'1',
        isChoosed: false,
        type: 'tags',
      },
      { id: 3, desc: 'Taobao', value: 0, isChoosed: false, type: 'tags' },
      { id: 4, desc: 'Tmall', value: 0, isChoosed: false, type: 'tags' },
      { id: 5, desc: 'JD', value: 0, isChoosed: false, type: 'tags' },
      { id: 6, desc: 'Douyin', value: 0, isChoosed: false, type: 'tags' },
      { id: 7, desc: 'Kuaishou', value: 0, isChoosed: false, type: 'tags' },
      {
        id: 8,
        desc: 'H5',
        value: 0, //'1',
        isChoosed: false,
        type: 'tags',
      },
      { id: 9, desc: 'Weibo', value: 0, isChoosed: false, type: 'tags' },
      { id: 10, desc: 'RED', value: 0, isChoosed: false, type: 'tags' },
    ],
  },
  {
    id: 6,
    MenuTitle: 'STATUS',
    selectedCount: 0,
    isShow: false,
    menuItemList: [
      {
        id: 1,
        desc: 'LVMH Programs',
        value: 0,
        isChoosed: false,
        type: 'status',
      },
      {
        id: 2,
        desc: 'Used by Maison',
        value: 0, //'3'
        isChoosed: false,
        type: 'status',
      },
      {
        id: 3,
        desc: 'LVMH recommended',
        value: 0, //'1'
        isChoosed: false,
        type: 'status',
      },
      { id: 4, desc: 'Blueprint', value: 0, isChoosed: false, type: 'status' },
    ],
  },
])
const vendorCardData: Array<any> = reactive([
  {
    id: 1,
    logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Kivisense_logo_new.png',
    title: 'Chengdu Kivisense Technology Co., Ltd.',
    shortName: 'Kivisense',
    fullName: 'Chengdu Kivisense Technology Co., Ltd.',
    category: 'Product Discovery',
    categoryCount: 1, // vendorCategory的数量
    brandFounded: '2018',
    leadTime:
      'Try-on product: 2 weeks; 3D modeling: 2 mandays per piece of SKU',
    status: '2. Used by Maison',
    dot: 2,
    introductions:[
      {
        id: 1,
        style: '',
        value:
          "Kivisense focuses on WebAR solutions in E-commerce and digital-marketing.",
      },{
        id: 2,
        style: '',
        value:
          "We are a MarTech company that uses proprietary AI technology as its core to automatically create AR algorithm products through type AIGC technology capabilities.",
      },{
        id: 3,
        style: '',
        value:
          "Our solutions cover multiple links in new retail including content, social, e-commerce, data, etc., and create value beyond reality for brand customers based on AI and AR capabilities.",
      },{
        id: 4,
        style: '',
        value:
          "It's our duty to help your e-commerce integrate our SaaS faster, easier and better performance. ",
      },{
        id: 5,
        style: '',
        value:
          "It's omnichannel for your service including website, APP, Shopify, boutique store and popup store. ",
      },{
        id: 6,
        style: '',
        value:
          "Our AR platform Kivicube provides the base-engine of rendering, physics, the essential function in metaverse in digi-content authoring, aiming to solve the needs of AR mass production efficiency and difficulty, and provide secure and stable underlying support for UGC and PGC.",
      },{
        id: 7,
        style: '',
        value:
          "Our AR try-on products provide full category product try-on capabilities for e-commerce brand customers, solving the urgent needs of consumers' online shopping, and being an important engine for brand GMV growth.",
      },{
        id: 8,
        style: '',
        value:
          "Our AI algorithms provide customers with a wide range of AI scene customization requirements.",
      },
      {
        id: 9,
        style: '',
        value:
          "We believe that AI can change the world, so we can kick it off from changing our own R&D efficiency.",
      },
    ],
    serviceBrandLogo:{ 
      title:"Service Brands",
      itemArr:[
        {id:1,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/lv_white.png'},
        {id:2,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/dior_white.png'},
        {id:3,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chaumet_white.png'},
        {id:4,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/bulgari_white.png'},
        {id:5,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/tiffany_white.png'},
        {id:6,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/celine_white.png'},
        {id:7,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/baiwei-logo.png'},
        {id:8,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/kering_white.png'},
        {id:9,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/gucci_white.png'},
        {id:10,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/GRAFF_white.png'},
        {id:11,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/qeelin_white.png'},
        {id:12,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/pomellato_white.png'},
        {id:13,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ulysse.png'},
        {id:14,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Loreal_white.png'},
        {id:15,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/YSL_white.png'},
        {id:16,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Maybelline.png'},
        {id:17,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/prada_white.png'},
        {id:18,value:'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chivas_white_logo.png'},
      ]
    },
    briefsIntroduction: {
      title:"Brief Introduction of Product / Service",
      itemArr:[
        {
          id: 1,
          style: '',
          value:
            "Our AR try-on products provide full category product try-on capabilities for e-commerce brand customers, solving the pain point needs of consumers' online shopping, and being an important engine for brand GMV growth. It's the omnichannel support from head to toe where you can try everthing from clothing, bag, shoes, jewelry, watches and even for bags.  The AR try-on is the end-computing engine, so there won't be anything uploaded to the cloud. Our 3D rendering engine is also our key product that we can shot 30 images of the product and let it automate the modeling process. We take a deep webgl development and you may see for the 3D of tiffany, it may have the best 3d quality.",
        },
      ]
    },
    tags: [ {id:1,value:"#ProductDiscovery"},{id:2,value:"#VirtualTry-on"} ],
    useCaseExample: {
      title:"Use Case Example",
      url:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/kivisense_painpoint.png",
      itemArr:[
        {
          id: 1,
          style: '',
          value:
            "We solve the painpoint of online shopping. It's quite hard for people who shop online to try-on see the style of the product.",
        },
      ],
    },
    claimedKpis: {
      title:"Claimed Kpis",
      itemArr:[
        {
          id: 1,
          style: '',
          value:
            '6million monthly purchase value from AR try-on for contact lens;10millon monthly add-to-cart value from our AR try-on page for high jewelry brand BVLGARI',
        },
      ],
    },
    priceModelCard: {
      title:"Pricing Model",
      itemArr:[
        {
          id: 1,
          style: '',
          value:
            'About 20k - 40k Euro annual SaaS license for each AR try-on category with unlimited SKU and traffic. There wil be good discount for try-on head to toe of all the try-on license',
        },
      ],
      cards:[
        {
          id: 1,
          title: 'Host',
          src: '/images/icon/hosting.svg',
          itemArr: [{id:1,value:"Cloud Provider",type:""}],
        },
        {
          id: 2,
          title: 'Integration',
          src: '/images/icon/integration.svg',
          itemArr: [
            {id:1,value:"Front End Integration",type:""},
            {id:2,value:"Back End Integration",type:""},
            {id:3,value:"CRM Integration",type:""},
          ],
        },
        {
          id: 3,
          title: 'Mobile Integration',
          src: '/images/icon/mobileintegration.svg',
          itemArr: [{id:1,value:"Front end / Web",type:""},],
        },
        {
          id: 4,
          title: 'PIPL',
          src: '/images/icon/PIPL.svg',
          itemArr: [{id:1,value:"No Data Collected",type:""}],
        },
        {
          id: 5,
          title: 'MLPS',
          src: '/images/icon/MPLS.svg',
          itemArr: [{id:1,value:"Level 3",type:""}],
        },
      ]
    },
    featureDemo: {
      title:"Featured Demo",
      links: [
        {
          id: 1,
          type: 'link',
          value: 'AR try-on from head to toe',
          src: 'https://www.youtube.com/watch?v=bu0QHVT2DyE&t=7s',
        },
        {
          id: 2,
          type: 'link',
          value: 'Ulysse Nardin watch try-on',
          src: 'https://www.youtube.com/watch?v=EdUsFeXZmq0',
        },
        {
          id: 3,
          type: 'link',
          value: 'Celine bag 3D interaction',
          src: 'https://www.youtube.com/watch?v=u76O_-xhlw4',
        },
        {
          id: 4,
          type: 'link',
          value: 'Valentino shoes try-on',
          src: 'https://www.youtube.com/watch?v=TW0TOK8gMbM',
        },
      ],
      qrCodes: [],
      videos: [],
    },
    serviceBrand: {
      title:"Service Brands",
      brands:[
        {
          id: 1,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/celine_logo.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: 'CELINE 3D:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value:
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
              desc: '',
              value: 'bvlgari AR try-on:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value:
                    'https://bvlgari.kivisense.com/bvlgari-tryon-center/index.html',
                },
              ],
            },
            {
              id: 2,
              desc: '',
              value: 'bvlgari size guide:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value: 'https://www.bulgari.cn/zh-cn/products/an860189',
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
              desc: '',
              value: 'tiffany high quality 3D:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value: 'https://www.youtube.com/watch?v=IsYCnMgusEE',
                },
              ],
            },
            {
              id: 2,
              desc: '',
              value: '3D here:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value:
                    'https://meta.kivisense.com/tiffany-wx/display.html?sku=GRP11535',
                },
              ],
            },
            {
              id: 3,
              desc: '',
              value: 'Tiffany AR try-on:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value: 'https://www.youtube.com/watch?v=LhjoFHOibr4',
                },
              ],
            },
          ],
        },
        {
          id: 4,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/logo-christian-dior-couture.png',
          isCommingSoon: true,
          example:[]
        },
        {
          id: 5,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chaumet.png',
          isCommingSoon: true,
          example:[],
        },
        {
          id: 6,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/pomellato_logo.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: 'sizing guide:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value: 'https://www.youtube.com/watch?v=_UOpG9BK7Lc',
                },
              ],
            },
            {
              id: 2,
              desc: '',
              value: 'try here:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value:
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
              desc: '',
              value: 'shoes try-on:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value: 'https://www.youtube.com/watch?v=TW0TOK8gMbM',
                },
              ],
            },
            {
              id: 2,
              desc: '',
              value: 'try here:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value: 'https://www.valentino.cn/zh-cn/WW2S0CS4RUSL71',
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
              desc: '',
              value: 'bracelace:',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value:
                    'https://meta.kivisense.com/gucci-tmall-tryon-web/bracelet.html',
                },
              ],
            },
            {
              id: 2,
              desc: '',
              value:
                'gucci shoes try-on for wechat, tmall, website .cn (mobile only):',
              type: 'link',
              itemArr: [
                {
                  id: 1,
                  type: 'link',
                  value: 'https://gucci.kivisense.com/',
                },
              ],
            },
          ],
        },
      ]
    },
  },
  {
    id: 2,
    logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/FancyTechLogoNew.png',
    title: 'FANCY TECHNOLOGY (NANJING) CO., LTD',
    shortName: 'FANCY TECH',
    fullName: 'FANCY TECHNOLOGY (NANJING) CO., LTD',
    category: 'Clienteling',
    categoryCount: 1, // vendorCategory的数量
    brandFounded: '2020',
    leadTime: '2-4 weeks',
    status: '2. Used by Maison',
    dot: 2,
    introductions:[
      {
        id: 1,
        style: '',
        value:
          "Founded in 2020, FancyTech is committed to empowering intelligent businesses through self-developed AIGC technology.",
      },{
        id: 2,
        style: '',
        value:
          "As a pioneer and significant driver in the AIGC field, we have always pursued a dual-track approach of technology-driven innovation and commercial implementation. By leveraging our industry-leading LLM model - FancyGPT, we drive content generation and management in consumer scenarios.",
      },{
        id: 3,
        style: '',
        value:
          "Short-form video is becoming a vital part of every brand’s marketing strategy, the most popular medium for reaching mass audiences quickly.",
      },{
        id: 4,
        style: '',
        value:
          "We've developed an industry-specific LLM, FancyGPT, tailored for short-from video generation.",
      },{
        id: 5,
        style: '',
        value:
          "We provide efficient and stable AIGC solutions to a vast number of consumer industry clients, achieving cost reduction and efficiency improvement.",
      },{
        id: 6,
        style: '',
        value:
          "We firmly believe that AIGC will revolutionize traditional content generation and management methods.",
      },{
        id: 7,
        style: '',
        value:
          "With its efficient and innovative generation capabilities, it will break barriers in content creation and unlock greater commercial value.",
      },
    ],
    serviceBrandLogo:{
      title:"Service Brands",
      itemArr:[
        {id:1,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Givenchy_white.png"},
        {id:2,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Chopard_white.png"},
        {id:3,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/%E5%AE%9D%E7%8F%80Blancpain_white.png"},
        {id:4,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/stellamccartney_white.png"},
        {id:5,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Etro_white.png"},
        {id:6,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/EMPORIO_ARMANI_white.png"},
        {id:7,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/alexanderwang_white.png"},
        {id:8,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Burberry_white.png"},
      ],
    },
    briefsIntroduction:{
      title:"Brief Introduction of Product / Service",
      itemArr:[
        {
          id: 1,
          style: '',
          value:
            "  With our unique technology, we are able to create product centric short videos to highlight key product attributes in a cost-efficient way. Our solution combines 3D scanning technology with AI-driven video creation and rendering process, which allows our output videos to maintain high-quality product demonstration.",
        },
      ],
    },
    tags: [{id:1,value:"#AI"},{id:2,value:"#AIGC"},{id:3,value:"#3DDisplay"}],
    useCaseExample:{ 
      title:"Use Case Example",
      url:"",
      itemArr: [
          {
            id: 1,
            style: '',
            value:
              'Brand Pain Points: Inadequate availability of complete product styles for new arrivals, along with a lack of any video or image assets.',
          },
          {
            id: 2,
            style: '',
            value:
              'Our Solution: We address these challenges by leveraging the available product styles to create 3D models for those items that are yet to arrive. These 3D models serve as the foundation for producing high-quality videos and images that showcase product functionality and intricate details, effectively compensating for the absence of traditional assets. This not only ensures a comprehensive representation of the entire product range but also offers a visually engaging and informative means of presenting these styles to customers.',
          },
        ],
    },
    claimedKpis:{ 
      title:"Claimed Kpis",
      itemArr:[
        {
          id: 1,
          style: '',
          value:
            'Click rate for products with 3D videos would be higher than those without videos\n High efficiency for the lead time, around/less than 2 weeks for a 3D video production',
        },
        {
          id: 2,
          style: '',
          value:
            'Cost saving, Avg 30% off vs existing/traditional production house',
        },
      ],
    },
    priceModelCard:{
      title:"Pricing Model",
      itemArr:[
        { id: 1, style: '',value: 'AIGC video: 5000-10000/per video (depends on category)',},
        {id:2,style:'',value:"3D modeling: 2500-30000/SKU (depends on category)"},
      ],
      cards: [
        {
          id: 1,
          title: 'Host',
          src: '/images/icon/hosting.svg',
          itemArr: [{id:1,value:"Cloud Provider",type:""}],
        },
        {
          id: 2,
          title: 'Integration',
          src: '/images/icon/integration.svg',
          itemArr: [
            {id:1,value:"Front End Integration (Browse, HTML, JS)",type:""},
            {id:2,value:"Back End Integration (API)",type:""},
            {id:3,value:"Specific Integration",type:""},
          ],
        },
        {
          id: 3,
          title: 'Mobile Integration',
          src: '/images/icon/mobileintegration.svg',
          itemArr: [
            {id:1,value:"API",type:""},
            {id:2,value:"SDK",type:""},
            {id:3,value:"Front end / Web",type:""}
          ],
        },
        {
          id: 4,
          title: 'PIPL',
          src: '/images/icon/PIPL.svg',
          itemArr: [{id:1,value:"No Data Collected",type:""}],
        },
        {
          id: 5,
          // title: "MLPS (Multi-Level Protection Scheme)",
          title: 'MLPS',
          src: '/images/icon/MPLS.svg',
          itemArr: [{id:1,value:"Level 1",type:""}],
        },
      ],
    },
    featureDemo: {
      title:"Featured Demo",
      links: [],
      qrCodes: [],
      videos: [],
    },
    serviceBrand: {
      title:"Service Brands",
      brands: [
        {
          id: 1,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Givenchy_logo.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: '',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
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
              desc: '',
              value: '',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
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
              desc: '',
              value: '',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
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
              desc: '',
              value: '',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
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
              desc: '',
              value: '',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
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
              desc: '',
              value: '',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Armani.mp4',
                },
                {
                  id: 2,
                  type: 'video',
                  value:
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
              desc: '',
              value: '',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
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
              desc: '',
              value: '',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/BBY.mp4',
                },
                {
                  id: 2,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Burberry%20%E4%B8%8A%E7%BA%BFdemo.MOV',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ICC%20Logo.png',
    title: 'iCC Grow',
    shortName: 'iCC Grow',
    fullName: 'iCC Grow',
    category: 'Clienteling',
    categoryCount: 1, // vendorCategory的数量
    brandFounded: '2019',
    leadTime: '4-6 weeks',
    status: '2. Used by Maison',
    dot: 2,
    introductions:[
      {
        id: 1,
        style: '',
        value:"iCC Grow is an AI technology company that offers user growth services.",
      },{
        id: 2,
        style: '',
        value:"Through chat technology solutions, it helps businesses establish valuable user connections and achieve commercial growth.",
      },{
        id: 3,
        style: '',
        value:"iCC has experienced robust business growth in China, having served over 100 brands.",
      },{
        id: 4,
        style: '',
        value:"Its SaaS products have rapidly expanded, covering top brands in sectors such as catering and apparel.",
      },{
        id: 5,
        style: '',
        value:"With a cumulative user base of 320 million, coverage of 230,000 stores, and a total community of 1.65 million members, iCC has made a significant impact.",
      },{
        id: 6,
        style: '',
        value:"The company has received the initial authorization from Microsoft China Azure AI, establishing itself as a pioneering enterprise in applying AI to brand-owned communication in the private domain.",
      },
    ],
    serviceBrandLogo: {
      title:"Service Brands",
      itemArr:[
        {id:1,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/lv_white.png"},
        {id:2,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/macdonald_white.png"},
        {id:3,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/burgerKing_white.png"},
        {id:4,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/subway_white.png"},
        {id:5,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/staccato_white.png"},
        {id:6,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LOCCITANE_white.png"},
        {id:7,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/starbucks_white.png"},
        {id:8,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/anta_white.png"},
        {id:9,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/shell.png"},
      ],
    },
    briefsIntroduction: {
      title:"Brief Introduction of Product / Service",
      itemArr:[
        {
          id: 1,
          style: '',
          value:
            "The integration of Chattech and AI equips sales assistants with an intelligent language package, enabling them to provide professional responses and enhance user interaction. AI utilizes a vast database to answer user queries, allowing sales assistants to adapt to different user preferences. Beyond addressing inquiries, AI offers sales recommendations throughout the customer lifecycle, including customer referrals, topic guidance, and content generation. The intelligent recommendation system analyzes user information, providing product recommendations and strategies to enhance conversion rates for high-value customers. AI alleviates the headquarters' data organization workload, offering quick summary tables and real-time anomaly alerts. The open cloud note feature assists sales assistants in creating personalized notes to meet their needs. Chattech and AI not only serve as assistants to sales, but also as intelligent tools to boost sales performance.",
        },
      ],
    },
    tags: [{id:1,value:"#Clienteling"},{id:2,value:"#AI"},{id:3,value:"#CSCmonitor"}],
    useCaseExample: {
      title:"Use Case Example",
      url:"",
      itemArr:[
        { id: 1, style: 'font-weight: 500;font-size:18px;margin-top:3rem;', value: 'Market Pain Points:' },
        {
          id: 2,
          style: '',
          value:
            'Time and Cost Investment: The traditional approach of training sales personnel consumes a significant amount of time and resources. Both brands and sales representatives undergo lengthy training cycles, resulting in a dual investment of cost and time as a major market pain point.Low Sales Efficiency and Conversion Rates: Traditional sales methods struggle to enhance sales efficiency and conversion rates. Sales representatives lack real-time tools to understand customer needs, leading to suboptimal interaction effects and challenges in achieving anticipated conversion rates.',
        },
        { id: 3, style: 'font-weight: 500;font-size:18px;margin-top:3rem;', value: 'Solutions:' },
        {
          id: 4,
          style: '',
          value: 'AI Response - Providing Skillful Replies',
        },
        {
          id: 5,
          style: '',
          value:
            "The combination of Chattech and AI is like enhancing a salesperson with an intelligent language package, enabling them to deliver more professional and skillful responses, thereby enhancing the warmth of the chat with users. For example, when a user asks a salesperson a question beyond their knowledge, AI can provide precise responses based on the brand's extensive database. Of course, the salesperson can customize different roles and tones of responses, allowing them to adapt to users with different chat preferences.",
        },
        {
          id: 6,
          style: 'margin-top:2rem',
          value: 'AI Insight - Offering Expert Sales Strategies',
        },
        {
          id: 7,
          style: '',
          value:
            'The AI can provide high-value recommendations to sales based on the user lifecycle, thereby improving sales performance. By analyzing user data and purchase habits, the system provides targeted recommendations to high-value customers and incentive suggestions to potential customers. This helps junior sales quickly achieve better sales results.',
        },
        { id: 8, style: 'margin-top:2rem', value: 'AI Data Statistics' },
        {
          id: 9,
          style: '',
          value:
            "Instant Business Data Summary: AI's data organization work can significantly reduce the headquarters' workload. Simply ask the AI assistant about this month's performance or ranking to receive a satisfying summary table.",
        },
        {
          id: 10,
          style: 'margin-top:2rem',
          value:
            'Data Analysis: Based on the data summary, the AI assistant can further analyze the data for you.',
        },
        {
          id: 11,
          style: 'margin-top:2rem',
          value:
            "Data Anomaly Alerts: Monitor data anomalies in real-time, such as a store's performance being three times higher than usual or fewer participants in a particular event, and receive timely alerts.",
        },
        { id: 12, style: 'margin-top:2rem', value: 'AI Cloud Notes' },
        {
          id: 13,
          style: '',
          value:
            'Assisting salespeople in automatically generating note content. Salespeople can customize cloud notes based on their needs, such as recommended usage scenarios, styling suggestions, and link them to order links.',
        },
        { id: 14, style: 'margin-top:2rem', value: 'AI Consultation' },
        {
          id: 15,
          style: '',
          value:
            'Copywriting: Let it help you write copies and polish cloud notes.',
        },
        {
          id: 16,
          style: '',
          value:
            'Grassroots Platform Collection: Inquire with AI to organize links related to online shopping recommendations.',
        },
      ],
    },
    claimedKpis: {
      title:"Claimed Kpis",
      itemArr:[
        {
          id: 1,
          style: 'font-weight: 500;',
          value: 'Improvement in Business Performance:',
        },
        {
          id: 2,
          style: 'font-weight: 500;',
          value: 'Enhanced Sales Team Efficiency: ',
        },
        {
          id: 3,
          style: '',
          value:
            'Achieving smarter sales interactions and more efficient customer management is expected to elevate the overall efficiency of the sales team.',
        },
        {
          id: 4,
          style: 'font-weight: 500;',
          value: 'Strengthened Customer Relationships: ',
        },
        {
          id: 5,
          style: '',
          value:
            'Through more personalized and precise user interactions, there is potential to enhance customer awareness and loyalty to the brand, thereby increasing the stability of customer relationships.',
        },
      ],
    },
    priceModelCard: {
      title:"Pricing Model",
      itemArr:[
        {
          id: 1,
          style: '',
          value:
            'The expenses are divided into two main components. One part involves charging for accounts using AI functionalities within Enterprise WeChat, and the other relates to the cleaning work of the corpus.',
        },
        {
          id: 2,
          style: '',
          value:
            'Accounts with AI functionalities: $2500 per account per year; (includes 6000 monthly AI information retrieval instances for one account, with the option to recharge beyond the allotted instances. Recharge starts at ¥1500, with a deduction of ¥1500 RMB for every 15,000 additional access instances.)',
        },
        {
          id: 3,
          style: '',
          value:
            'Corpus cleaning: fees are determined based on the clarity difficulty and scale of the database: A one-time base fee of ¥30,000 RMB, with a monthly corpus cleaning fee quote of ¥25,000 RMB.',
        },
      ],
      cards:[
        {
          id: 1,
          title: 'Host',
          src: '/images/icon/hosting.svg',
          itemArr: [{id:1,value:"Cloud Provider",type:""}],
        },
        {
          id: 2,
          title: 'Integration',
          src: '/images/icon/integration.svg',
          itemArr: [{id:1,value:"Back End Integration (API)",type:""}],
        },
        {
          id: 3,
          title: 'Mobile Integration',
          src: '/images/icon/mobileintegration.svg',
          itemArr: [{id:1,value:"API",type:""}],
        },
        {
          id: 4,
          title: 'PIPL',
          src: '/images/icon/PIPL.svg',
          itemArr: [{id:1,value:"Basic",type:""}],
        },
        {
          id: 5,
          title: 'MLPS',
          src: '/images/icon/MPLS.svg',
          itemArr: [{id:1,value:"Level 3",type:""}],
        },
      ],
    },
    featureDemo: {
      title:"Featured Demo",
      links: [],
      qrCodes: [],
      videos: [
        {
          id: 1,
          type: 'video',
          value: '',
          src: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Featured%20Demo%20and%20%20Maison%20Cases_iCC.mp4',
        },
      ],
    },
    serviceBrand:{
      title:"Service Brands",
      brands:[
      {
        id: 1,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/lv-logo-noir-ok.png',
        isCommingSoon: false,
        example: [
          {
            id: 1,
            desc: '',
            value: '',
            type: 'video',
            itemArr: [
              {
                id: 1,
                type: 'video',
                value:
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
        example:[]
      },
      {
        id: 3,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/burgerKing.png',
        isCommingSoon: true,
        example: [],
      },
      {
        id: 4,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/subway.png',
        isCommingSoon: true,
        example: [],
      },
      {
        id: 5,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/staccato.png',
        isCommingSoon: true,
        example: [],
      },
      {
        id: 6,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LOCCITANE.png',
        isCommingSoon: true,
        example: [],
      },
      {
        id: 7,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/starbucks.png',
        isCommingSoon: true,
        example: [],
      },
      {
        id: 8,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/anta.png',
        isCommingSoon: true,
        example: [],
      },
      {
        id: 9,
        logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/shell.png',
        isCommingSoon: true,
        example: [],
      },
      ],
    },
  },
  {
    id: 4,
    logo:
      'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/mobileNow%20logo.png',
    title: 'Mobile Now',
    shortName: 'Mobile Now',
    fullName: 'Mobile Now Shanghai Co. Ltd.',
    category: 'Customization & Personalization',
    categoryCount: 1, // vendorCategory的数量
    brandFounded: '2009',
    leadTime:
      '3-6 months for MVP followed by ongoing enhancements and roadmap management',
    status: '3. LVMH recommended',
    dot: 3,
    introductions:[
      {
        id: 1,
        style: '',
        value:
          'Mobile Now is a leading, full service, mobile agency, with a focus on branded apps, games, mobile platforms, websites bespoke WeChat Mini Programs and Wecom solutions, CRM and mCommerce integration.',
      },{
        id: 2,
        style: '',
        value:
          'They set up in 2009; hubing out of Shanghai, Hangzhou and Changsha, China and Singapore.',
      },{
        id: 3,
        style: '',
        value:
          'As an international team of 100, Mobile Now provide consultancy through to UX and UI design, as well as development across all the key mobile platforms.',
      },
    ],
    serviceBrandLogo:{
      title:"Service Brands",
      itemArr:[
        {id:1,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/hennessy_white.png"},
        {id:2,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ardbeg_white.png"},
        {id:3,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/glenmorangie_white.png"},
        {id:4,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chandon_white.png"},
        {id:5,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/dfs_white.png"},
        {id:6,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/sephora_white.png"},
        {id:7,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/leica_white.png"},
        {id:8,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chery_white.png"},
        {id:9,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/justluxe_white.png"},
        {id:10,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/SMCP_white.png"},
        {id:11,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LaneCrawford_white.png"},
        {id:12,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Brunello%20Cucinelli_white.png"},
        {id:13,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/SweatyBetty_white.png"},
        {id:14,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Dermalogica_white.png"},
        {id:15,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Generali_white.png"},
        {id:16,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/SK%20II_white.png"},
        {id:17,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Shiseido_white.png"},
        {id:18,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Infiniti_white.png"},
        {id:19,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Montblanc_white.png"},
        {id:20,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Cartier_white.png"},
        {id:21,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/IWC_white.png"},
        {id:22,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Re%CC%81my%20Martin_white.png"},
        {id:23,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/KFC.png"},
        {id:24,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/pizza_hut_logo.png"},
        {id:25,value:"https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Costa%20Coffee.png"},
      ],
    }, 
    briefsIntroduction:{
      title:"Brief Introduction of Product / Service",
      itemArr: [
        {
          id: 1,
          style: '',
          value:
            'Our team specializes in designing and developing digital platforms, including:',
        },
        { id: 2, style: '', value: '- WeChat Mini Programs, Wecom solutions,' },
        {
          id: 3,
          style: '',
          value: '- Mobile / Tablet Native Apps (IOS / Android OS),',
        },
        { id: 4, style: '', value: '- Mobile First/Desktop/Tablet Websites,' },
        {
          id: 5,
          style: 'margin-top: 20px;',
          value: 'As well as related Consulting Services:',
        },
        { id: 6, style: '', value: '- China Platform / Service Localisation,' },
        {
          id: 7,
          style: '',
          value: '- UX Design audits and Competitive landscape Consulting,',
        },
        {
          id: 8,
          style: '',
          value:
            '- Solution Architecture & Technical Consulting (CRM, ECommerce, Clienteling),',
        },
        {
          id: 9,
          style: '',
          value: '- Chinese Travelers Consulting, DTC, O2O, Commerce & CRM.',
        },
        {
          id: 10,
          style: 'margin-top: 20px;',
          value:
            "We deliver superior digital user experiences that scale and differentiate our clients' business and build long-term, trust-based relationships with our clients to drive their longer term digital platform roadmap.",
        },
        {
          id: 11,
          style: '',
          value:
            'With experience in delivering hundreds of Full Service Digital platforms, on multiple platforms, with multi-channel integration, and customized solutions, we offer services that include consulting, UX/UI design, development, integrations, market launch and enhancements roadmap management both for Customer Facing (Ecom, CRM, O2O) as well as Sales Facing (CMS, CRM, Retail Ops, Clienteling) user experiences.',
        },
        {
          id: 12,
          style: '',
          value:
            'We provide guidance, assistance, and direction at every stage of your digital transformation strategy.',
        },
      ],
    },
    tags: [{id:1,value:"#online"},{id:2,value:"#wechat"},{id:3,value:"#wecom"},{id:4,value:"#H5"},],
    useCaseExample:{
      title:"Use Case Example",
      url:"",
      itemArr: [
        {
          id: 1,
          style: '',
          value:
            '1. WeChat O2O DTC Commerce Mini Program revamp, Design & Build.',
        },
        {
          id: 2,
          style: '',
          value:
            '2. WeChat Loyalty / CRM Hub Mini Program revamp, Design & Build.',
        },
        {
          id: 3,
          style: '',
          value: '3. China Native App localisation or Revamp (IOS, Android).',
        },
        {
          id: 4,
          style: '',
          value:
            '4. Global (and Chinese) Mobile First website Design and Development.',
        },
        {
          id: 5,
          style: '',
          value:
            '5. UX Design Audit & Competititve Landscape review, and revamp assistance.',
        },
        {
          id: 6,
          style: '',
          value: '6. Digital Platform Consulting / Roadmapping (UX, Technical).',
        },
        {
          id: 7,
          style: '',
          value: '7. Technical Consulting / Architecture Review',
        },
      ],
    },
    claimedKpis: {
      title:"Claimed Kpis",
      itemArr: [
        {
          id: 1,
          style: '',
          value:
            'In China, where CX always starts Online and sometimes goes Offline, but even when it does, often converts Online, delivering a differentiated and relevant Onlice CX is paramount to China Biz Success. ',
        },
        {
          id: 2,
          style: '',
          value:
            'We are confident we drive UX/CX differentiation for our Clients to grow their Business and succeed in their Digital Transformation. ',
        },
        {
          id: 3,
          style: '',
          value:
            'We helped several Maisons to achieve significant growth of Ecom / O2O revenue, and ultimately to lead their industries. ',
        },
        {
          id: 4,
          style: '',
          value:
            'Further KPIs or results cannot be disclosed due to confidentiality. But references can be provided. ',
        },
      ],
    },
    priceModelCard: {
      title:"Pricing Model",
      itemArr:[
        {
          id: 1,
          style: '',
          value:
            'Completely depends on Scope of Work from initial punctual Design and / or Technical Consulting & Support (EUR 20k - 50k) to Platform Full Service project-based (EUR 100k - EUR 500K) to Retained Teams on Continuous Enhancements Management (EUR 500K+ per year).',
        },
      ],
      cards:[
        {
          id: 1,
          title: 'Host',
          src: '/images/icon/hosting.svg',
          itemArr: [{id:1,value:"Private Cloud",type:""},{id:2,value:"Cloud Provider",type:""},{id:3,value:"On Premise",type:""}],
        },
        {
          id: 2,
          title: 'Integration',
          src: '/images/icon/integration.svg',
          itemArr: [
            {id:1,value:"Front End Integration (Browse, HTML, JS)",type:""},
            {id:2,value:"Back End Integration (API)",type:""},
            {id:3,value:"CRM Integration",type:""},
            {id:4,value:"Specific Integration",type:""},
          ],
        },
        {
          id: 3,
          title: 'Mobile Integration',
          src: '/images/icon/mobileintegration.svg',
          itemArr: [{id:1,value:"API",type:""},{id:2,value:"SDK",type:""},{id:3,value:"Front end / Web",type:""}],
        },
        {
          id: 4,
          title: 'PIPL',
          src: '/images/icon/PIPL.svg',
          itemArr: [{id:1,value:"No Data Collected",type:""}],
        },
        {
          id: 5,
          title: 'MLPS',
          src: '/images/icon/MPLS.svg',
          itemArr: [{id:1,value:"'Level 3",type:""}],
        },
      ],
    },
    featureDemo: {
      title:"Featured Demo",
      links: [],
      qrCodes: [],
      videos: [],
    },
    serviceBrand:{
      title:"Service Brands",
      brands: [
        {
          id: 1,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/hennessy_black.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: 'Blends by Hennessy',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/HennessyBBHbbh.mp4',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyBBH%201.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyBBH%202.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyBBH%203.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyBBH%204.jpg',
                },
                {
                  id: 6,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyBBH%205.jpg',
                },
              ],
            },
            {
              id: 2,
              desc: '',
              value: 'Hennessy AI',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/HennessyAIai.mp4',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyAI%201.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyAI%202.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyAI%203.jpg',
                },
              ],
            },
            {
              id: 3,
              desc: '',
              value: 'Hennessy Retail',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyRetail%201.jpg',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyRetail%202.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyRetail%203.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyRetail%204.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyRetail%205.jpg',
                },
              ],
            },
            {
              id: 4,
              desc: '',
              value: 'Hennessy CRM',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyCRM%201.jpg',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyCRM%202.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyCRM%203.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyCRM%204.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/HennessyCRM%205.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ardbeg_black.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: 'Ardbeg Wechat Mini Program',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Ardbeg%201.jpg',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Ardbeg%202.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Ardbeg%203.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Ardbeg%204.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Ardbeg%205.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 3,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chandon_black.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: 'Chandon Wechat Mini Program',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ChandonFrame%201.jpg',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ChandonFrame%202.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ChandonFrame%203.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ChandonFrame%204.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ChandonFrame%205.jpg',
                },
                {
                  id: 6,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ChandonFrame%206.jpg',
                },
                {
                  id: 7,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ChandonFrame%207.jpg',
                },
                {
                  id: 8,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/ChandonFrame%208.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 4,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/glenmorangie_black.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: 'Glenmorangie Wechat Mini Program',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Glenmorangieglen.mp4',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/GlenmorangieFrame%201.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/GlenmorangieFrame%202.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/GlenmorangieFrame%203.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/GlenmorangieFrame%204.jpg',
                },
                {
                  id: 6,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/GlenmorangieFrame%205.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 5,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/sephora_black.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: 'Sephora Wechat Mini Program',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/sephora.mp4',
                },
                {
                  id: 2,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/sephora%20LSVC.mp4',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/SephoraFrame%201.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/SephoraFrame%202.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/SephoraFrame%203.jpg',
                },
                {
                  id: 6,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/SephoraFrame%204.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 6,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/dfs_black.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: 'La Samaritaine (Paris)',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/DFS%20la%20sam.mp4',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSLa%20Sam%201.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSLa%20Sam%202.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSLa%20Sam%203.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSLa%20Sam%204.jpg',
                },
              ],
            },
            {
              id: 2,
              desc: '',
              value: 'Brand Portal',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSBrand%20Portal%201.jpg',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSBrand%20Portal%202.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSBrand%20Portal%203.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSBrand%20Portal%204.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSBrand%20Portal%205.jpg',
                },
                {
                  id: 6,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSBrand%20Portal%206.jpg',
                },
                {
                  id: 7,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/DFSBrand%20Portal%207.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 7,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/leica_black.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: 'Akademie website',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/LeicaLA.mp4',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLA%201.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLA%202.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLA%203.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLA%204.jpg',
                },
              ],
            },
            {
              id: 2,
              desc: '',
              value: 'Photo Sharing website',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/LeicaLP.mp4',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLP%201.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLP%202.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLP%203.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLP%204.jpg',
                },
                {
                  id: 6,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLP%205.jpg',
                },
              ],
            },
            {
              id: 3,
              desc: '',
              value: 'Community Wechat Mini Program',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/LeicaLC.mp4',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLC%201.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLC%202.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLC%203.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLC%204.jpg',
                },
                {
                  id: 6,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LeicaLC%205.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 8,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/LaneCrawford.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: 'Ecommerce Wechat Mini Program',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Lane%20CrawfordEcom%201.jpg',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Lane%20CrawfordEcom%202.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Lane%20CrawfordEcom%203.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Lane%20CrawfordEcom%204.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Lane%20CrawfordEcom%205.jpg',
                },
              ],
            },
            {
              id: 2,
              desc: '',
              value: 'CRM Wechat Mini Program',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Lane%20CrawfordCRM%201.jpg',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Lane%20CrawfordCRM%202.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Lane%20CrawfordCRM%203.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Lane%20CrawfordCRM%204.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 9,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/justluxe_black.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: '',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'video',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/videos/Justluxejl.mp4',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Justluxe%201.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Justluxe%202.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Justluxe%203.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/Justluxe%204.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 10,
          logo: 'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/chery_black.png',
          isCommingSoon: false,
          example: [
            {
              id: 1,
              desc: '',
              value: '',
              type: 'video',
              itemArr: [
                {
                  id: 1,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/CheryFrame%201.jpg',
                },
                {
                  id: 2,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/CheryFrame%202.jpg',
                },
                {
                  id: 3,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/CheryFrame%203.jpg',
                },
                {
                  id: 4,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/CheryFrame%204.jpg',
                },
                {
                  id: 5,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/CheryFrame%205.jpg',
                },
                {
                  id: 6,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/CheryFrame%206.jpg',
                },
                {
                  id: 7,
                  type: 'image',
                  value:
                    'https://alsahlcinsuat01-oss.oss-cn-shanghai.aliyuncs.com/images/CheryFrame%207.jpg',
                },
              ],
            },
          ],
        },
      ],
    }
  },
])
const vendorListMock: Array<VendorItemModel> = getVendorCardData(vendorCardData)
export default {
  vendorListMock,
  filterListMock,
}
