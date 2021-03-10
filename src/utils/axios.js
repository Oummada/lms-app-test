import axios from "axios";

// la partie provider qui se repete pour chaque requete http

export default axios.create ({
    baseURL:'https://console.firebase.google.com/project/lms-project-4b9ec/database/lms-project-4b9ec-default-rtdb/data/'
}) 