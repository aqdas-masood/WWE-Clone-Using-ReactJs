import style from "./HeroSectionAdvertisement.module.css"

const HeroSectionAdvertisement = ({adv}) => {

    return (
        <>
            {/* Advertisement coding without Bootstrap */}
            {/* <div className={style.mainDiv} style={{backgroundColor: "aqua"}}>
                <img id={`${style["picture1"]}`} src="src/assets/adv1.png" alt="Advertisement loading..." />
            </div> */}


            {/* Using bootstrap */}
            <div className="d-flex justify-content-center align-items-center">
                <img src="src/assets/adv1.png" alt="Advertisement loading..." id={`${style["picture1"]}`} />
            </div>

        </>
    );
};

export default HeroSectionAdvertisement;
