import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

const Counter = ({count,inc,dec,upd,rnd}) => {
    return (
        <>
        <div className="counter-block">
        <div className="main-number">
          {count}
        </div>
        <div className="row-elems">
          <button onClick={inc} className="btn-num inc">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.8292 17.2092H22.7906V2.17054C22.7906 1.48546 21.8604 0 19.9999 0C18.1395 0 17.2092 1.48555 17.2092 2.17054V17.2093H2.17054C1.48554 17.2092 0 18.1395 0 19.9998C0 21.8602 1.48554 22.7906 2.17054 22.7906H17.2093V37.8293C17.2093 38.5142 18.1395 39.9999 20 39.9999C21.8605 39.9999 22.7907 38.5142 22.7907 37.8293V22.7906H37.8295C38.5144 22.7906 40 21.8604 40 19.9998C40 18.1393 38.5142 17.2092 37.8292 17.2092Z" fill="white"/>
            </svg>              
          </button>
          <button onClick={dec} className="btn-num dec">
            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.2943 0H24.7619H15.2381H4.70571C2.1181 0 0 2.17333 0 4.76191C0 7.35048 2.1181 9.52381 4.70571 9.52381H15.2381H24.7619H35.2943C37.8819 9.52381 40 7.35048 40 4.76191C40 2.17333 37.8819 0 35.2943 0Z" fill="white"/>
            </svg>  
          </button>
          <button onClick={upd} className="btn-num update">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.5056 2.1609C39.176 1.83143 38.7852 1.66615 38.3337 1.66615C37.8824 1.66615 37.4922 1.83143 37.1619 2.1609L33.7767 5.52077C31.9191 3.76709 29.7921 2.40827 27.3964 1.44495C25.001 0.48155 22.535 -6.10352e-05 20.0001 -6.10352e-05C15.2256 -6.10352e-05 11.0592 1.44505 7.49998 4.3359C3.94072 7.22639 1.59707 10.9977 0.468567 15.6508L0.468567 15.833C0.468567 16.0587 0.550933 16.2541 0.715939 16.4189C0.880946 16.5839 1.07614 16.6662 1.30181 16.6662H6.48404C6.86614 16.6662 7.12637 16.4665 7.26538 16.0674C7.99446 14.3314 8.45436 13.3159 8.64554 13.0206C9.86069 11.0414 11.4753 9.4875 13.4893 8.35899C15.5035 7.23058 17.6735 6.66615 19.9998 6.66615C23.4897 6.66615 26.5191 7.85549 29.0888 10.234L25.4944 13.8276C25.1654 14.1575 24.9999 14.5483 24.9999 14.9998C24.9999 15.4511 25.1653 15.8418 25.4944 16.1716C25.8247 16.5015 26.2155 16.6663 26.6669 16.6663H38.3337C38.7851 16.6663 39.1759 16.5015 39.5056 16.1716C39.8352 15.8418 40 15.4512 40 14.9998V3.33282C40 2.8814 39.8362 2.49091 39.5056 2.1609Z" fill="white"/>
            <path d="M38.5154 23.3334H33.5154C33.1334 23.3334 32.873 23.5329 32.7344 23.9323C32.0056 25.6685 31.5452 26.6836 31.3545 26.9789C30.1389 28.9576 28.5243 30.5121 26.5108 31.6405C24.4965 32.7693 22.3265 33.3331 20.0001 33.3331C18.3162 33.3331 16.6928 33.0208 15.1305 32.396C13.568 31.7705 12.1702 30.8849 10.9377 29.739L14.5056 26.1714C14.8353 25.8418 15.0003 25.4507 15.0003 24.9996C15.0003 24.5482 14.8353 24.1571 14.5056 23.8277C14.1757 23.4975 13.7852 23.3323 13.3338 23.3323H1.66685C1.21515 23.3323 0.824484 23.4975 0.494654 23.8277C0.164824 24.1572 0 24.5483 0 24.9996L0 36.6666C0 37.1176 0.164824 37.5087 0.494745 37.8384C0.824849 38.1677 1.21552 38.3335 1.66694 38.3335C2.11826 38.3335 2.50875 38.1678 2.83876 37.8384L6.19808 34.4787C8.05584 36.2492 10.1697 37.6124 12.5396 38.5672C14.9094 39.5224 17.3617 39.9994 19.8962 39.9994C24.6535 39.9994 28.8027 38.5541 32.3443 35.6636C35.886 32.7732 38.2124 29.0011 39.324 24.3485C39.3414 24.3138 39.3496 24.253 39.3496 24.1665C39.3496 23.9405 39.2669 23.7458 39.102 23.5803C38.9369 23.4162 38.7414 23.3334 38.5154 23.3334Z" fill="white"/>
            </svg>
          </button>
          <button onClick={rnd} className="btn-num random">+R</button>
        </div>
      </div>
      </>
    )
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  const {inc, dec, upd, rnd} = bindActionCreators(actions, dispatch);
  return {
    inc,
    dec,
    upd,
    rnd
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);