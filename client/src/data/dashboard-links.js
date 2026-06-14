import { ACCOUNT_TYPE } from "../utils/constants";

export const sidebarLinks = [
  // Common for both Customer and Vendor
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },

  // Vendor specific links
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/vendor",
    type: ACCOUNT_TYPE.VENDOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Services",
    path: "/dashboard/my-services",
    type: ACCOUNT_TYPE.VENDOR,
    icon: "VscListTree",
  },
  {
    id: 4,
    name: "Add Service",
    path: "/dashboard/add-service",
    type: ACCOUNT_TYPE.VENDOR,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Bookings Received",
    path: "/dashboard/bookings-received",
    type: ACCOUNT_TYPE.VENDOR,
    icon: "VscCalendar",
  },

  // Customer specific links
  {
    id: 6,
    name: "My Bookings",
    path: "/dashboard/my-bookings",
    type: ACCOUNT_TYPE.CUSTOMER,
    icon: "VscChecklist",
  },
  {
    id: 7,
    name: "Wishlist",
    path: "/dashboard/wishlist",
    type: ACCOUNT_TYPE.CUSTOMER,
    icon: "VscHeart",
  },
  {
    id: 8,
    name: "Cart",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.CUSTOMER,
    icon: "VscHistory",
  },
];