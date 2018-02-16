import axios from 'axios';

getServerAddress(){
  return `http://${process.env.POD_IP}/${process.env.POD_PORT}`, 0
}


class Redx {
    addConnection (subdomain){
        return axios.post(`${REDX_URL}/batch`, {
          frontends: [
            {url: subdomain, backend_name: subdomain}
          ],
          backends: [{
            name: subdomain,
            servers: [
              [getServerAddress(), 0]
            ]
          }]
        });
    }

    removeConnection(subdomain) {
      return axios
      .delete(`${REDX_URL}` +
        `/backends/${encodeURIComponent(subdomain)}`+
        `/${encodeURIComponent(getServerAddress())}`);
    }
}
