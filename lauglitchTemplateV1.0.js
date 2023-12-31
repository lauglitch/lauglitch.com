<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html lang='es' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
    <b:if cond='data:blog.pageType == &quot;index&quot;'>
    </b:if>
    <b:if cond='data:blog.pageType == &quot;index&quot;'>
      <title>
        <data:blog.pageTitle/>
      </title>
      <b:else/>
      <title>
        <data:blog.pageName/>
      </title>
    </b:if>
    <b:include data='blog' name='all-head-content'/>
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'/>
    <link href='//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css' rel='stylesheet' type='text/css'/>
    <b:skin><![CDATA[
      
/*
-----------------------------------------------
Lauglitch Theme´s XML Template
-----------------------------------------------
Name           : lauglitchTheme
Version        : 1.0
Author         : Laura Rodríguez Corpas
Author  URL    : http://www.lauglitch.com/
Date           : February, 2022
-----------------------------------------------
License:
This free Blogger template is licensed under the Creative Commons Attribution 3.0 License, which permits both personal and commercial use.
However, to satisfy the 'attribution' clause of the license, you are required to keep the footer links intact which provides due credit to its authors. For more specific details about the license, you may visit the URL below:
http://creativecommons.org/licenses/by/3.0/
----------------------------------------------- */
/*
simple hack better layout
*/
body#layout{width:100%;float:left;padding-top: 70px;}
body#layout div.widget{position:;}
body#layout div.section{position:initial;overflow:hidden;}
.collapse {display: none;}
#navbar-iframe{display:none;}*{padding:0;margin:0}
a,abbr,acronym,address,applet,b,big,blockquote,body,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,i,iframe,img,ins,kbd,label,legend,li,object,ol,p,pre,q,s,samp,small,span,strike,strong,sub,sup,tt,u,ul,var{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:0 0}.body-fauxcolumn-outer,body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}:focus{outline:0}ins{text-decoration:none}del{text-decoration:line-through}.body-fauxcolumn-outer,body{background:#F3F3F3;font:400 12px Montserrat,sans-serif;color:#666}body p{padding-bottom:20px;line-height:2em}#container{margin:0 auto;color:#444;font-size:18px;font-weight:400;margin-top:10px}#content{width:712px;padding:20px 0 10px;float:left;display:inline;margin-top:-10px}#content-wide{clear:both;width:1060px;padding:10px 0}#aside{display:inline;float:right;width:336px;color:#ccc;padding:10px 0}#footer{clear:both;overflow:hidden;background:#dfdfdf;font-size:12px}.radius{-webkit-border-radius:5px;-o-border-radius:5px;-moz-border-radius:5px;border-radius:5px}#header-wrapper{max-height:100px}#header{margin-top:-15px}#header h1{color:#666;text-shadow:2px 2px 2px #FFF;letter-spacing:-2px}#header a,#header a:hover{text-decoration:none;color:#666}#header .description{margin:-3px 5px 5px;line-height:1.4em;color:#888;font-size:14px}.header{margin:35px 0}.date-header{display:none}.post{color:#666;line-height:2em}.post-outer{line-height:2em;margin-bottom:10px;padding:10px}.post .post-text{padding-bottom:5px;clear:both}.post h1.post-title{text-transform:uppercase;text-align:center;border-bottom:1px solid #ddd;padding-bottom:10px}.post ul.post-meta{color:#6b6969;clear:both;border-top:1px solid #222020;border-bottom:1px solid #222020;overflow:hidden;font-size:12px;font-style:italic;padding:5px 0;list-style:none}.post ul.post-meta li{padding-right:20px;float:left}.post ul.post-meta a{color:#0b6e69}.post .post-comment{display:inline;background:url(http://1.bp.blogspot.com/_MkGBVwDEF84/TGedevmtX_I/AAAAAAAAEZY/I5fmryAKyP8/s1600/post_comment.jpg) no-repeat center;width:33px;text-align:center;padding:5px 0 10px;margin-top:10px;float:right}.post h2,.post h3{padding:10px 0;font-weight:400;color:#666}.post h4,.post h5,.post h6{padding:10px 0;font-size:14px;font-weight:400;color:#666}.post blockquote{display:block;margin:20px;padding:0 30px;background:#ddd;font-style:italic;color:#999}.left{padding:20px 25px 0 0;width:300px;float:right}.sidebar h2{padding:10px;color:#666;font-size:16px;font-weight:100;line-height:1.2em;margin-bottom:6px;text-transform:uppercase;border-bottom:1px solid #D3D3D3;margin-top:0}.sidebar .widget{font-size:12px;color:gray;margin:0 0 10px;padding-bottom:10px;overflow:hidden;margin-bottom:20px;background:#fff;-webkit-box-shadow:1px 1px 2px 0 #d0d0d0;-moz-box-shadow:1px 1px 2px 0 #d0d0d0;box-shadow:1px 1px 2px 0 #d0d0d0;border:1px solid #ddd}.sidebar .widget-content{padding:10px;margin:0;font-size:12px;color:gray}.sidebar ul{list-style-type:none;margin:0;padding:0}.sidebar ul a{color:#333}.sidebar ul a:hover{color:#666}.sidebar li{list-style-type:none;margin:0;padding:0}.sidebar ul li{height:100%;line-height:22px;float:left;clear:left;list-style-type:none;overflow:hidden;color:gray;text-decoration:none;padding:0 0 0 10px;display:block;border-bottom:1px solid #f9f9f9}.sidebar a:hover{color:#D14F00}#comments{margin:10px;border-top:1px solid #ddd}#comments h4{font-size:16px;color:#fff;font-weight:700;padding:10px;margin-top:10px;background:#2980b9}#comments-block{line-height:1.6em;margin:1em 0 1.5em;color:#7F7D77}#comments-block .comment-author{background:#dfdfdf none repeat scroll 0 0;border:1px solid #eaeaea;margin:.5em 0;padding-bottom:4px;padding-left:8px;padding-top:4px;font-weight:700}#comments-block .comment-body{background:#fff;border-left:1px solid #e3e3e3;border-right:1px solid #e3e3e3;margin-top:-8px;padding-left:10px;padding-top:10px}#comments-block .comment-footer{background:#fff;border-bottom:1px solid #e3e3e3;border-left:1px solid #e3e3e3;border-right:1px solid #e3e3e3;font-size:11px;line-height:1.4em;margin:-.25em 0 2em;padding-bottom:5px;padding-left:10px;text-transform:none}#comments-block .comment-body p{margin:0;padding-bottom:15px}#comment-holder{padding:0}.comments .comment-block,.comments .comment-thread.inline-thread .comment{background:#fff}#comments h4,.comments .comment-header,.comments .comment-thread.inline-thread .comment{position:relative}.comments .comments-content .icon.blog-author{position:absolute;right:20px;margin:0}.comments .comments-content .icon.blog-author:after{content:"mod";display:inline-block;vertical-align:middle;line-height:1;color:#fff;float:right;border:1px solid #ddd;background:#2980b9;border-radius:3px;padding:5px;margin-left:5px;font-size:12px;text-transform:uppercase;margin-top:-3px}.comments .comment-replybox-thread{margin-top:5px}.comment-form{max-width:100%}.comments .comments-content .comment-content,.comments .comments-content .comment-header{margin:0 0 8px;margin:0 0 8px;border:1px solid #ddd;padding:15px 10px;background:#fff;border-radius:5px}.comments .comments-content .comment-content a,.comments .comments-content .comment-header a{color:#2980b9}.comments .comments-content .comment-thread ol{margin:0 0 10px!important}.comments .comments-content .comment-thread{margin:0!important}.comments .comments-content .inline-thread{padding:0!important;padding-left:12px!important}.comment-actions a{display:inline-block;vertical-align:middle;line-height:1.4;color:#2980b9;float:right;border:1px solid #ddd;background:#fff;border-radius:3px;padding:2px 15px!important;margin-left:5px}.blog-feeds{display:none}img.centered{display:block;margin:auto}img.alignright{display:inline;margin:0 0 10px 20px}img.alignleft{display:inline;margin:0 20px 10px 0}.alignleft{float:left}.alignright{float:right}.post-footer-line-1{display:none}#comments-block .avatar-image-container img{background:#fff url(http://3.bp.blogspot.com/-UMSMHaOBzQg/To2XKFseUSI/AAAAAAAACVU/vlvJki_9vqA/s1600/gravatar.png) no-repeat left top;width:32px;height:32px}.footer-top{background-color:#2f2f2f;padding-top:50px;padding-bottom:50px;color:#fff}.footer-top h2{color:#fff;text-transform:uppercase;padding-bottom:20px}p.footer-link{clear:both;text-align:center;font-size:11px;padding:12px;overflow:hidden;color:#F9F9F9;background:#232627;line-height:18px}.post-header{text-align:center;border:1px solid #ddd;border-radius:3px;margin-top:20px}#related-posts li{border-bottom:1px solid #eee;margin-bottom:10px;padding-bottom:10px;display:block;float:left;margin-left:15px;width:47%}#related-posts{margin:20px 0;font-size:14px;line-height:20px}#related-posts h3{font-size:19px;font-weight:700;line-height:14px;text-transform:capitalize;z-index:2;background:#fff;color:#333;position:relative}#related-posts img{-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-ms-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out;opacity:1}#related-posts a{border:1px solid #ddd;margin:2px;text-align:center;-webkit-box-shadow:1px 1px 2px 0 #d0d0d0;-moz-box-shadow:1px 1px 2px 0 #d0d0d0;box-shadow:1px 1px 2px 0 #d0d0d0}.imgpost{border:0 none;margin:3px 0 0;padding:0;font-style:normal;font-variant:normal;font-weight:400;font-size:14px;line-height:25px}.status-msg-body{position:relative!important}.CSS_LIGHTBOX{z-index:9999!important}.boxframe{position:relative;background:#fff;box-sizing:border-box}.boxframe:after,.boxframe:before{content:&quot;:&quot;position:absolute;height:1px;background:#fff;border:1px solid #bbb;border-top:0;box-shadow:0 0 3px rgba(0,0,0,.1)}.boxframe:before{bottom:-3px;left:3px;right:3px}.boxframe:after{left:6px;right:6px;bottom:-5px;box-shadow:0 0 3px rgba(0,0,0,.2)}#footer a{color:#fff}.rmlink{float:right!important}.rmlink a{color:#fff!important}.jump-link{display:none}.label-size{margin:6px 0}#postsocial{border:1px solid #ddd;min-width:55px;width:auto;-moz-background-clip:padding;-webkit-background-clip:padding-box;-webkit-box-shadow:1px 0 5px rgba(0,0,0,.1);-moz-box-shadow:1px 0 5px rgba(0,0,0,.1);box-shadow:1px 0 5px rgba(0,0,0,.1);padding:5px;font:10px/16px Arial;background:padding-box #fff;position:absolute;margin-left:-94px;top:150px}#postsocial.fixed{position:fixed;top:150px}.postsocialbtn{width:auto;height:auto;line-height:0;padding:4px 1px;text-align:center}.post-feeds{display:none}.jqmaintitle{margin:0;font-size:16px;border-top:1px solid #ddd;border-radius:3px;padding:10px 10px!important;display:none}.jqmaintitle a{color:#2c3e50!important;display:block;border-bottom:1px solid #ddd;padding-bottom:6px}.main-top-nav{border-radius:0!important;z-index:10000}.post ul li{margin-left:20px;list-style:initial}.img-post-thumb{-webkit-box-shadow:0 4px 4px -4px rgba(0,0,0,.7);box-shadow:0 4px 4px -4px rgba(0,0,0,.7)}html{font-family:Helvetica;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:Helvetica,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:62.5%;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:Helvetica,sans-serif;font-size:18px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#428bca;text-decoration:none}a:focus,a:hover{color:#2a6496;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:0}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:0}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:0}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:0}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:0}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:0}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:0}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:0}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;margin-bottom:5px;font-weight:700}input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=checkbox]:focus,input[type=file]:focus,input[type=radio]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{height:34px}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{cursor:not-allowed;background-color:#eee;opacity:1}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}input[type=date]{line-height:34px}.form-group{margin-bottom:15px}.checkbox,.radio{display:block;min-height:20px;margin-top:10px;margin-bottom:10px;padding-left:20px}.checkbox label,.radio label{display:inline;font-weight:400;cursor:pointer}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{float:left;margin-left:-20px}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:400;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}.checkbox-inline[disabled],.checkbox[disabled],.radio-inline[disabled],.radio[disabled],fieldset[disabled] .checkbox,fieldset[disabled] .checkbox-inline,fieldset[disabled] .radio,fieldset[disabled] .radio-inline,fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox][disabled],input[type=radio][disabled]{cursor:not-allowed}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}select.input-lg{height:46px;line-height:46px}select[multiple].input-lg,textarea.input-lg{height:auto}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.has-feedback .form-control-feedback{position:absolute;top:25px;right:0;display:block;width:34px;height:34px;line-height:34px;text-align:center}.has-success .checkbox,.has-success .checkbox-inline,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.form-control-static{margin-bottom:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;padding-left:0;vertical-align:middle}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{float:none;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .control-label,.form-horizontal .radio,.form-horizontal .radio-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}.form-horizontal .form-control-static{padding-top:7px}@media (min-width:768px){.form-horizontal .control-label{text-align:right}}.form-horizontal .has-feedback .form-control-feedback{top:0;right:15px}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px solid;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{text-decoration:none;color:#262626;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;outline:0;background-color:#428bca}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#999}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);cursor:not-allowed}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{left:auto;right:0}.dropdown-menu-left{left:0;right:auto}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#999}.dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px solid;content:""}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:1px}@media (min-width:768px){.navbar-right .dropdown-menu{left:auto;right:0}.navbar-right .dropdown-menu-left{left:0;right:auto}}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#999}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#999;text-decoration:none;background-color:transparent;cursor:not-allowed}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#428bca}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#428bca}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.navbar{position:relative;min-height:50px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{max-height:340px;overflow-x:visible;padding-right:15px;padding-left:15px;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.1);-webkit-overflow-scrolling:touch}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-left:0;padding-right:0}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:15px;line-height:20px;height:50px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;margin-right:15px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}.navbar-nav.navbar-right:last-child{margin-right:-15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important}}.navbar-form{margin-left:-15px;margin-right:-15px;padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);margin-top:8px;margin-bottom:8px}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;padding-left:0;vertical-align:middle}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{float:none;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}}@media (min-width:768px){.navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;-webkit-box-shadow:none;box-shadow:none}.navbar-form.navbar-right:last-child{margin-right:-15px}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-left:15px;margin-right:15px}.navbar-text.navbar-right:last-child{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-nav>li>a,.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{background-color:#e7e7e7;color:#555}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>li>a,.navbar-inverse .navbar-text{color:#999}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{background-color:#080808;color:#fff}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#999}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.row:after,.row:before{content:" ";display:table}.clearfix:after,.container-fluid:after,.container:after,.form-horizontal .form-group:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.row:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important;visibility:hidden!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-md,.visible-print,.visible-sm,.visible-xs{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}@media print{.visible-print{display:block!important}table.visible-print{display:table}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}@media print{.hidden-print{display:none!important}}.navbar-inverse .navbar-link{color:#999}.navbar-inverse .navbar-link:hover{color:#fff}.navbar{text-transform:uppercase;margin-bottom:0}.navbar-inverse{background-color:#3b5998; padding-top:20px !important; padding-bottom:20px !important;border-color:#2980b9}.navbar-inverse .navbar-nav>li>a{color:#fff}.navbar-inverse .navbar-nav>li>a:hover{color:#222}.navbar-brand{font-weight:700;font-size:20px;letter-spacing:2px}.navbar-inverse .navbar-brand{color:#fff}.navbar-inverse .navbar-toggle{border-color:transparent}.form-control{display:block;width:100%;padding:5px;font-size:14px;line-height:1.428571429;color:#555;vertical-align:middle;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.btn-danger{background:#fff;border-radius:3px;padding:6px 15px;border:1px solid #ccc}#sidebar .list-label-widget-content ul li{padding:3px!important;margin:0!important;border:0!important;width:100%}#sidebar .list-label-widget-content ul li a{padding:8px 10px;font-size:13px;border-radius:0;width:100%;background-color:#ebeef4;color:#4c66a4!important;border:0}#sidebar .list-label-widget-content ul li span{padding:8px 10px;font-size:13px;border-radius:0;width:100%;background-color:#4c66a4!important;color:#ebeef4!important;float:left;border:0}.list-label-widget-content ul li{float:left;padding:3px!important;margin:0!important;border:0!important}.list-label-widget-content ul li a{float:left;background:#4c66a4;padding:8px 10px;border-radius:4px;color:#fff!important;text-transform:uppercase;font-size:13px;border:1px solid #4c66a4}.list-label-widget-content ul li span{float:left;background:#fff;padding:8px 10px;border-radius:4px;color:#4c66a4;text-transform:uppercase;font-size:13px;border:1px solid #4c66a4}.homapge-thumb{width:25%;float:left;position:relative}.play-link{float:none;margin:0;overflow:hidden;position:relative}.play{display:none}.play-link .play{position:absolute;left:0;top:0;right:0;bottom:0;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;background:#2980b9;text-align:center;color:#fff;opacity:.9;background-image:url(http://1.bp.blogspot.com/-lAj1Ge7WWg0/U1D0tqbnfHI/AAAAAAAAAcI/u_vRu6LdY2Y/s1600/zoom.png);background-repeat:no-repeat;background-position:center}.play-link a:hover .play{display:block}.post .pwrap{float:left;text-align:center;width:100%;font-size:16px;margin-bottom:20px}.footer-block,.portfolio-block{width:100%;padding:30px;font-size:16px;line-height:36px}.portfolio-image{width:auto;height:auto}.footer-block{height:180px;margin-top:-90px}#portfolio{text-align:center;color:#222;background:#eee}.img-home-thumb{width:176px}#blog-pager{padding:10px 0}.blog-pager-element a{background:#2980b9;padding:5px;padding-left:10px;padding-right:10px;margin-right:5px;color:#000;font-weight:700}.feed-links{display:none}.blogger-pager a{float:left;font-size:15px;color:#fff!important;padding-left:15px;padding-right:15px}.blog-pager-p{background:#222;color:#fff;float:left;font-size:15px;padding:5px;padding-left:10px;padding-right:10px;margin-right:5px;font-weight:700}.blogger-pager a{text-decoration:none}.blogger-pager{float:left;width:363px}.h-title,.h-title a{color:#fff;font-weight:700;font-size:20px;letter-spacing:2px;padding:10px 0;margin:0}.descriptionwrapper{display:none}#navegacionTop{background-color:#3b5998; padding-top:30px !important; padding-bottom:30px !important}.botonDropdown{margin-top:14px; margin-left:15px}@media only screen and (min-width : 250px) {.h-title{margin-left: 5%;}.tamanoBiografia{font-size:20px;}.botonContacto{margin-top:0px;}.bloqueFormulario{margin-left:5%;}.linksContactoResponsive{margin-top:5%;padding-left:6%; margin-top:-8.5%; margin-left:10%}.postImagen{margin-left: 5%; margin-right:5%; width: 100%; height:100%; max-width:100%; max-height:100%; padding-bottom:5%; padding-top:10%;}.contenedor{display: block; vertical-align: middle !important; text-align: center !important;}.tituloContacto{margin-left:5%;}.contenido{display: inline-block !important; text-align: center !important; margin-right: 5%; margin-left: 0%;}.tamanoImagen{width: 100%; height:100%; max-width:100%; max-height:100%;}.tamanoBiografia{font-size:20px;}.bloqueContacto{}.margenLinksContacto{text-align: left;}} .hoverButton figure {}.hoverButton figure img {opacity: 1;-webkit-transition: .3s ease-in-out;transition: .3s ease-in-out;}.hoverButton figure:hover img {opacity: .5;}}} }

    ]]></b:skin>
    <script type='text/javascript'>
      //<![CDATA[
      var pageCount=6;
      var displayPageNum=2;
      var upPageWord = "Previous";
      var downPageWord = "Next";
      eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('x 1p(P,F,D){4 m=l.1q(P);4 G="";4 9=m.1n("9");7(9.2>=1){G=\'<m o="S-C"><a o="1l-a" H="\'+F+\'"><9 o="9-1m 9-1r-10" E="\'+9[0].E+\'"/><W o="S"></W></a></m><V o="1y">\'+D+\'</V>\'}4 R=G;m.1t=R}4 6=u v();4 f=0;4 8=u v();4 g=u v();x 1z(K){w(4 i=0;i<K.T.h.2;i++){4 h=K.T.h[i];6[f]=h.18.$t;17{7(h.Y$U.F){D=h.Y$U.F;g[f]=D.15("/1j-c/","/1b-c/")}}1i(1g){s=h.1f.$t;a=s.J("<9");b=s.J("E=\\"",a);c=s.J("\\"",b+5);d=s.1d(b+5,c-b-5);7((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){g[f]=d}A{7(N(X)!==\'O\')g[f]=X;A g[f]="1A://3.1X.1T.1R/-1V/1U/1Y/1W/1S/1P.1F"}}7(6[f].2>Z)6[f]=6[f].1G(0,Z)+"...";w(4 k=0;k<h.C.2;k++){7(h.C[k].1Q==\'1D\'){8[f]=h.C[k].H;f++}}}}x 1C(){4 p=u v(0);4 z=u v(0);4 y=u v(0);w(4 i=0;i<8.2;i++){7(!M(p,8[i])){p.2+=1;p[p.2-1]=8[i];z.2+=1;y.2+=1;z[z.2-1]=6[i];y[y.2-1]=g[i]}}6=z;8=p;g=y}x M(a,e){w(4 j=0;j<a.2;j++)7(a[j]==e)L 1N;L 1M}x 1J(13){4 I;7(N(Q)!==\'O\')I=Q;A I="#1u";w(4 i=0;i<8.2;i++){7((8[i]==13)||(!6[i])){8.q(i,1);6.q(i,1);g.q(i,1);i--}}4 r=12.1K((6.2-1)*12.1O());4 i=0;7(6.2==0){l.n(\'<B>1H 1B 1e</B>\')};7(6.2>0)l.n(\'<B>\'+1c+\'</B>\');l.n(\'<m 11="14: 16;"/>\');1a(i<6.2&&i<19&&i<1h){l.n(\'<a 11="1k-1v:1w;1x:1s;\');7(i!=0)l.n(\'"\');A l.n(\'"\');l.n(\' H="\'+8[r]+\'"><9 o="9-1o 9-1E-10" E="\'+g[r]+\'"/><1L/><m o="1I">\'+6[r]+\'</m></a>\');i++;7(r<6.2-1){r++}A{r=0}}l.n(\'</m>\');8.q(0,8.2);g.q(0,g.2);6.q(0,6.2)}',62,123,'||length||var||relatedTitles|if|relatedUrls|img||||||relatedTitlesNum|thumburl|entry||||document|div|write|class|tmp|splice||||new|Array|for|function|tmp3|tmp2|else|h3|link|tt|src|url|imgtag|href|splitbarcolor|indexOf|json|return|contains_thumbs|typeof|undefined|pID|splittercolor|summary|play|feed|thumbnail|h2|span|defaultnoimage|media|35|thumb|style|Math|current|clear|replace|both|try|title|20|while|s300|relatedpoststitle|substr|posts|content|error|maxresults|catch|s72|text|image|responsive|getElementsByTagName|reponsive|createSummaryAndThumb|getElementById|post|left|innerHTML|DDDDDD|decoration|none|float|pwrap|related_results_labels_thumbs|http|similar|removeRelatedDuplicates|alternate|home|jpg|substring|No|imgpost|printRelatedLabels|floor|br|false|true|random|no_image|rel|com|s1600|blogspot|UF91FE7rxfI|PpjfsStySz0|092MmUHSFQ0|bp|AAAAAAAACl8'.split('|')))
      //]]>
    </script>
  </head>

  <body>

    <nav class='navbar navbar-inverse navbar-static-top justify-content-between'>
      <div class='container'>
        <div class='navbar-header' style=''>
          <button class='navbar-toggle' data-target='.navbar-collapse' data-toggle='collapse' type='button'>
            <span class='icon-bar'/>
            <span class='icon-bar'/>
            <span class='icon-bar'/>
          </button>
          <b:section class='' id='blog-title' maxwidgets='5' showaddelement='yes'>
            <b:widget id='Header1' locked='false' title='lauglitch (cabecera)' type='Header' version='1'>
              <b:widget-settings>
                <b:widget-setting name='displayUrl'/>
                <b:widget-setting name='displayHeight'>0</b:widget-setting>
                <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
                <b:widget-setting name='useImage'>false</b:widget-setting>
                <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
                <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
                <b:widget-setting name='displayWidth'>0</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
                <b:if cond='data:useImage'>
                  <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
                    <!--
                    Show image as background to text. You can't really calculate the width
                    reliably in JS because margins are not taken into account by any of
                    clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
                    width if the user is using shrink to fit.
                    This results in a margin-width's worth of pixels being cropped. If the
                    user is not using shrink to fit then we expand the header.
                    -->
                    <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                      + &quot;background-position: &quot;                      + data:backgroundPositionStyleStr + &quot;; &quot;                      + data:widthStyleStr                      + &quot;min-height: &quot; + data:height + &quot;px;&quot;                      + &quot;_height: &quot; + data:height + &quot;px;&quot;                      + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
                      <div class='titlewrapper' style='background: transparent'>
                        <h1 class='title' style='background: transparent; border-width: 0px'>
                          <b:include name='title'/>
                        </h1>
                      </div>
                      <b:include name='description'/>
                    </div>
                    <b:else/>
                    <!--Show the image only-->
                    <div id='header-inner'>
                      <a expr:href='data:blog.homepageUrl' style='display: block'>
                        <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/>
                      </a>
                      <!--Show the description-->
                      <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
                        <b:include name='description'/>
                      </b:if>
                    </div>
                  </b:if>
                  <b:else/>

                  <!-- logoLauglitch -->
                  <div id='header-inner'>
                    <div class='titlewrapper'>

                      <!-- Página Principal Español-->
                      <b:if cond='data:blog.url == data:blog.homepageUrl'>
                        <h1 class='h-title'>
                            <!-- Desactivamos el botón lauglitch (el de ir a menú principal, porque ya estamos en él)-->
                            <img height='80' src='https://i.imgur.com/SCBJ3WO.png' width='240'/>
                          </h1>
                        <b:include name='description'/>

                      <!-- Página Contacto Español-->
                      <b:else/>
                          <h1 class='h-title'>
                            <a class='hoverButton' href='https://lauglitch.com/'><figure><img height='80' src='https://i.imgur.com/SCBJ3WO.png' width='240'/></figure></a>
                          </h1>
                        <b:include name='description'/>
                      </b:if>

                    </div>
                  </div>
                </b:if>
              </b:includable>
              <b:includable id='description'>
                <div class='descriptionwrapper'>
                  <p class='description'>
                    <span>
                      <data:description/>
                    </span>
                  </p>
                </div>
              </b:includable>
              <b:includable id='title'>
                <b:if cond='data:blog.url == data:blog.homepageUrl'>
                  <data:title/>
                  <b:else/>
                  <a expr:href='data:blog.homepageUrl'>
                    <data:title/>
                  </a>
                </b:if>
              </b:includable>
            </b:widget>
          </b:section>
        </div>

        <!-- Barra superior azul -->

          <nav class='navbar-collapse collapse fixed-top' style='animate: true; transition: all 0.15s; insert: &apos;after&apos; openPos: &apos;relative&apos;'>

            <lu class='nav navbar-nav navbar-right'>
            
              <li class='nav-item'>
                  <!-- Activamos el botonContacto en la Página Principal Español -->
                  <b:if cond='data:blog.url == data:blog.homepageUrl'>
                        <a class='botonContacto botonContacto2 hoverButton' href='https://lauglitch.com/p/contacto.html'><figure><img height='50' src='https://i.imgur.com/gSjJPIL.png' width='50'/></figure>
                        </a>

                  <!-- Desactivamos el botonContacto en la Página Contacto Español -->
                  <b:else/>
                    <a class='botonContacto'><img height='50' src='https://i.imgur.com/gSjJPIL.png' width='50'/>
                    </a>
                  </b:if>
              </li>

            </lu>
          </nav>
     
        <!-- END Barra superior azul -->

      </div>
    </nav>

    <!-- Cuerpo -->
    <div id='body-templates'>

      <!-- Cuerpo Página Principal Español -->
      <b:if cond='data:blog.url == data:blog.homepageUrl'>
        <section id='portfolio'>
          <div class='portfolio-block'>
            <div class='cuerpo-block'>
            <img height='150' src='https://i.imgur.com/ryP6CTY.png' width='150'/>
            <h1>
              @lauglitch
            </h1>
            <p class='tamanoBiografia'>
              Diseñadora y Desarrolladora de Videojuegos 🎮 😄
              <br/>
              Amante de los gatitos 🐱, la música 🎵 y los viajes 🌍
              <br/>
              📍 Madrid (España)
              <br/>
            </p>

          </div>
          </div>
        </section>

        <div class='container-fluid'>
    
          <div class='row'>

            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/M148I5l.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://lauglitch.itch.io/instracker'>InsTracker</a>
              </div>
            </div>
            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/XVSzbwC.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://lauglitch.itch.io/twitracker'>TwiTracker</a>
              </div>
            </div>
            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/j3M6tVG.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://iviuriel.itch.io/if-i'>If I</a>
              </div>
            </div>

          </div>

          <div class='row'>

            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/9AFJqM6.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://rodillos-gaming.itch.io/desktop-tower-chess'>Desktop Tower Chess</a>
              </div>
            </div>
          
            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/RgDyD3N.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://rodillos-gaming.itch.io/triskel'>Triskel</a>
              </div>
            </div>

            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/MMXDxc7.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://diegodiaz.itch.io/wanted-point-and-shot'>Wanted: Point And Shot</a>
              </div>
            </div>

            <div class='col-lg-4 contenedor'>

              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/WcfKSGs.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://castlesgames.github.io/'>Knights And Castles</a>
              </div>

            </div>

            <!--
            <div class='col-lg-4 contenedor'>
            </div>
            -->

          </div>

        </div>
 

      <!-- Cuerpo Página Contacto Español -->
      <b:else/>
        <div id='container' style='margin-bottom:30px;'>
            <div class='container'>
            <div class='row bloqueContacto'>

                <!-- Contenedor main para widgets -->
                <b:if cond='data:blog.pageType == &quot;index&quot;'>
                &lt;div class=&#39;col-xs-12 col-sm-12 col-md-12 col-lg-12&#39;&gt;
                <b:else/>
                &lt;div class=&#39;col-xs-12 col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2&#39;&gt;
                </b:if>
            
                <b:if cond='data:blog.pageType != &quot;index&quot;'>
                &lt;/div&gt;
                <b:else/>
                &lt;/div&gt;
                </b:if>

                <!-- Español -->
                <!-- <b:if cond='data:blog.pageType != &quot;static_page&quot;'> -->
                <h1 class='tituloContacto' style='text-align: left;'> Contacto </h1>

                <div class='row'>
                    <div class='col-lg-4 bloqueFormulario'>
                    <b:section class='main' id='main1' showaddelement='yes'>
                      <b:widget id='ContactForm1' locked='false' title='Contacto' type='ContactForm' version='1'>
                        <b:includable id='main'>
                            <div class='contact-form-widget'>
                                <div class='form'>
                                <form name='contact-form' style='margin-top:-2%;'>
                                    <p>Nombre</p>
                                    <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' style='margin-bottom:15%;' type='text' value=''/>

                                    <p>Correo electrónico*</p> 
                                    <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' style='margin-bottom:15%;' type='text' value=''/>

                                    <p>Mensaje*</p> 
                                    <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
                                    <p/>
                                    <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
                                    <p/>
                                    <div style='text-align: center; max-width: 222px; width: 100%'>
                                    <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
                                    <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <b:include name='quickedit'/>
                        </b:includable>
                      </b:widget>
                    </b:section>
                    </div>
                
                    <div class='col-lg-6 linksContactoResponsive'>
                    <div class='row' style='margin-bottom:5%;'>
                        <h1 class='margenLinksContacto' style='margin-left:-15px'>Encuéntrame en</h1>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.linkedin.com/in/laurarodriguezcorpas/' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/5Nm0KK7.png' style='margin-right:1%;' width='30'/>LinkedIn </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://lauglitch.itch.io/' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/NzPu5gC.png' style='margin-right:1%;' width='30'/>itch.io </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://github.com/lauglitch' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/avPePyZ.png' style='margin-right:1%;' width='30'/>Github </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://twitter.com/lauglitch' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/ASYtMct.png' style='margin-right:1%;' width='30'/>Twitter </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.instagram.com/lauglitch/' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/V76aIMg.png' style='margin-right:1%;' width='30'/>Instagram </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.twitch.tv/lauglitch/' style='font-size:20px !important;'><img height='30' src='https://imgur.com/6wBNFrp.png' style='margin-right:1%;' width='30'/>Twitch </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.youtube.com/channel/UCWAWDAv_8jiMMDcurpnYEMg' style='font-size:20px !important;'><img height='30' src='https://imgur.com/6kh73ZU.png' style='margin-right:1%;' width='30'/>YouTube </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.tiktok.com/@lauglitch' style='font-size:20px !important;'><img height='30' src='https://imgur.com/TR4A0fq.png' style='margin-right:1%;' width='30'/>TikTok </a>
                    </div>
                    </div>
                </div>

                <!-- END Content -->
            </div>
            </div>
        </div>
      </b:if>
    </div>
    <!-- END Cuerpo -->

    <!-- Footer-->
    <div>
      <div style='margin-bottom:3%;'> </div>
      <div class='footer-top'>
        <div class='container'>
          <div class='row'>
            <b:section class='footermain' id='footermainContact' preferred='yes'/>
          </div>
        </div>
      </div>

      <div id='footer'>
        <div>
          <center> &#169; Laura Rodríguez Corpas 2023</center>
        </div>
      </div>
    </div>
    <!-- END Footer --> 

  <!-- END Body --> 

  <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js' type='text/javascript'/>
    <script src='//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js'/>
    <!--Page Navigation Starts-->
    <b:if cond='data:blog.pageType != &quot;item&quot;'>
      <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
        <script>
          //<![CDATA[
          eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1b 13(I){3 8=J;3 c=16 W();3 7=1;3 b=1;3 v=0;3 G=0;3 y=0;3 5=\'\';3 n=\'\';3 B=\'\';D(3 i=0,j;j=I.1h.Z[i];i++){3 M=j.L.$t.H(0,19)+j.L.$t.H(11,10);C=12(M);3 w=j.w.$t;4(w!=\'\'){4(v==0||(v%x==(x-1))){4(8.d(C)!=-1){7=b}4(w!=\'\')b++;c[c.o]=\'/l?K-h=\'+C+\'&h-A=\'+x}}v++}D(3 p=0;p<c.o;p++){4(p>=(7-O-1)&&p<(7+O)){4(G==0&&p==7-2){4(7==2){n=\'<6 f="e-9-m"><a k="/">\'+N+\'</a></6>\'}r{n=\'<6 f="e-9-m"><a k="\'+c[p]+\'">\'+N+\'</a></6>\'}G++}4(p==(7-1)){5+=\'<6 f="e-9-p">\'+7+\'</6>\'}r{4(p==0){5+=\'<6 f="e-9-m"><a k="/">1</a></6>\'}r{5+=\'<6 f="e-9-m"><a k="\'+c[p]+\'">\'+(p+1)+\'</a></6>\'}}4(y==0&&p==7){B=\'<6 f="e-9-m"> <a k="\'+c[p]+\'">\'+1g+\'</a></6>\';y++}}}4(7>1){5=\'\'+n+\' \'+5+\' \'}5=\'<P f="1e-9">\'+5;4(7<(b-1)){5+=B}4(b==1)b++;5+=\'</P>\';3 g=F.1c("g");3 z=F.1d("e-9");4(b<=2){5=\'\'}D(3 p=0;p<g.o;p++){g[p].Q=5}4(g&&g.o>0){5=\'\'}4(z){z.Q=5}}1b 17(I){3 8=J;3 c=16 W();3 S=8.d("/l/s/")!=-1;3 u=S?8.V(8.d("/l/s/")+14,8.o):"";u=u.d("?")!=-1?u.V(0,u.d("?")):u;3 7=1;3 b=1;3 v=0;3 G=0;3 y=0;3 5=\'\';3 1l="0";3 n=\'\';3 B=\'\';3 R=\'<6 f="e-9-m"><a k="/l/s/\'+u+\'?K-h=&h-A=\'+x+\'">\';3 8=J;D(3 i=0,j;j=I.1h.Z[i];i++){3 M=j.L.$t.H(0,19)+j.L.$t.H(11,10);C=12(M);3 w=j.w.$t;4(w!=\'\'){4(v==0||(v%x==(x-1))){4(8.d(C)!=-1){7=b}4(w!=\'\')b++;c[c.o]=\'/l/s/\'+u+\'?K-h=\'+C+\'&h-A=\'+x}}v++}D(3 p=0;p<c.o;p++){4(p>=(7-O-1)&&p<(7+O)){4(G==0&&p==7-2){4(7==2){n=R+N+\'</a></6>\'}r{n=\'<6 f="e-9-m"><a k="\'+c[p]+\'">\'+N+\'</a></6>\'}G++}4(p==(7-1)){5+=\'<6 f="e-9-p">\'+7+\'</6>\'}r{4(p==0){5=R+\'1</a></6>\'}r{5+=\'<6 f="e-9-m"><a k="\'+c[p]+\'">\'+(p+1)+\'</a></6>\'}}4(y==0&&p==7){B=\'<6 f="e-9-m"> <a k="\'+c[p]+\'">\'+1g+\'</a></6>\';y++}}}4(7>1){4(!S){5=\'\'+n+\' \'+5+\' \'}r{5=\'\'+n+\' \'+5+\' \'}}5=\'<P f="1e-9">\'+5;4(7<(b-1)){5+=B}4(b==1)b++;5+=\'</P>\';3 g=F.1c("g");3 z=F.1d("e-9");4(b<=2){5=\'\'}D(3 p=0;p<g.o;p++){g[p].Q=5}4(g&&g.o>0){5=\'\'}4(z){z.Q=5}}3 J=1n.k;3 8=J;4(8.d("/l/s/")!=-1){4(8.d("?K-h")!=-1){3 U=8.H(8.d("/l/s/")+14,8.d("?K-h"))}r{3 U=8.H(8.d("/l/s/")+14,8.d("?h-A"))}}3 T="/";4(8.d("?q=")==-1){4(8.d("/l/s/")==-1){F.Y(\'<E X="\'+T+\'1j/18/1k?1a=I-1f-E&1i=13&h-A=15" ><\\/E>\')}r{F.Y(\'<E X="\'+T+\'1j/18/1m/-/\'+U+\'?1a=I-1f-E&1i=17&h-A=15" ><\\/E>\')}}',62,86,'|||var|if|html|span|thisNum|thisUrl|pager||postNum|htmlMap|indexOf|blog|class|pageArea|max||post|href|search|element|upPageHtml|length|||else|label||thisLable|itemCount|title|pageCount|eFlag|blogPager|results|downPageHtml|timestamp|for|script|document|fFlag|substring|json|home_page_url|updated|published|timestamp1|upPageWord|displayPageNum|div|innerHTML|labelHtml|isLablePage|home_page|lblname1|substr|Array|src|write|entry|29|23|encodeURIComponent|showpageCount||99999|new|showpageCount2|posts||alt|function|getElementsByName|getElementById|blogger|in|downPageWord|feed|callback|feeds|summary|lbse|full|location'.split('|')))
          //]]>
        </script>
      </b:if>
    </b:if>
  </body>
</html>
