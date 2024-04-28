export function Card({name,follower,following,links,username}){
    


    return <div className="shadow-2xl rounded-lg bg-slate-300 m-5 ">
        <div className="grid grid-cols-2">
            <div className=" grid col-span-2 font-mono font-bold text-2xl ml-2 mr-2"> {name}</div>
            
           <div className=" ml-2 mr-2 grid col-span-2 ">Username: {username}</div>
           <div  className=" ml-2 mr-2 grid col-span-2 text-blue-500 underline "><a href={links}>Github</a></div>
           <div className="flex justify-end col-span-2">
             <div className="m-2 ">Followers: {follower} </div>
             <div className="m-2">Following: {following} </div>
           </div>
           
        </div>
    </div>
}