

const NumSelector =()=>{


    return (
        <div className="numSelector">
 
            {
                [...Array(9)].map((_ , index)=>{

                    return(
                        <div className="singleNum" key={index}>{index+1}</div>
                    )
                })
            }
          
        </div>
    )

}


export default NumSelector ;