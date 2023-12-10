import { useState, useEffect } from "react";
import * as client from "./users/client";
import { setCurrentUser } from "./users/userReducer";
import { useDispatch } from "react-redux";
import {getAccessToken} from "./utils/getAccessToken";
import {CLIENT_ID, CLIENT_SECRET} from "./utils/tokens";
import {setAccessToken} from "./AccessTokenReducer";


function RootComponent({show, children}) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchCurrentUser = async () => {
    try {
      const currentUser = await client.account();
      dispatch(setCurrentUser(currentUser));
    } catch (error) {}
  };

  useEffect(() => {
    fetchCurrentUser();
    getAccessToken(CLIENT_ID, CLIENT_SECRET).then((token) => {
      dispatch(setAccessToken(token));
    });
    setLoading(false);
    }, [dispatch]);

  return <div>{!loading && children}</div>;

}

export default RootComponent;