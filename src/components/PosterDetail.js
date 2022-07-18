import React from "react";
import { useParams } from "react-router-dom"


function PosterDetail() {
    let params = useParams();
    console.log(params);
    console.log(window.location.origin);

    return (
        <>
        <table>
            <thead>
                <tr>
                    <td>글번호 {params.id}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={window.location.origin+"/img/"+params.img} alt="대체문구"/></td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default PosterDetail;