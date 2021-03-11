import axios from "axios";

// la partie provider qui se repete pour chaque requete http

export default axios.create ({
    baseURL:'https://lms-project-4b9ec-default-rtdb.firebaseio.com/'
}) 