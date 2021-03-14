import { useEffect } from 'react';
import { signOut } from '../../services/user';
import { useHistory } from 'react-router-dom';

export const Logout = (props) => {
    const { clearCurrentUser, currentUser } = props;
    const history = useHistory();
  
    useEffect(() => {
      signOut(currentUser)
        .then(() => clearCurrentUser())
        .finally(() => history.push("/"));
    }, [history, clearCurrentUser, currentUser]);
  
    return "";
}
