const Menu = ({changeHandler, index, options}) => {

    const active = options.filter((o,i) => i === index)[0];

    console.log(active)

    return (
        <div className="container">

            <div className="menu-bar">

                <div>
                    <label>Order of points:</label>
                    <select
                        onChange ={ changeHandler }
                        value = { options[index].src}
                    >
                        {
                            options.map((o,i) => {
                                return (
                                    <option
                                        key = {`menu-options-${i}`}
                                        value = {o.src}
                                    >
                                    {
                                        o.name
                                    }
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                <div>
                    <a rel="noreferrer" href={active.url} target="_blank">View notebook</a>
                </div>

                <div>
                    <span className="fw-bold fs-secondary-heading text-accent-400">{active.title}</span>
                </div>
            
            </div>

        </div>
    );
};

export default Menu;
