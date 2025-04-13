import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";


function Home(){
    return(
        <>
        <div className="mb-3">
            <Link to="/electronic">
            <Header
            concertName="Electronic Dance Party"
            likes={1337}
            onLike={() => {}}
          />
          </Link>
        </div>
        <div className="mb-3">
        <Link to="/rock">
            <Header
            concertName="Rock 'n Roll Revival"
            likes={666}
            onLike={() => {}}
          />
          </Link>
        </div>
        <div>
        <Link to="/indie">
            <Header
            concertName="Indie Under the Stars"
            likes={1}
            onLike={() => {}}
          />
          </Link>
        </div>
        </>
    )
}

export default Home