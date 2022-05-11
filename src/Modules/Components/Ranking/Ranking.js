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
            console.log(rankingList.body);
            setRankingList(rankingList.body);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };
    console.log(rankingList);

    useEffect(() => {
        getRanking(process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_BACKEND_RANKING_LIST);
    }, []);



  return (
	<section>

	

	  
    <Flag/>
    <Loading
      animation='border'
      variant='light'
    />
    {/* <div>{!rankingList ? <Spinner /> : rankingList.body.map((item) => <BiggerBox key={item.id} count={count + 1} url={item.url} time={item.time}  />)}</div> */}

	<BiggerBox/>

	</section>
  )
}
