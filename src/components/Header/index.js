import SiteLogo from "../SiteLogo";

const Header = () => {
    return (
        <header className="primary-header">
            <div className="container">
                <div className="nav-wrapper">
                    <SiteLogo />
                    <h1 className="fs-primary-heading">Kaggle Santa 2022 Baseline Visualization</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;