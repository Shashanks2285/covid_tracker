import React, { useEffect, useState } from "react";


const Statewise = ()=>{
    const [data,setData]=useState([]);
    const getCovidData = async ()=>{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await  res.json();
        setData(actualData.statewise);
    }
    useEffect(()=>{
        getCovidData();
    },[]);

    return (
        <>
        <div className="whole_body">
                <div className="mainheading">
                    <h1 className="mb-5"><span className="font-weight-bold">INDIA </span>COVID-19 Dashboard</h1>
                </div>

                <div className="tablecontainer">
                    <table>
                        <thead className="tableh">
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated on</td>
                            </tr>
                        </thead>
                        <tbody className="tableb">
                        {
                            data.map((currElem,ind)=>{
                                return(
                                <tr key={ind}>
                                    <td>{currElem.state}</td>
                                    <td>{currElem.confirmed}</td>
                                    <td>{currElem.recovered}</td>
                                    <td className="death">{currElem.deaths}</td>
                                    <td>{currElem.active}</td>
                                    <td>{currElem.lastupdatedtime}</td>
                                </tr>
                                )
                            })
                        }
                            
                        </tbody>
                    </table>
                </div>
        </div>
        </>
    );
}

export default Statewise;