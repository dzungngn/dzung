import react,{useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import Card from './Card';
let API_key="&api_key=ee3dc9b1faa44ec833e51492b2974e7d";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theater", "Kids", "Drama", "Comedy"]
const Main=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            //console.log(data.results);
            setData(data.results);
        });
    },[url_set])
    return(
        <>
            <div className="header">
                <nav>
                    <ul>
                        {
                            arr.map((value)=>{
                                return(
                                    <li><a href="#" name={value}>{value}</a></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="Enter Movie Name" className="inputText">
                        </input>
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
            <div className="container">
                {
                    (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                        return(
                            <Card info={res} key={pos}/>
                        )
                    })
                }
            </div>    
        </>
    )
}

export default Main;
