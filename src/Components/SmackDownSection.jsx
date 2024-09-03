import style from "./SmackDownSection.module.css"

const SmackDownSection = () => {
    return (
        <div className={style.mainDiv}>
            <div className={style.div1}>
                <div className={style.div1Nested1}>
                    <img src="src/assets/Smackdown_event_logo.png" alt="loading..." id={style.image1} />
                </div>
                
                <div>
                    <img src="src/assets/Smack2.png" id={style.image2}/>
                </div>
            </div>

            <div>
                <img src="src/assets/pic1.jpg" alt="loading..." className={style.image3}/>
            </div>

            <div className={style.div3}>
                <div className={style.div3Nested1}>
                    <p className={style.p1}>SmackDown results for 7/19</p>
                    <p className={style.p2}>The Bloodline destroys Cody Rhodes and Kevin Owens</p>
                </div>
                
                <div className={style.div3Nested2}>
                    <a href="" id={style.button1} className={style.aTagClass}>Results</a>
                    <a href="" id={style.button2} className={style.aTagClass}> <img src="src/assets/play_logo.png" id={style.aImage1}/> Watch Highlights</a>
                </div>
            </div>
        </div>
    );
};

export default SmackDownSection;
