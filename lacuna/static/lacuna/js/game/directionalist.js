function directinit(){function a(){var a='<div class="level4grid abs_center">';for(i=0;i<n.length;++i)for(j=0;j<n[i].length;++j)a+=0==n[i][j]?'<div class="level4box nocolor" data-x="'+i+'" data-y="'+j+'"><div class="valcont" data-val="'+n[i][j]+'" style="background:url(/2016/static/lacuna/img/puzzle/white/w'+n[i][j]+'.svg);"></div></div>':"fin"==n[i][j]?'<div class="level4box fin" data-x="'+i+'" data-y="'+j+'"><div class="valcont" data-val="'+n[i][j]+'" style="background:#16b816;color:#eee;">fin</div></div>':i==s-1&&0==j?'<div class="level4box sel" data-x="'+i+'" data-y="'+j+'"><div class="valcont" data-val="'+n[i][j]+'" style="background:url(/2016/static/lacuna/img/puzzle/red/r'+n[i][j]+'.svg);"></div></div>':'<div class="level4box" data-x="'+i+'" data-y="'+j+'"><div class="valcont" data-val="'+n[i][j]+'" style="background:url(/2016/static/lacuna/img/puzzle/white/w'+n[i][j]+'.svg);"></div></div>';a+="</div>",$("#level4").html(a);var l=(s-1)*v+1;setTimeout(function(){$(".level4grid").css({height:70*s,width:70*v}),$(".level4box:nth-child("+l+")>.valcont").trigger("click")},200)}function l(a){function l(){for(i=0;i<c.length;++i)c[i].allow=!0;0==e?(c[0].allow=!1,c[1].allow=!1,c[7].allow=!1):e==s-1&&(c[3].allow=!1,c[4].allow=!1,c[5].allow=!1),0==n?(c[5].allow=!1,c[6].allow=!1,c[7].allow=!1):n==v-1&&(c[1].allow=!1,c[2].allow=!1,c[3].allow=!1)}var t=0,e=$(a).data("x"),n=$(a).data("y"),o=parseInt($(a).find(".valcont").data("val"));l();var r='<div class="dir_box">';for(i=0;i<c.length;++i)if(c[i].num==o){t=1;break}if(1==t)c[i].allow?(r+=c[i].div_data+"</div>",$(a).append(r),$(".level4box.sel .dir_box>div").trigger("click")):d();else{var u=0;for(j=0;j<c.length;++j)c[j].allow&&null==c[j].num&&(r+=c[j].div_data,++u);r+="</div>",$(a).append(r),1==u&&$(".level4box.sel .dir_box>div").trigger("click")}}function d(){alert("You Lost. Try Again!"),level4init()}function e(){console.log(c),submit_ans("win",5)}var n=($("body").width(),$("body").height(),[[4,1,5,6,2,6,"fin"],[1,6,4,3,0,2,4],[2,5,2,4,1,0,1],[1,4,1,6,4,1,5],[3,3,2,2,3,6,2],[1,2,1,6,5,4,6],[4,3,2,5,2,1,3]]),s=n.length,v=n[0].length,c=[{dir:"n",num:null,div_data:'<div data-index="0" class="n hor_center">|</div>',allow:!0,dc:-v},{dir:"ne",num:null,div_data:'<div data-index="1" class="n e">|</div>',allow:!0,dc:-v+1},{dir:"e",num:null,div_data:'<div data-index="2" class="e ver_center">|</div>',allow:!0,dc:1},{dir:"se",num:null,div_data:'<div data-index="3" class="s e">|</div>',allow:!0,dc:v+1},{dir:"s",num:null,div_data:'<div data-index="4" class="s hor_center">|</div>',allow:!0,dc:v},{dir:"sw",num:null,div_data:'<div data-index="5" class="s w">|</div>',allow:!0,dc:v-1},{dir:"w",num:null,div_data:'<div data-index="6" class="w ver_center">|</div>',allow:!0,dc:-1},{dir:"nw",num:null,div_data:'<div data-index="7" class="n w">|</div>',allow:!0,dc:-v-1}];a(),$(".level4box").on("click",".dir_box>div",function(){t=$(this).parent().parent(),$(this).siblings().hide();var a=$(t).find(".valcont");c[$(this).data("index")].num=parseInt(a.data("val")),$(t).addClass("visited").removeClass("sel"),a.css("background","url(/2016/static/lacuna/img/puzzle/blue/b"+a.data("val")+".svg)");var l=$(t).index()+1+c[$(this).data("index")].dc;if($(".level4box:nth-child("+l+")").hasClass("visited")||0==parseInt($(".level4box:nth-child("+l+") .valcont").data("val")))d();else{$(".level4box:nth-child("+l+")").addClass("sel");var a=$(".level4box:nth-child("+l+")").find(".valcont");a.css("background","url(/2016/static/lacuna/img/puzzle/red/r"+a.data("val")+".svg)"),$(".level4box:nth-child("+l+")>.valcont").trigger("click")}}),$(".level4box>.valcont").click(function(){$(this).parent().hasClass("sel")?"fin"==n[$(this).parent().data("x")][$(this).parent().data("y")]?e():l($(this).parent()):alert("You can only choose direction for selected class.")})}