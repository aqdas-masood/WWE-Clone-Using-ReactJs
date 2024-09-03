import style from "./Navigation.module.css"

const Navigation = () => {

    return (
        <>
            <div className={`${style["mainDiv"]}`}>
                

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid" id={`${style["mainDiv"]}`}>
                        <a href="https://www.wwe.com/" target="_blank">
                            <img id={`${style["logoImage"]}`} src="src/assets/wwe_logo.png" alt="WWE LOGO"/>
                        </a>
                        
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{margin: 0}}>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0"  id={`${style["aTags"]}`}>
                                
                                <li class="nav-item">
                                <a class="nav-link active" id={`${style["aTags"]}`} aria-current="page" href="#">WWE NETWORK</a>
                                </li>
                                
                                <li class="nav-item">
                                <a class="nav-link" href="#" id={`${style["aTags"]}`}>SHOWS</a>
                                </li>

                                <li class="nav-item">
                                <a class="nav-link" href="#" id={`${style["aTags"]}`}>SUPERSTARS</a>
                                </li>

                                <li class="nav-item">
                                <a class="nav-link" href="#" id={`${style["aTags"]}`}>TICKETS</a>
                                </li>
                                
                                <li class="nav-item">
                                <a class="nav-link" href="#" id={`${style["aTags"]}`}>SHOP</a>
                                </li>
                                
                            </ul>
                            
                            {/* <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form> */}

                            
                        </div>
                        <img id={`${style["logoImage2"]}`} src="src/assets/wwe_network.png" alt="WWE NETWORK LOGO"/>
                        <div style={{height: '35px', width: '2.5px', backgroundColor: 'rgba(68,68,68,255)', marginLeft: '25px'}}></div>
                        <div className={`${style["userLogoDiv"]}`}>
                            <img id={`${style["userLogo"]}`} src="src/assets/user.png" alt="WWE NETWORK LOGO"/>
                        </div>
                        <img id={`${style["searchLogo"]}`} src="src/assets/search8.png" alt="WWE NETWORK LOGO"/>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navigation;
