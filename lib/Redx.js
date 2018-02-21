import axios from 'axios';

getServerAddress(){
  return `http://${process.env.POD_IP}:${process.env.POD_PORT}`;
}


class Redx {
    async addConnection (subdomain){
        return axios.post(`${proccess.env.REDX_URL}/batch`, {
          frontends: [
            {url: `${subdomain}.${process.env.BASE_DOMAIN}`, backend_name: subdomain}
          ],
          backends: [{
            name: subdomain,
            servers: [
              [getServerAddress(), 0]
            ]
          }]
        });
    }

    async removeConnection(subdomain) {
      return axios
      .delete(`${process.env.REDX_URL}` +
        `/backends/${encodeURIComponent(subdomain)}`+
        `/${encodeURIComponent(getServerAddress())}`);
    }
}

export Redx;
