import axios from "axios";
var api={}
api={
    useDatails: async function (cb, payload) {
        await axios.post("http://localhost:8090/onitouser/list", payload).then((response) => {
          cb(true, response);
          return response
        }).catch((err) => {
          cb(false, err);
        })
      },
}
export default api