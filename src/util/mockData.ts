import type vendorItem from "@/model/vendor.model";

const allowedCommon = ["'self'"];
const vendorListMock: Array<vendorItem> = [
  {
    id: 0,
    logoSrc: "../assets/images/icon/search.svg",
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
    id: 1,
    logoSrc: "../assets/images/icon/search.svg",
    vendorName: "hexapodant",
    vendorCategory: "In-store interactive experience ",
    vendorCategoryNum: 12,
    brandFounded: "1995.04.07",
    leadTime: "4 weeks",
    vendorBrief:
      "Founded in 2019, it is dedicated to using digital innovations and tools to create, and enhance the user experience online and offline.",
    vendorTags: ["Artificial Intelligence", "3D Display"],
    vendorStatus: "4. Blueprint",
    vendorDot: 4,
  },
  {
    id: 2,
    logoSrc: "../assets/images/icon/search.svg",
    vendorName: "hexapodant",
    vendorCategory: "In-store interactive experience ",
    vendorCategoryNum: 12,
    brandFounded: "1995.04.07",
    leadTime: "4 weeks",
    vendorBrief:
      "Founded in 2019, it is dedicated to using digital innovations and tools to create, and enhance the user experience online and offline.",
    vendorTags: ["Artificial Intelligence", "3D Display"],
    vendorStatus: "4. Blueprint",
    vendorDot: 2,
  },
  {
    id: 3,
    logoSrc: "../assets/images/icon/search.svg",
    vendorName: "hexapodant",
    vendorCategory: "In-store interactive experience ",
    vendorCategoryNum: 12,
    brandFounded: "1995.04.07",
    leadTime: "4 weeks",
    vendorBrief:
      "Founded in 2019, it is dedicated to using digital innovations and tools to create, and enhance the user experience online and offline.",
    vendorTags: ["Artificial Intelligence", "3D Display"],
    vendorStatus: "4. Blueprint",
    vendorDot: 0,
  },
];

const filterListMock = [
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
];

export default {
  vendorListMock,
  filterListMock
};
