import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve,extname,sep} from 'node:path';
const root=fileURLToPath(new URL('./public/',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.ico':'image/x-icon','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{
 try{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{Allow:'GET, HEAD'});return res.end();}
  const u=new URL(req.url,'http://localhost');
  if(u.pathname==='/api/health'){res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify({ok:true,app:'CATMEMECHIMP',version:'1.0.0'}));}
  const p=decodeURIComponent(u.pathname),file=resolve(root,'.'+(p==='/'?'/index.html':p));
  if(!file.startsWith(root.endsWith(sep)?root:root+sep)){res.writeHead(403);return res.end('Forbidden');}
  if(!(await stat(file)).isFile())throw new Error('not-file');
  const data=await readFile(file);
  res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Content-Length':data.length,'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Cache-Control':p.startsWith('/assets/')?'public,max-age=86400':'no-cache','Content-Security-Policy':"default-src 'self'; img-src 'self' blob: data:; style-src 'self' 'unsafe-inline'; font-src 'self'; script-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"});
  res.end(req.method==='HEAD'?undefined:data);
 }catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('This cat wandered off. Page not found.');}
});
server.listen(Number(process.env.PORT||8197),'127.0.0.1',()=>console.log('CATMEMECHIMP is purring at http://127.0.0.1:'+server.address().port));
