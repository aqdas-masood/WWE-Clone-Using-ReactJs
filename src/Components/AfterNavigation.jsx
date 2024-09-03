import style from "./AfterNavigation.module.css"

const AfterNavigation = ({}) => {
    return (
        <div className={`${style["mainDiv"]}`}>
            <div className={`${style["textDiv"]}`}>
                <p id={`${style["p1"]}`}>SmackDown highlights: July 19, 2024</p>
            </div>

            <div style={{padding: '8px 0', display: 'flex'}}>
                <div>
                    <img src="src/assets/videoPic1.png" alt="loading..." id={style.image1}/>
                </div>
                
                <div>
                    <img src="src/assets/videoPic2.png" alt="loading..." id={style.image2}/>
                </div>
                
                <div>
                    <img src="src/assets/videoPic3.png" alt="loading..." id={style.image3}/>
                </div>

                <div>
                    <img src="src/assets/videoPic4.png" alt="loading..." id={style.image4}/>
                </div>
                
                <div>
                    <img src="src/assets/videoPic5.png" alt="loading..." id={style.image5}/>
                </div>
                
                <div>
                    <img src="src/assets/videoPic6.png" alt="loading..." id={style.image6}/>
                </div>
                
            </div>
        </div>
    );
};

export default AfterNavigation;
