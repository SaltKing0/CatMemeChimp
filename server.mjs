import http from 'node:http';
import {createReadStream} from 'node:fs';
import {realpath,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve,extname,sep} from 'node:path';
const root=await realpath(fileURLToPath(new URL('./public/',import.meta.url)));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.mp4':'video/mp4','.ico':'image/x-icon','.woff2':'font/woff2'};
const baseHeaders={ 'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Cache-Control':'no-cache','Content-Security-Policy':"default-src 'self'; img-src 'self' blob: data:; media-src 'self' blob:; style-src 'self' 'unsafe-inline'; font-src 'self'; script-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"};
const portValue=process.env.PORT??'8197',port=Number(portValue);
if(!Number.isInteger(port)||port<0||port>65535){console.error(`Invalid PORT: ${portValue}`);process.exit(1)}
const server=http.createServer(async(req,res)=>{
 try{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{Allow:'GET, HEAD'});return res.end();}
  const u=new URL(req.url,'http://localhost');
  if(u.pathname==='/api/health'){res.writeHead(200,{'Content-Type':'application/json',...baseHeaders});return res.end(JSON.stringify({ok:true,app:'MEMECHIMP',version:'1.0.0'}));}
  let p;try{p=decodeURIComponent(u.pathname)}catch{res.writeHead(400,{'Content-Type':'text/plain',...baseHeaders});return res.end('Bad request.')}
  const requested=resolve(root,'.'+(p==='/'?'/index.html':p));
  if(requested!==root&&!requested.startsWith(root+sep)){res.writeHead(403,{'Content-Type':'text/plain',...baseHeaders});return res.end('Forbidden');}
  const file=await realpath(requested);
  if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403,{'Content-Type':'text/plain',...baseHeaders});return res.end('Forbidden');}
  const info=await stat(file);if(!info.isFile())throw Object.assign(new Error('not-file'),{code:'ENOENT'});
  const type=types[extname(file)]||'application/octet-stream',headers={...baseHeaders,'Content-Type':type, 'Accept-Ranges':'bytes','Content-Length':info.size,'Cache-Control':p.startsWith('/assets/')?'public,max-age=86400':'no-cache'};
  const range=req.headers.range;let start=0,end=Math.max(0,info.size-1),status=200;
  if(range){const match=/^bytes=(\d*)-(\d*)$/.exec(range);if(!match)throw Object.assign(new Error('bad-range'),{code:'ERANGE'});if(match[1]===''){const suffix=Number(match[2]);if(!suffix)throw Object.assign(new Error('bad-range'),{code:'ERANGE'});start=Math.max(0,info.size-suffix)}else{start=Number(match[1]);end=match[2]?Number(match[2]):end}if(start<0||start>=info.size||end<start){res.writeHead(416,{...headers,'Content-Range':`bytes */${info.size}`});return res.end()}end=Math.min(end,info.size-1);status=206}
  res.writeHead(status,{...headers,...(status===206?{'Content-Range':`bytes ${start}-${end}/${info.size}`}:{}),'Content-Length':end-start+1});
  if(req.method==='HEAD')return res.end();
  const stream=createReadStream(file,{start,end});stream.on('error',()=>res.destroy());stream.pipe(res);
 }catch(error){if(res.headersSent)return res.destroy();const badRange=error?.code==='ERANGE',missing=error?.code==='ENOENT'||error?.code==='ENOTDIR';if(!missing&&!badRange)console.error(error);res.writeHead(badRange?416:missing?404:500,{'Content-Type':'text/plain',...baseHeaders});res.end(badRange?'Requested range is not satisfiable.':missing?'This meme wandered off. Page not found.':'Internal server error.')}
});
server.listen(port,'127.0.0.1',()=>console.log('MEMECHIMP is purring at http://127.0.0.1:'+server.address().port));
