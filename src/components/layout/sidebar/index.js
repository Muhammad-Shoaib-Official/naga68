import { Avatar, Box, Collapse, Drawer, DrawerHeader, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Skeleton, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { routes } from '../../../constants/sidebar';

const Sidebar = () => {
    return (
        <Box sx={{ minWidth: 240, pt: "75px", maxWidth: 240, background: "#111923", position: "relative" }} className="side--main">
            {/* <Drawer
                className={`mainDrawer hideDrawer`}
                sx={{ top: "65px !important", background: "red !important" }}
                variant="permanent"
                open={true}
            > */}
            <List component="nav" aria-labelledby="nested-list-subheader sidebar--" sx={{
                color: "#fff",
                "&.MuiList-root": {
                    height: "550px",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    "&::-webkit-scrollbar": {
                        width: "0px",
                    }
                }
            }}
            >
                {
                    routes.map((item) =>
                    (
                        <>
                            {
                                item.submenu ? (
                                    <>
                                        {/* hard id because submenu id aren't accessing here */}
                                        <ListItemButton selected={(parts[1] === "manageUsers") || (parts[1] === "claims") || (parts[1] === "clients")} onClick={handleOpenSidebarSubMenu} sx={{
                                            marginLeft: "16px",
                                            marginRight: "16px",
                                            borderRadius: "6px",
                                            marginTop: "2px",
                                            "&:hover": {
                                                backgroundColor: "#083B3F"
                                            },
                                            "&.Mui-selected, &.Mui-selected:hover": {
                                                backgroundColor: "#083B3F"
                                            }
                                        }}
                                        >
                                            <ListItemIcon sx={{ zIndex: "99" }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.title} />
                                            {/* {openSidebarItem ? <ExpandLess /> : <ExpandMore />} */}
                                        </ListItemButton>
                                        <Collapse in={openSidebarItem} timeout="auto" unmountOnExit >
                                            {
                                                item.submenu.map((submenuItem) => (

                                                    <Link key={submenuItem.id} href={submenuItem.path} onClick={(event) => {
                                                        event.preventDefault();
                                                        handleListItemClick(event, submenuItem.id)
                                                    }}>

                                                        <ListItemButton component="div" selected={getBasePath(submenuItem.path) === getBasePath(router.asPath)} sx={{
                                                            lineHeight: "0",
                                                            marginLeft: "20px",
                                                            marginRight: "16px",
                                                            borderRadius: "6px",
                                                            marginTop: "2px",
                                                            // backgroundColor: `${(getBasePath(item.path) === getBasePath(router.asPath)) && "#083B3F"}`,
                                                            "&:hover": {
                                                                backgroundColor: "#083B3F"
                                                            },
                                                            "&.Mui-selected, &.Mui-selected:hover": {
                                                                backgroundColor: "#083B3F"
                                                            }
                                                        }}
                                                        >
                                                            {/* <div className="setup">
                                      <div className="button">
                                        <span className="head"></span>
                                      </div>
                                    </div> */}
                                                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                                                {submenuItem.icon}
                                                            </ListItemIcon>
                                                            <ListItemText className="list-item-title" sx={{ paddingLeft: "12px" }} primary={submenuItem.title}
                                                            // sx={{
                                                            //   marginLeft: "16px",
                                                            //   marginRight: "8px",
                                                            //   borderRadius: "3px",
                                                            //   padding: "6px",
                                                            //   lineHeight: "0px",
                                                            //   "&:hover": {
                                                            //     backgroundColor: "#083b3f"
                                                            //   },
                                                            //   "&.Mui-selected, &.Mui-selected:hover": {
                                                            //     backgroundColor: "#083b3f"
                                                            //   },
                                                            //   "&.MuiListItemText-primary": {
                                                            //     lineHeight: "0px"
                                                            //   }
                                                            // }}
                                                            />
                                                        </ListItemButton>
                                                    </Link>
                                                ))
                                            }
                                        </Collapse>
                                    </>
                                ) : (
                                    <Link key={item?.path} href={item.path} as={item.path}
                                    // onClick={(event) => {
                                    //     event.preventDefault();
                                    //     handleListItemClick(event, item.id)
                                    // }}
                                    >

                                        <ListItemButton component="div" selected={false
                                            // getBasePath(item.path) === getBasePath(router.asPath)
                                        }
                                            sx={{
                                                marginLeft: "20px",
                                                marginRight: "20px",
                                                borderRadius: "6px",
                                                marginTop: "2px",
                                                // backgroundColor: `${getBasePath(item.path) === getBasePath(router.asPath) && "#083B3F"}`,
                                                "&:hover": {
                                                    backgroundColor: "#083B3F"
                                                },
                                                "&.Mui-selected, &.Mui-selected:hover": {
                                                    backgroundColor: "#083B3F"
                                                }
                                            }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <Image
                                                    src={item.icon}
                                                    alt="icon"
                                                    priority
                                                    width={24}
                                                    height={24}
                                                />
                                            </ListItemIcon>
                                            <ListItemText color='#ffffff' sx={{ color: "white" }} marginLeft={2} primary={item.title} />
                                        </ListItemButton>
                                    </Link>
                                )
                            }
                        </>
                    )
                    )
                }
            </List>
            {/* </Drawer> */}
        </Box >
    )
}

export default Sidebar