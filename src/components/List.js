
import data from "../providers/DataProvider";
import ListItem from "./ListItem";
import {useState} from 'react'

export default function List() {
    
    const [state, setState] = useState(data.map(eachData => {
        return {
            ...eachData,
            isCollapsed: false,
        }
    }));

    const toggleCollapse = (item) => {
        setState(prevCollapse => {
            return prevCollapse.map(prevCollapseItem => {
                if(item.id === prevCollapseItem.id) {
                    return {
                        ...prevCollapseItem,
                        isCollapsed: !prevCollapseItem.isCollapsed
                    }
                }
                return {
                    ...prevCollapseItem
                }   
            })
        })
    }
    
    return (
        state.map(paragraph => {
            return (
                    <ListItem key={paragraph.id} 
                    toggleCollapse={() => {
                        toggleCollapse(paragraph)
                    }}
                    description={paragraph.desc} 
                    title={paragraph.title} 
                    isCollapsed={paragraph.isCollapsed}
                    />
                )
            })
        )

}