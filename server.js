import corsAnywhere from "cors-anywhere";

const host = "0.0.0.0";
const port = 8080;                                           
 
corsAnywhere.createServer({
  originWhitelist: [], // sabko allow karega
}).listen(port, host, () => {
  console.log(`🚀 CORS Proxy running on http://${host}:${port}`);
});
