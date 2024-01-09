import React from 'react'
import './announce.css'
import tele from "../../public/tele.png"
const AnounceMent = () => {
    return (
        <>
            <div className="announceMent" id='announcement'>
                <div className="title">
                    <h1 style={{marginTop:"1.2rem"}}>Social Links</h1>
                </div>
                <div className="boxes">

                    <div className="box">
                        <div className="boxContent">
                            <a href="">  <img src="../../public/tele.png" alt="" />
                            </a>
                            <button>Join Now</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="boxContent">
                            <a href="">  <img src="./../public/wpp.png" alt="" />
                            </a>
                            <button>Join Now</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="boxContent">
                            <a href="">  <img src="public/ig.png" alt="" />
                            </a>
                            <button>Join Now</button>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default AnounceMent