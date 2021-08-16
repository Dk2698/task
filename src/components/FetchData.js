import React, { useState } from 'react'
import axios from "axios";
import { Avatar, Divider, Paper,List,ListItem,ListItemAvatar, ListItemText} from '@material-ui/core';

function FetchData() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState()
    const [totalpage, seTotalPage] = useState()



    const fetchData = () =>{
        axios.get(`https://reqres.in/api/users?page=2`)
            .then((response)=>{
                console.log(response)
                // console.log(response.data.data)
                setData(response.data.data);
                console.log(response.data.data)
                console.log(response.data.page)
            });
        
    };

    return (
        <div>
            <h1>hi hello</h1>

            <button onClick={fetchData}>click here</button>

            <div className="">
                <Paper>
                    { data.map((element) =>(
                        <List key = {element.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={element.avatar}/>
                                </ListItemAvatar>
                                <ListItemText>
                                    First Name :{element.first_name}
                                    Last Name  :{element.last_name}
                                    Email      :{element.email}
                                </ListItemText>
                            </ListItem>
                            <Divider variant="inset" componenet="li"/>
                        </List>
                    ))}     
                </Paper>
            </div>

        </div>
    )
}

export default FetchData;


