// import { Add, KeyboardArrowDown, Settings } from "@mui/icons-material";
// import { IAvartar, IHeaderNotification } from "../interfaces/headerInterface";
import Image from "next/image";
import { allGamesIcon, BonusIcon, vipRankIcon } from "../../public/assets/export";
export const routes = [
  {
    path: "/all-games",
    title: "All Games",
    icon: allGamesIcon,
  },
  {
    path: "/rank-system",
    title: "VIP Rank System",
    icon: vipRankIcon,
  },
  {
    path: "/all-bonuses",
    title: "All Bonusses",
    icon: BonusIcon,
  },

  // {
  //   id: 6,
  //   path: "/calendar",
  //   title: "Calendar",
  //   icon: (
  //     <Image
  //       src={calendaricon}
  //       alt="calendar icon"
  //       priority
  //       width={24}
  //       height={24}
  //     />
  //   ),
  // },
  // {
  //   id: 7,
  //   path: "/manageUsers",
  //   title: "Manage",
  //   icon: <GroupsIcon sx={{ color: "white" }} />,
  //   iconOpenend: (
  //     <KeyboardArrowUpIcon sx={{ fontSize: "16px", color: "white" }} />
  //   ),
  //   iconClosed: (
  //     <KeyboardArrowDown sx={{ fontSize: "16px", color: "white" }} />
  //   ),
  //   submenu: [
  //     {
  //       id: 7.1,
  //       path: "/manageUsers",
  //       title: "Manage Users",

  //       icon: (
  //         <NavigateNextIcon
  //           sx={{ fontSize: "16px", color: "white", ml: "0px" }}
  //         />
  //       ),
  //     },
  //     {
  //       id: 7.2,
  //       path: "/clients",
  //       title: "Manage Clients",

  //       icon: (
  //         <NavigateNextIcon sx={{ fontSize: "16px", color: "white" }} />
  //       ),
  //     },
  //     {
  //       id: 7.3,
  //       path: "/claims",
  //       title: "Manage Claims ",

  //       icon: (
  //         <NavigateNextIcon sx={{ fontSize: "16px", color: "white" }} />
  //       ),
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   path: "/apiInventory",
  //   title: "API Inventory",
  //   icon: (
  //     <Image
  //       src={apiInventoryIcon}
  //       alt="api inventory"
  //       priority
  //       width={24}
  //       height={24}
  //     />
  //   ),
  // },

  // {
  //   id: 9,
  //   path: "/rndExpert",
  //   title: "RND Experts",
  //   icon: (
  //     <Image
  //       src={collaboratorsIcon}
  //       alt="collaborators"
  //       priority
  //       width={24}
  //       height={24}
  //     />
  //   ),
  // },

  // {
  //   id: 10,
  //   path: "/newsLetter",
  //   title: "Newsletter",
  //   icon: (
  //     <span style={{ marginLeft: "0.2rem" }}>
  //       <Image
  //         src={newsletterIcon}
  //         alt="newsletter"
  //         priority
  //         width={24}
  //         height={24}
  //         objectFit="contain"
  //       />
  //     </span>
  //   ),
  // },

  // {
  //   id: 11,
  //   path: "/auditLog",
  //   title: "Audit Log",
  //   icon: (
  //     <Image
  //       src={auditIcon}
  //       alt="audit log"
  //       priority
  //       width={24}
  //       height={24}
  //     />
  //   ),
  // },

  // {
  //   id: 12,
  //   path: "/ratingsFeedback",
  //   title: "Ratings & Feedback",
  //   icon: (
  //     <Image
  //       src={ratingIcon}
  //       alt="ratings"
  //       priority
  //       width={24}
  //       height={24}
  //     />
  //   ),
  // },

  // {
  //   id: 13,
  //   path: "/itHelpDesk",
  //   title: "IT Help Desk",
  //   icon: (
  //     <Image
  //       src={helpDiskIcon}
  //       alt="help disk"
  //       priority
  //       width={24}
  //       height={24}
  //     />
  //   ),
  // },
  // {
  //   id: 14,
  //   path: "/userGuide",
  //   title: "User Guide",
  //   icon: (
  //     <Image
  //       src={userguideicon}
  //       alt="user guide icon"
  //       priority
  //       width={24}
  //       height={24}
  //     />
  //   ),
  // },
  // {
  //   id: 15,
  //   path: "/guideLines",
  //   title: "HMRC Guidelines",
  //   icon: (
  //     <Image
  //       src={guideLines}
  //       alt="guidelines icon"
  //       priority
  //       width={24}
  //       height={24}
  //     />
  //   ),
  // },
  // {
  //   id: 16,
  //   path: "/accountSettings/myProfile",
  //   title: "Account Settings ",
  //   icon: <Settings sx={{ color: "white" }} />,
  //   iconOpenend: <Add sx={{ fontSize: "16px", color: "white" }} />,
  // },
];

// export const avatarData: IAvartar[] = [
//   {
//     id: "1",
//     title: "My Enquires",
//     path: "/myenquires",
//     icon: <Image src={myenquiry} alt="query" priority />,
//   },
//   {
//     id: "2",
//     title: "Feedback",
//     path: "/feeback",
//     icon: <Image src={feedbackicon} alt="feedback" priority />,
//   },
// ];
// export const headerNotificationData: IHeaderNotification[] = [
//   {
//     id: "1",
//     title: "Client added",
//     description: "Client One Private Limited has been added. ",
//     path: "",
//     date: "today",
//     hours: "5 hours ago",
//   },
//   {
//     id: "2",
//     title: "Client added",
//     description: "Client One Private Limited has been added. ",
//     path: "",
//     date: "today",
//     hours: "3 hours ago",
//   },
//   {
//     id: "3",
//     title: "Client added",
//     description: "Client One Private Limited has been added. ",
//     path: "",
//     date: "today",
//     hours: "12 hours ago",
//   },
//   {
//     id: "4",
//     title: "Client added",
//     description: "Client One Private Limited has been added. ",
//     path: "",
//     date: "yesterday",
//     hours: "5 hours ago",
//   },
// ];
