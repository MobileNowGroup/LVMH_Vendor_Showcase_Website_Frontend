import type vendorItem from "@/model/vendor.model";
import { reactive } from "vue";

const allowedCommon = ["'self'"];
const vendorListMock: Array<vendorItem> = reactive([
  {
    id: 0,
    logoSrc: "/images/vendor.png",
    vendorName: "hexapodant",
    vendorCategory: "In-store interactive experience ",
    vendorCategoryNum: 12,
    brandFounded: "1995.04.07",
    leadTime: "4 weeks",
    vendorBrief:
      "xiaosi in 2019, it is dedicated to using digital innovations and tools to create, and enhance the user experience online and offline.",
    vendorTags: ["Artificial Intelligence", "3D Display"],
    vendorStatus: "4. Blueprint",
    vendorDot: 3,
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
