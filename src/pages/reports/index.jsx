import React from "react";
import Imag from "../../images/заглушка.png"

function ReportsPage(props) {
    return (
        <>
            <div id="container" className="container-fluid rounded px-0 bg-white border border-grey ">

                <ul className="list-group list-group-flush box overflow-auto my-1">
                    <div className="mt-5 mb-5 pt-5 pb-5"></div>
                    <img src={Imag} className="img-fluid mt-5" alt="Responsive" />

                </ul>

            </div>
        </>


    );
}

export default ReportsPage