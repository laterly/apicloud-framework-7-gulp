window.utils={},window.app=window.utils,function(){var e="https://wap.01hour.com";window.utils.http={get:function(i,r,u){return u=u||{},new Promise(function(o,a){i.startsWith("/")||(i="/"+i);var n=function(){var t="";for(var n in r)t+=t?"&":"?",t+=n+"="+r[n];api.ajax({url:e+i+t,method:"get",timeout:5,returnAll:u.returnAll,dataType:u.dataType||"json"},function(t,n){n?a(n):o(t)})};u.noEncypt?n():app.encrypt(r,function(t){r=t,n()})})},post:function(t,i,r){return r=r||{},new Promise(function(o,a){t.startsWith("/")||(t="/"+t);var n=function(){api.ajax({url:e+t,method:"post",data:{values:i},timeout:5,returnAll:r.returnAll,dataType:r.dataType||"json"},function(t,n){n?a(n):o(t)})};r.noEncypt?n():app.encrypt(i,function(t){i=t,n()})})},error:function(t){console.log(JSON.stringify(t)),t.body?api.toast({msg:"未知故障，请联系管理员"}):api.toast({msg:"未知故障"})}}}();