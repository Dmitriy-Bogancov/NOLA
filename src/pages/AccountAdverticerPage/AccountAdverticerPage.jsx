import { NavLink, Outlet } from "react-router-dom";

import css from "./AccountAdverticerPage.module.css";
import { ScrollBar } from "../../components/ScrollBar/ScrollBar";
import { useEffect, useState } from "react";
import { getAccountApi } from "../../services/https/https";
import { CutString } from "../../components/CutString/CutString";
import { OurLinksList } from "../../components/OurLinksList/OurLinksList";

const AccountAdverticerPage = () => {
  const [data, setData] = useState([]);
  const [cutStr, setCutStr] = useState(true);
  const [ourLinksList, setOurLinksList] = useState(false);
  // useEffect(() => {
  //   const getData = (async () => {
  //     const data = await getAccountApi();
  //     setData(data)
  //   })();
  // }, [])

  useEffect(() => {
    localStorage.removeItem("pathname");
  }, []);

  const handleSetting = () => {
    localStorage.setItem("pathname", "/main/setting");
  };

  const handleMoreText = (e) => {
    setCutStr((pre) => !pre);
  };

  const handOurLinksList = () => {
    setOurLinksList(true);
  };

  return (
    <div>
      <div className={css.nav}>
        <NavLink to="/main/settingAdverticer" onClick={handleSetting}>
          <button type="button">Setting</button>
        </NavLink>

        <p>Friendly Study</p>

        <NavLink to="adverticerEdit">
          <button type="button">Edit</button>
        </NavLink>
      </div>

      {/* {data?.map(({name, textarea}) => ())} */}
      <div className={css.main}>
        <svg width="72" height="72" className={css.icon}>
          <use></use>
        </svg>
        <div className={css.account}>
          <h3 className={css.title}>English Study</h3>
          <p className={css.count}>Publication: 108</p>
        </div>
      </div>

      <div className={css.footer}>
        <svg width="32" height="32" className={css.icon_links}>
          <use></use>
        </svg>
        <p className={css.links} onClick={handOurLinksList}>
          Our links
        </p>
      </div>

      <div className={css.description}>
        {cutStr ? (
          <CutString
            string={
              "We are the newest English language school for any age. Our school provides both online and offline services. We are the on newest English language school beginners to advanced learners, we provide comprehensive support and engaging lessons to help you achieve fluency and confidence in English communication. "
            }
            maxLength={150}
          />
        ) : (
          "We are the newest English language school for any age. Our school provides both online and offline services. We are the on newest English language school beginners to advanced learners, we provide comprehensive support and engaging lessons to help you achieve fluency and confidence in English communication. "
        )}

        {cutStr ? (
          <button
            type="button"
            onClick={handleMoreText}
            className={css.footer_btn}
          >
            See more
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleMoreText()}
            className={css.footer_btn}
          >
            Roll up
          </button>
        )}
      </div>

      <ScrollBar
        labelOne="Active"
        pathnameOne="/main/accountAdverticer"
        labelTwo={`Archive `}
        pathnameTwo="/main/accountAdverticer/adverticerArchive"
      />

      {ourLinksList && (
        <OurLinksList data={data} setOurLinksList={setOurLinksList} />
      )}

      <Outlet />
    </div>
  );
};

export default AccountAdverticerPage;
