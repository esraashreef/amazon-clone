import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 
  'https://us-central1-clone-dc71c.cloudfunctions.net/api'
  //'http://localhost:5001/clone-dc71c/us-central1/api'
    
});

export default instance;

