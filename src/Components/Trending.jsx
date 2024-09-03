import style from "./Trending.module.css"

const Trending = ({}) => {
    return (
        <div className={style.mainDiv}>
            <div className={style.div1}>
                <div>
                    <p id={style.p1}>Trending</p>
                    <p id={style.p2}>WWE News</p>
                </div>

                <div>
                    <a className={style.aTag1}>More WWE News</a>
                </div>
            </div>

            <div className={style.div2}>
                <div className={style.div2Nested1}>
                    <div class="card" style={{width: '17.5rem', backgroundColor: 'transparent', color: 'white', fontWeight: 'bold', marginTop: 0}}>
                        <img src="src/assets/trending1.png" class="card-img-top" alt="loading..." />
                        <div class="card-body" style={{padding: '11px 0 0 0', lineHeight: '1.2', display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{width: '225px'}}>
                                <p class="card-text">
                                    Solo Sikoa is out to take the Undisputed WWE Title from Cody Rhodes
                                </p>
                            </div>
                            
                            <div>
                                <img src="src/assets/arrow_of_trending.png" className={style.trending_arrow} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.div2Nested2}>
                    <div class="card" style={{width: '17.5rem', backgroundColor: 'transparent', color: 'white', fontWeight: 'bold'}}>
                        <img src="src/assets/trending3.png" class="card-img-top" alt="loading..." />
                        <div class="card-body" style={{padding: '11px 0 0 0', lineHeight: '1.2', display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{width: '225px'}}>
                                <p class="card-text">
                                    Damian Priest Live added to SummerSlam weekend
                                </p>
                            </div>
                            
                            <div>
                                <img src="src/assets/arrow_of_trending.png" className={style.trending_arrow} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.div2Nested3}>
                    <div class="card" style={{width: '17.5rem', backgroundColor: 'transparent', color: 'white', fontWeight: 'bold'}}>
                        <img src="src/assets/trending4.png" class="card-img-top" alt="loading..." />
                        <div class="card-body" style={{padding: '11px 0 0 0', lineHeight: '1.2', display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{width: '225px'}}>
                                <p class="card-text">
                                    CM Punk to battle Drew McIntyre with Special Guest Referee Seth "Freakin" Rollins
                                </p>
                            </div>
                            
                            <div>
                                <img src="src/assets/arrow_of_trending.png" className={style.trending_arrow} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.div2Nested4}>
                    <div class="card" style={{width: '17.5rem', backgroundColor: 'transparent', color: 'white', fontWeight: 'bold'}}>
                        <img src="src/assets/trending2.png" class="card-img-top" alt="loading..." />
                        <div class="card-body" style={{padding: '11px 0 0 0', lineHeight: '1.2', display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{width: '225px'}}>
                                <p class="card-text">
                                    Enter the #SummerSlamShirtContest to win a trip to SummerSlam
                                </p>
                            </div>
                            
                            <div>
                                <img src="src/assets/arrow_of_trending.png" className={style.trending_arrow} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;
