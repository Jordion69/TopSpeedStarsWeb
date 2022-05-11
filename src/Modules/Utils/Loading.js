import React from "react";
import { Spinner } from "react-bootstrap";
import style from "./Loading.module.css";

export default function Loading(props) {
    return (
        <div className={style.divPadre}>
            <div className={style.divHijo}>
                <Spinner animation={props.animation} variant={props.variant} />
            </div>
        </div>
    );
}
