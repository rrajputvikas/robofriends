import React from "react";
import Card from "./Card";

// const CardList = ({data}) => {
//     const cardComp = data.map((user,i) => {
//         return(
//             <Card 
//                 key={i} 
//                 id={user.id} 
//                 name={user.name}
//                 email={user.email}
//             />
//         );
//     });
//     return(
//         <div>
//             {cardComp}
//         </div>
//     );
// }

const CardList = ({data}) => {
    return(
        <div>
            {
                data.map((user,i) => {
                    return(
                        <Card 
                            key={i} 
                            id={user.id} 
                            name={user.name}
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;