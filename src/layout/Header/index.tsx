import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DarkLightSwitch from "../../components/DarkLightSwitch";
import { changeDayNight } from "../../store/slice/modeSlice";
import { RootState } from "../../store/store";
import "./styles.scss";

export interface IDarkLightSwitchProps {
  theme: string;
}

const Header = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const daynight = useSelector((state: RootState) => state.mode);
  const dispatch = useDispatch();
  const { mode } = daynight;

  const daynightHandler = () => {
    dispatch(changeDayNight());
  };

  const fullscreenHandler = () => {
    if (!fullscreen) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <nav className="wrap">
      <div className="logo-image">
        <Link to="/">
          <img src="/assets/icons/lofi-logo.gif" alt="" />
        </Link>
      </div>
      <div className="nav-menu"></div>
      <div className="nav-menu">
        {/* <a target='_blank' rel='noreferrer' href={CONSTANTS.AUTHOR_GITHUB_LINK}>
          <i className='fab fa-github'></i>
          <span>GitHub</span>
        </a> */}
        <div onClick={daynightHandler} className="switch-btn">
          <DarkLightSwitch theme={mode} />
        </div>

        <button onClick={fullscreenHandler} className="fullscreen-btn">
          <i className="fas fa-expand fa-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
