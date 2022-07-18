import axios from "axios";
import React, {useState, useEffect} from "react";
import './PosterList.css';

function PosterList() {
    const [testList, setTestList] = useState(null);
    const [error, setError] = useState(null);

    const test = {id:0, img: ''}
    const [testData, setTestData] = useState(test);

    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

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

    function openImg(testId, testImg, testName){
        console.log(testId);
        console.log(testImg);
        console.log("=========");
        window.location.href=`/detail/${testId}/${testImg}/${testName}`; // 억음부호 ~키 아래 `
    }

    const filterTitle = testList.filter((p) => {
        return p.name.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
    })
    return (
        <>
        <input type="text" value={search} onChange={onChange}/>
        {filterTitle.map(test=>(
            <div onClick={()=>{openImg(test.id, test.img, test.name)}}>
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
                        <td><img src={"img/"+test.img} alt="img" ></img></td>
                    </tr>
                    <tr>
                        <td>{test.name}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        ))}
        </>
    )
    
}

export default PosterList;