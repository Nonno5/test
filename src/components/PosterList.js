import axios from "axios";
import React, {useState, useEffect} from "react";
import './PosterList.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PosterDetail from './PosterDetail';

function PosterList() {
    const [testList, setTestList] = useState(null);
    const [error, setError] = useState(null);

    const test = {id:0, img: ''}
    const [testData, setTestData] = useState(test);

    const fetchTest = async() => {
        try{
            const response=await axios.get("/test");
            setTestList(response.data.posterList);
        }catch(e){
            console.log("error");
        };
    }

    useEffect(()=>{
        fetchTest();
    },[]);

    if(error) return <div>에러 발생~~~~~</div>
    if(!testList) return null;

    function openImg(testId, testImg){
        console.log(testId);
        console.log(testImg);
        console.log("=========");
        window.location.href=`/detail/${testId}/${testImg}`; // 억음부호 ~키 아래 `
    }
    return (
        <>
        {testList.map(test=>(
            <table className="common-table">
                <thead>
                    <tr>
                        <td>
                            {test.id}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={"img/"+test.img} alt="img" onClick={()=>{openImg(test.id, test.img)}}></img></td>
                    </tr>
                    <tr>
                        <td>{test.name}</td>
                    </tr>
                </tbody>
            </table>
        ))}
        </>
    )
    
}

export default PosterList;