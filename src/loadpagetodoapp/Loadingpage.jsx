import "./loadingpage.css";
import { useNavigate } from "react-router-dom";

const Loadingpage = () => {
    let navigate = useNavigate();
    setTimeout(()=>{
        navigate("/app");
    },5000)
  return (
    <div className="backes">
      <div className="stage">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </div>
  );
};

export default Loadingpage;
