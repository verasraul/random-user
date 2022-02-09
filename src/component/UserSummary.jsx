import { useEffect, useState } from 'react';


function UserSummary(props) {
    const [showMore, setShowMore] = useState(false)


    const toggleShowMore = event => {
        setShowMore(!showMore);

        // const triggerShowMore = event.target.value;
        // setShowMore((prevState) => {
        // })
    }

    let userInfo;
    if (props.userData === null) {
      userInfo = <h2>There is not user data</h2>
    } else {
      userInfo = <div><h2>{props.userData.name.first}</h2><h2>{props.userData.name.last}</h2><p>{props.userData.email}</p></div>
    }


    let addUserInfo;
    if (showMore === false){
        addUserInfo = toggleShowMore
    }else {
        addUserInfo = <div><img src={props.userData.picture.medium} /> <p><h4>Street: </h4>{props.userData.location.street.number} {props.userData.location.street.name}</p>
                                <p><h4>City:</h4>{props.userData.location.city}</p><p><h4>State:</h4> {props.userData.location.state}</p><p><h4>ZipCode:</h4> {props.userData.location.postcode}</p><p><h4>Country:</h4>{props.userData.location.country}</p>
                                <p><h4>D.O.B:</h4>{props.userData.dob.date}</p><p><h4>Age:</h4>{props.userData.dob.age}</p>
                            
                        </div>
    }

  
    return (
      <div>
         <span>
            <button onClick={toggleShowMore}>
                { showMore ? 'Hide' : 'Show More'}
            </button>
        </span>
        {
            props.editable ? <div>
                <input
                    onChange={props.toggleShowMore}
                    type='text'
                    value={props.itemCurrentlyOnSale}
                />
            </div> : null

        }
        
        {userInfo}
        {addUserInfo}
      </div>
    )
  }
  
  
  export default UserSummary;