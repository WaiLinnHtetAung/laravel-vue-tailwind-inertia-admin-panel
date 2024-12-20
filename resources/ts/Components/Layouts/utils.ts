
import {
    MonitorDot,
    Server,
    UserCog,
    Package
  } from "lucide-vue-next";

  export const menuItems: any[] = [
    { isHeader: true, title: "admin" },
    {
      icon: MonitorDot,
      title: "Dashboard",
      path: '/dashboard'
    },
    {
      title: "User Management",
      icon: UserCog,
      subMenu: [
        { path: "/user-management/users", title: "Users" },
      ]
    },

    { isHeader: true, title: "Pages" },
    {
        title: "Product Management",
        icon: Package,
        subMenu: [
          { path: "/product-management/brands", title: "Brands" },
        ]
    }


    // {
    //   title: "pages",
    //   icon: Codesandbox,
    //   subMenu: [
    //     { path: "/pages/coming-soon", title: "coming-soon" },
    //     { path: "/pages/maintenance", title: "maintenance" }
    //   ]
    // },
    // { isHeader: true, title: "components" },
    // {
    //   title: "multi-level",
    //   icon: Share2,
    //   subMenu: [
    //     { path: "#", title: "level-1.1" },
    //     {
    //       title: "level-1.2",
    //       subMenu: [
    //         { title: "level-2.1", path: "#" },
    //         { title: "level-2.2", path: "#" }
    //       ]
    //     }
    //   ]
    // }
  ];


export const notificationData = [
    {
      title: "<b>@willie_passem</b> followed you",
      fullTime: "Wednesday 03:42 PM",
      time: "4 sec",
      type: "followers"
    },
    {
      title: "<b>@caroline_jessica</b> commented on your post",
      message: `Amazing! Fast, to the point, professional and really amazing
      to work with them!!!`,
      fullTime: "Wednesday 03:42 PM",
      time: "15 min",
      type: "mentions"
    },
    {
      title: `Successfully purchased a business plan for
      <span class="text-red-500">$199.99</span>`,
      fullTime: "Monday 11:26 AM",
      time: "Yesterday",
      type: "invites"
    },
    {
      title: `<b>@scott</b> liked your post`,
      fullTime: "Thursday 06:59 AM",
      time: "1 Week",
      isLike: true,
      type: "mentions"
    }
  ];
