import React from "react";

export default function BiggerBox(props) {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 offset-md-4 border border-light border-5 rounded- bg-success bg-gradient" >
                        <div className="row d-flex align-items-center">
                            <div className="col-3">
                                <h1 className="text-warning">{props.count}</h1>
                            </div>
                            <div className="col-8 offset-mr-1 bg-light border rounded-4">
                                <div className="row d-flex align-items-center ">
                                <div className="col-3">
                                <img src={props.url} className="rounded-circle"alt="avatar" />
                                </div>
                                <div className="col-9">
                                    <h2 className="text-center">{props.time}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
