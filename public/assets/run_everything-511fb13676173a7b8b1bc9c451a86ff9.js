$(function(){$("select").length>0&&$("select").dropkick()}),$(document).ready(function(){$(".todo li").click(function(){$(this).toggleClass("todo-done")}),$("[data-toggle=tooltip]").tooltip("show"),$("#tagsinput").tagsInput(),$("#slider").length>0&&$("#slider").slider({min:1,max:5,value:2,orientation:"horizontal",range:"min"}),$("input, textarea").placeholder(),$(".pagination a").click(function(){$(this).parent().hasClass("previous")||$(this).parent().hasClass("next")||($(this).parent().siblings("li").removeClass("active"),$(this).parent().addClass("active"))}),$(".btn-group a").click(function(){$(this).siblings().removeClass("active"),$(this).addClass("active")}),$("a[href='#']").click(function(){return!1})});