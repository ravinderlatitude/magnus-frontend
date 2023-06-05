import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ActiveLink from "./ActiveLink";
import useOutsideClick from "../hooks/useOutsideClick";
import IcOff from "../assets/images/ic-logout.svg";
import LOGO from "../assets/images/logo.svg";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import ModalResetPwd from "./ModalResetPwd";
import { getTetsList } from "../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/redux/authSlice";
import { setCredentials as setCredentialsVerifyUser } from "@/redux/verifyUserSlice";
import ModalOtp from "./ModalOtp";

export default function Header({ href, children }) {
  const dropdown = useRef(null);

  const router = useRouter();
  const { resetpassword, login, verifiedregister, id } = router.query;

  // menu toggle page for menu
  const [isActive, setIsActive] = useState(false);
  useOutsideClick(dropdown, () => setIsActive(false));
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const [isSubmenu, setIsSubmenu] = useState(false);
  const handleClickSubMenu = (event) => {
    setIsSubmenu((current) => !current);
  };
  // for Modal
  // const handelModal = useRef(null);

  const [isModal, setIsModal] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);
  const [isModalResetpwd, setIsModalResetPwd] = useState(false);
  const [isModalVerifyuser, setIsModalVerifyuser] = useState(false);

  // useOutsideClick(handelModal, () => setIsModal(false));
  // const modalClick = (event) => {
  //   setIsModal((current) => !current);
  // };
  const [testListData, setTestListData] = useState([]);
  const [testListDetail, setTestListDetail] = useState([]);

  const dispatch = useDispatch();
  const testList = useSelector((state) => state.testList.data);
  const loading = useSelector((state) => state.testList.loading);
  const error = useSelector((state) => state.testList.error);
  const authRegister = useSelector((state) => state.authRegister.user);
  const verifyUser = useSelector((state) => state.verifyUser.user);

  useEffect(() => {
    // console.log("authRegister", authRegister);
    if (authRegister && authRegister.status == 200) {
      setTimeout(() => {
        setIsModalRegister(false);
      }, 1000 * 2);
    }
  }, [authRegister]);

  useEffect(() => {
    console.log("verifyUser", verifyUser);
    if (verifyUser && verifyUser.status == 200) {
      dispatch(setCredentials(verifyUser));
      dispatch(setCredentialsVerifyUser(null));
      setTimeout(() => {
        setIsModalVerifyuser(false);
        // window.location.reload();
        // window.location.href = "/";
        // setIsModal(true);
        if (id) {
          router.push(`/test-detail/${encodeURIComponent(id)}`);
        } else {
          router.push(`/`);
        }
      }, 1000 * 2);
    }
  }, [verifyUser]);

  useEffect(() => {
    const user = localStorage.getItem("userData");
    if (user) {
      dispatch(setCredentials(JSON.parse(user)));
    }

    dispatch(getTetsList());
  }, [dispatch]);

  useEffect(() => {
    if (resetpassword) {
      setIsModalResetPwd(true);
    }
    if (login) {
      setIsModal(true);
    }
    if (verifiedregister) {
      setIsModalVerifyuser(true);
    }
  }, [resetpassword, login, verifiedregister]);

  const handleLogout = (e) => {
    localStorage.removeItem("userData");
    dispatch(setCredentials(null));
    setIsModal(false);
    // if (userLogout) {
    //   dispatch(setLogout(JSON.parse(userLogout)));
    // }
  };
  // **************************************************************************

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let testList = await getTetsList();
  //       setTestListData(testList.data);

  //       // console.log("testListData==========:", testList);
  //     } catch (ee) {
  //       console.error("hftygfy hfyfdchdfg", ee);
  //     }
  //   })();
  // }, []);

  // **************************************************************************
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let testDetails = await getTetsListDetail();
  //       setTestListDetail(testDetails.data);

  //       // console.log("testListData==========:", testList);

  //       // console.log("testListData___header__call", testList);
  //       console.log("testListDetail===========", testDetails);
  //     } catch (ee) {
  //       console.error("hftygfy hfyfdchdfg", ee);
  //     }
  //   })();
  // }, []);

  const auth = useSelector((state) => state.auth.user);
  // console.log("auth=====", auth);
  const [isLogin, setIsLogin] = useState(false);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  // console.log(auth);
  return (
    <div className="header-main fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container c-container" ref={dropdown}>
          <ActiveLink href="/" className="navbar-brand">
            <Image alt="" src={LOGO} />
          </ActiveLink>
          <button className="navbar-toggler" onClick={handleClick}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              "navbar-collapse " + (!isActive ? "collapse" : "collapsed")
            }
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <ActiveLink href="/" onClick={handleClick}>
                  Home
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink href="/aboutus" onClick={handleClick}>
                  About us
                </ActiveLink>
              </li>
              <li
                className={"nav-item dropdown " + (isSubmenu ? "active" : "")}
                onMouseLeave={() => setIsSubmenu(false)}
              >
                <span
                  className="nav-link dropdown-toggle"
                  onClick={handleClickSubMenu}
                  onMouseOver={() => setIsSubmenu(true)}
                >
                  Self Assessment
                </span>
                <ul className="dropdown-menu">
                  {testList?.map((data, index) => (
                    <li key={index.toString()}>
                      {/* {console.log("LI data=====", data)} */}
                      {/* <ActiveLink href="/test-detail" className="dropdown-item"> */}
                      <ActiveLink
                        href={`/test-detail/${encodeURIComponent(data.slug)}`}
                        className="dropdown-item"
                      >
                        {data.test_name}
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <ActiveLink href="/faqs" onClick={handleClick}>
                  FAQ
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink href="/contact" onClick={handleClick}>
                  Contact
                </ActiveLink>
              </li>
            </ul>
          </div>
          {!auth?.data ? (
            <div className="btn-block">
              <button
                className="btn btn-orange ms-3"
                onClick={() => setIsModal((current) => !current)}
              >
                Login
              </button>
              <button
                className="btn btn-blue ms-3"
                onClick={() => setIsModalRegister((current) => !current)}
              >
                Register{" "}
              </button>
              <div>
                <ModalLogin isModal={isModal} setIsModal={setIsModal} />
              </div>
              <div>
                <ModalRegister
                  isModal={isModalRegister}
                  setIsModal={setIsModalRegister}
                />
              </div>
              <div>
                <ModalResetPwd
                  isModal={isModalResetpwd}
                  setIsModal={setIsModalResetPwd}
                />
              </div>
              <div>
                <ModalOtp
                  isModal={isModalVerifyuser}
                  setIsModal={setIsModalVerifyuser}
                />
              </div>
            </div>
          ) : (
            <>
              <div className="username">
                <span className="weltxt">Welcome,</span>
                <span className="ps-1">{auth?.data?.first_name}</span>
              </div>
              <a
                className="btn-orange-color btn-logout"
                onClick={() => handleLogout()}
              >
                <Image src={IcOff} />
                Logout
              </a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
