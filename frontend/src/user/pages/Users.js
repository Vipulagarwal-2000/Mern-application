import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  //dummy data
  const USERS = [
    {
        id: "u1",
        name: "Max",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtK6zhmxwK48tn506y2DHbjDZlyHF2LX8ncNoAKhjYoLc1zVvZY-pr1juNySjdmY8Eaug&usqp=CAU",
        places: 5,
      },
  ];

  return <UsersList items={USERS}/>;
};

export default Users;
