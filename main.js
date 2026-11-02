require('dotenv').config()

const express=require('express');
const app=express();

const githubdata={
  "login": "vibhuti387",
  "id": 176944102,
  "node_id": "U_kgDOCovz5g",
  "avatar_url": "https://avatars.githubusercontent.com/u/176944102?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vibhuti387",
  "html_url": "https://github.com/vibhuti387",
  "followers_url": "https://api.github.com/users/vibhuti387/followers",
  "following_url": "https://api.github.com/users/vibhuti387/following{/other_user}",
  "gists_url": "https://api.github.com/users/vibhuti387/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vibhuti387/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vibhuti387/subscriptions",
  "organizations_url": "https://api.github.com/users/vibhuti387/orgs",
  "repos_url": "https://api.github.com/users/vibhuti387/repos",
  "events_url": "https://api.github.com/users/vibhuti387/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vibhuti387/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vibhuti Seth",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-07-29T17:34:49Z",
  "updated_at": "2026-08-09T07:30:18Z"
}
app.get('/',(req,res)=>{
    res.send("hello you are at home page ");
})
app.get('/twitter',(req,res)=>{
    res.send("TWITTER RN");
})
app.get('/login',(req,res)=>{
    res.send('<h1>Login right there</h1>');
})
app.get('/git',(req,res)=>{
    res.json(githubdata)
})
app.listen(process.env.PORT,()=>{
    console.log("RUNNNINGGG!!!");
})  