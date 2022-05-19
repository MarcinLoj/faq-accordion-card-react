
import Chevron from "../images/icon-arrow-down.svg"
import './ListItem.css'

export default function ListItem({isCollapsed, description,title,toggleCollapse}) {

        return (
            <>
                <div  style={{display: "flex", justifyContent: "space-between"}}>
                <div onClick={toggleCollapse} className="articles">
                    <h3 className={isCollapsed ? "shake" : null} style={{fontWeight: isCollapsed ? 500 : 400}}>{title}</h3>
                    {isCollapsed  &&
                    <div className="parent" >
                        <p className="box show">{description}</p>
                    </div>
                    }
                </div>
                    <div className="chevronContainer">
                    <img className="chevron" src={Chevron} 
                    onClick={toggleCollapse} 
                    alt="chevron" 
                    style={{transform: isCollapsed ? "rotate(180deg)" : null, transition: "transform 0.2s"}}/>
                    </div>
                </div>
                <hr />
            </>    
        );
}