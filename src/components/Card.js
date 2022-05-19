import PrimaryImageMobile from "../images/illustration-woman-online-mobile.svg"
import PrimaryImageDesktop from "../images/illustration-woman-online-desktop.svg"
import List from "./List";
import { useMediaQuery } from "../hooks/hooks";
export default function Card() {

    const windowSize = useMediaQuery('(min-width: 942px)');
    
    return (
        <div style={{backgroundColor: "#fff", padding: "32px", display: windowSize ? "flex" : null, borderRadius: "12px"}}>
            <div style={{alignSelf: "center", marginRight: windowSize ? "32px" : "0px", textAlign: "center", position: "relative"}}>
                <img style={{width: windowSize ? "400px" : "200px", 
                height: windowSize ? "306px" : "154px", 
                position: windowSize ? "relative" : "absolute", 
                left: windowSize ? "-34px" : "50%",
                top: windowSize ? null : "50%",
                transform: windowSize ? null : "translate(-50%, -84%)"
                }}
                src={windowSize ? PrimaryImageMobile : PrimaryImageDesktop} alt="Woman using Desktop PC"/>
            </div>
            <div>
                <div style={{textAlign: "center"}}>
                    <h1 style={{marginTop: windowSize ? null : "48px"}}>FAQ</h1>
                </div>
                <div>
                    <List />
                </div>
            </div>
        </div>
    );
}