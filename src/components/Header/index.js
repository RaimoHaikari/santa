import SiteLogo from "../SiteLogo";

const Header = () => {
    return (
        <header className="primary-header">
            <div className="container">
                <div className="nav-wrapper">
                    <SiteLogo />
                    <h1 className="fs-primary-heading">Santa's Little Printer</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;