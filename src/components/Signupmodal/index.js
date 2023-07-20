import { Dialog, DialogContent, Grid, DialogContentText, MenuItem, Select, Badge, Box, Tabs, Tab, useMediaQuery, Tooltip } from "@mui/material"
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Link from "next/link";
import { socialIcon } from "./signupMockData";
import Image from "next/image";
const validatelogin = Yup.object({
    email: Yup.string().required("Please Enter a Valid Email"),
    password: Yup.string().required("Password Is Required"),
});
const loginSchema = {
    email: "",
    password: "",
};
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className="TabPanel"
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}
function changeID(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
const SignupModal = (props) => {
    const tabScrollAble = useMediaQuery('(max-width:620px)');
    const [value, setValue] = useState(0);
    const handletabChange = (event, newValue) => setValue(newValue);
    const { showAddModal, setShowAddModal, id } = props;

    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        enableReinitialize: true,
        initialValues: loginSchema,
        validationSchema: validatelogin,
        onSubmit: (values, { resetForm }) => {
            console.log(values, "login form values");
        },
    });
    return (
        <div>
            <Dialog

                PaperProps={{
                    sx: {
                        maxWidth: "690px",
                        backgroundColor: "#111923",
                        width: "100%",
                        boxShadow: "-8px 8px 12px rgba(76, 0, 39, 0.15)",
                        borderRadius: "12px",
                        // paddingBottom: "40px"
                        padding: "0",

                    }
                }}
                className="Sign_in_up_modal"
                open={showAddModal}
                onClose={() => setShowAddModal(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* <DialogTitle id="alert-dialog-title" className='Top_heading fw-600 ' sx={{ fontSize: "16px", mb: 3, }}>
                    <h6 className="h6 fs-600">Add New Calendar</h6>
                </DialogTitle> */}
                <DialogContent className='content'>
                    <DialogContentText id="alert-dialog-description">
                        <Grid container>
                            <Grid item md={6} xs={12} display='flex' flexDirection='column'>
                                <div className="signup_wraper_left_side">
                                    <div className="modal_intro_lable"><p className="fw-800">🎁 Welcome Pack</p></div>
                                    <h4 className="h4">WELCOME BONUS <span>300 FS + 150%</span> ON DEPOSIT <span>UP TO $500</span> </h4>

                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} display='flex' flexDirection='column'>
                                <div className="modal_intro_signup_form">
                                    <Tabs
                                        variant={tabScrollAble ? "scrollable" : ''}
                                        value={value}
                                        onChange={handletabChange}
                                        scrollButtons={true}
                                        allowScrollButtonsMobile
                                        TabIndicatorProps={{
                                            sx: {
                                                // backgroundColor: "rgba(76, 0, 39, 1)",
                                                height: "0px",
                                                // borderRadius: " 10px 10px 0 0",
                                            },
                                        }}
                                        sx={{
                                            transition: "all 0.3s ease-in-out",
                                            marginBottom: "20px",
                                            "& button": {
                                                color: "#93acd3",
                                                fontSize: "12px",
                                                fontWeight: "600",
                                                textTransform: "capitalize",
                                                padding: "10px 14px",
                                                minHeight: "unset",
                                                minWidth: "unset"
                                                // mr: { sm: 4, xs: 2 },
                                            },
                                            "& button:hover": {
                                                color: "#fff",
                                            },
                                            "& button:focus": {
                                                color: "#fff",
                                            },
                                            "& button:active": {
                                                color: "#fff",
                                            },
                                            "& button.Mui-selected": {
                                                color: "#fff",
                                                backgroundColor: "#2283f6",
                                                borderRadius: "3rem",
                                            },
                                        }}
                                    >
                                        {[{ label: 'Login', changeId: 0 },
                                        { label: 'Signup', changeId: 1 },].map(tabs => (
                                            <Tab disableRipple key={tabs.label} label={tabs.label} {...changeID(tabs.changeId)} />
                                        ))}
                                    </Tabs>
                                    <TabPanel value={value} index={0}>
                                        <form>
                                            <div className="form_main_wraper">
                                                <div className="inpt_wraper">
                                                    <MailOutlineIcon className="input_Icon" />
                                                    <input
                                                        id="email"
                                                        value={values.email}
                                                        name="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        type="text"
                                                        placeholder="Enter your Email"
                                                        className="Custom_input"
                                                        required />
                                                </div>
                                                {errors.email && touched.email && <p style={{ color: "red", margin: "-15px 0 5px 0", fontSize: "14px", }}>{errors.email}</p>}
                                                <div className="inpt_wraper">
                                                    <LockIcon className="input_Icon" />
                                                    <RemoveRedEyeIcon className="input_password_icon" />

                                                    <input id="password"
                                                        value={values.password}
                                                        name="password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        type="password"
                                                        placeholder="Enter your Password"
                                                        className="Custom_input"
                                                        required />
                                                </div>
                                                {errors.password && touched.password && <p style={{ color: "red", margin: "-15px 0 5px 0", fontSize: "14px", }}>{errors.password}</p>}
                                                <div className="inpt_wraper">
                                                    <Link href="#" className="forGot_link" >Forgot your password</Link>
                                                </div>
                                                <div className="button_wrapper">
                                                    <button className="Login_btn btn btn-primary" type="submit">Login</button>
                                                </div>
                                                <div className="other_to_Signup">
                                                    <p className="other_link_text">Or login with</p>
                                                    <div className="social_media_wraper flex-between ">
                                                        <div className="social_icon_wrapper_inner">
                                                            {socialIcon.map((icon) => (
                                                                <Tooltip PopperProps={{
                                                                    sx: {
                                                                        "& .MuiTooltip-tooltip": {
                                                                            borderRadius: "50Px",
                                                                            color: "#55657e",
                                                                            backgroundColor: "#202a39",
                                                                        }
                                                                    }
                                                                }} key={icon.id} title={icon.tooltip} placement="top">
                                                                    <Link href={icon.linkPath} className="_icon_styled_div flex-center">
                                                                        <Image src={icon.imgPath} alt={icon.alttext} width={22} height={22} />
                                                                    </Link>
                                                                </Tooltip>

                                                            ))}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="agrement_accpt">
                                                    <p>By accessing the site, I confirm that I am 18 years old and I have read the <Link className="link" href="#">terms of service</Link></p>
                                                </div>
                                                <div className="agrement_accpt">
                                                    <p className="fw-600" style={{ color: "#fff" }}>Dont you have an account <Link className="link" href="#">Sign Up</Link></p>

                                                </div>

                                            </div>
                                        </form>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <h6 style={{color:"red"}}>Note! working on this form yet </h6>
                                        <form>
                                            <div className="form_main_wraper">
                                                <div className="inpt_wraper">
                                                    <MailOutlineIcon className="input_Icon" />
                                                    <input
                                                        id="email"
                                                        value={values.email}
                                                        name="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        type="text"
                                                        placeholder="Enter your Email"
                                                        className="Custom_input"
                                                        required />
                                                </div>
                                                {errors.email && touched.email && <p style={{ color: "red", margin: "-15px 0 5px 0", fontSize: "14px", }}>{errors.email}</p>}
                                                <div className="inpt_wraper">
                                                    <LockIcon className="input_Icon" />
                                                    <RemoveRedEyeIcon className="input_password_icon" />

                                                    <input id="password"
                                                        value={values.password}
                                                        name="password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        type="password"
                                                        placeholder="Enter your Password"
                                                        className="Custom_input"
                                                        required />
                                                </div>
                                                {errors.password && touched.password && <p style={{ color: "red", margin: "-15px 0 5px 0", fontSize: "14px", }}>{errors.password}</p>}
                                                <div className="inpt_wraper">
                                                    <Link href="#" className="forGot_link" >Forgot your password</Link>
                                                </div>
                                                <div className="button_wrapper">
                                                    <button className="Login_btn btn btn-primary" type="submit">Login</button>
                                                </div>
                                                <div className="other_to_Signup">
                                                    <p className="other_link_text">Or login with</p>
                                                    <div className="social_media_wraper flex-between ">
                                                        <div className="social_icon_wrapper_inner">
                                                            {socialIcon.map((icon) => (
                                                                <Tooltip PopperProps={{
                                                                    sx: {
                                                                        "& .MuiTooltip-tooltip": {
                                                                            borderRadius: "50Px",
                                                                            color: "#55657e",
                                                                            backgroundColor: "#202a39",
                                                                        }
                                                                    }
                                                                }} key={icon.id} title={icon.tooltip} placement="top">
                                                                    <Link href={icon.linkPath} className="_icon_styled_div flex-center">
                                                                        <Image src={icon.imgPath} alt={icon.alttext} width={22} height={22} />
                                                                    </Link>
                                                                </Tooltip>

                                                            ))}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="agrement_accpt">
                                                    <p>By accessing the site, I confirm that I am 18 years old and I have read the <Link className="link" href="#">terms of service</Link></p>
                                                </div>
                                                <div className="agrement_accpt">
                                                    <p className="fw-600" style={{ color: "#fff" }}>Dont you have an account <Link className="link" href="#">Sign Up</Link></p>

                                                </div>

                                            </div>
                                        </form>
                                    </TabPanel>
                                </div>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                {/* <DialogActions>
                    <button className='btn cancel text-color btn-light-grey' onClick={() => setShowAddModal(false)}>Cancel</button>
                    <button className='btn cancel save btn-secondary' type="submit" >Save</button>
                </DialogActions> */}
            </Dialog>
        </div>
    )
}
export default SignupModal