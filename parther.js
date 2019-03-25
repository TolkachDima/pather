var needle = require("needle");
var cheerio = require("cheerio");
var async = require("async");

//var aUrl = [];
url = "http://code.mu/tasks/javascript/?fbclid=IwAR1lJ0KJUJXImumwVgoFyUWRHQly-OHCULINwJhgCyFWMOuR5ZSjUGdFTso";
//aUrl[1] = "https://tmall.aliexpress.com/item/HP-15-bw083ur-15-6-A9-9420-500-6-AMD-R520-DVD-RW-Win10/1000005035871.html?spm=a2g0r.10010208.1000013.5.1162cf6faax1be&traffic_analysisId=recommend_2088_3_-1_iswistore&scm=1007.13339.90158.0&pvid=22c1d615-40cb-4e6c-ba20-1b4c21562f9b&tpp=1";
//aUrl[2] = "https://tmall.aliexpress.com/item/Apple-MacBook-Pro-13-2-3-Dual-Core-i5-128/1000004612394.html?spm=a2g02.8538954.p79498a.2.6a7cfd13dbb6m2";


//var timerId = setTimeout(function(){

// var q = async.queue(function(url){
        needle.get(url,function(err,res){
        if(err) throw(err);
        
        var $ = cheerio.load(res.body);
        
        console.log($(".h1-block.span").text());
        
        //img = $(".img-thumb-item img");
        
        // img.each(function(i,val){
        //     console.log($(val).attr("src").replace("50x50","640x640"));
        //     });
        
        });
    // },10);

// var i = 0;
// while(aUrl.length > i)
// {
//     q.push(aUrl[i]);
//     i++;
// }


//},1000);
