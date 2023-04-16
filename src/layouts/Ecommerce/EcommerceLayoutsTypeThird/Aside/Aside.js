import React from "react";
import Badge from "react-bootstrap/Badge";
import InputPage from "../../../../components/InputPage/InputPage";
import Divider from "../../../../components/Divider/Divider";
import Button from "../../../../components/Button/Button";
import {Cart} from "../../../../components/Icons/Icons";
import SmallBadge from "../../../../components/SmallBadge/SmallBadge";
import classes from "./Aside.module.css"

const buttonText = "Buy Now";

const Aside = (props) => {
    return (
        <div className={`${classes.aside}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
           <div className={classes.gridWrapper}>
               <div className={classes.topLevel}>
                   <div className={classes.first}>
                       <SmallBadge>
                           {props.badge}
                       </SmallBadge>
                   </div>
                   <div className={classes.second}>
                       <h2>{props.title}</h2>
                       <p className={`bold-text ${classes.boldText}`}>{props.article}</p>

                   </div>
                   <div className={classes.third}>
                       <p className="normal-text">{props.description}</p>
                   </div>
               </div>
               <div className={classes.middleLevel}>
                   <div className={classes.first}>
                       <p className={classes.label}>Quantity</p>
                       <InputPage
                           classes="big"
                           value={props.value}
                           decrease={props.decrease}
                           increase={props.increase}

                       />
                   </div>
                   <div className={classes.second}>
                       <p className={classes.label}>Size</p>
                       {props.select}
                   </div>
                   <div className={classes.third}>
                       <p className={`small-text text-left ${classes.smallText}`}>{props.totalDescription}</p>
                       <Divider/>
                   </div>

               </div>
               <div className={classes.bottomLevel}>
                   <div className={`${classes.first} ${classes.price}`}>
                       ${props.total}
                   </div>
                   <div className={classes.second}>
                       <Button
                           link={true}
                           href={props.link}
                           classes={"primary big simple w-100 left-icon"}
                           value={buttonText}
                           leftIcon={<Cart fill="#ffffff"/>}
                       />
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Aside