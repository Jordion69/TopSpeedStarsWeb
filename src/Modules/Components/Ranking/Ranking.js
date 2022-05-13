import React from 'react'
import BiggerBox from './BiggerBox'
import Flag from './Flag'
import { useState, useEffect } from 'react';
import Loading from '../../Utils/Loading';





export default function Ranking(props) {
const count = 0
const [rankingList, setRankingList] = useState([])
const [loading, setLoading] = useState(false)

	const getRanking = async (url) => {

        try {
            setLoading(true)
            const resp = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const rankingList = await resp.json();
            setRankingList(rankingList);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    };

    useEffect(() => {
        getRanking(process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_BACKEND_RANKING_LIST);
    }, []);



  return (
	<section>


    <Flag/>
    {
        loading && <Loading
      animation='border'
      variant='light'
    />
    }
    
    {/* <div>{!rankingList ? <Spinner /> : rankingList.body.map((item) => <BiggerBox key={item.id} count={count + 1} url={item.url} time={item.time}  />)}</div> */}

    {rankingList.map((time, index) => (<BiggerBox time={time.lapTime} count={index + 1} url={time.userId}/>))}
	

	</section>
  )
}
