import React from "react";
import styles from "./wrapper.module.scss";

function Wrapper(BaseComponent){
    return function EnhancedComponent(props){
        return <BaseComponent {...props} />

    }
}
export default Wrapper;