window.onload=function(){function e(e,i){var u=e.innerHTML;e.innerHTML="<span style=\"font-family: 'Flat-UI-Icons-16'\">"+i+"</span>"+u}var i,u,f,n,a={"fui-volume-16":"&#xe000;","fui-video-16":"&#xe001;","fui-time-16":"&#xe002;","fui-settings-16":"&#xe003;","fui-plus-16":"&#xe004;","fui-new-16":"&#xe005;","fui-menu-16":"&#xe006;","fui-man-16":"&#xe007;","fui-mail-16":"&#xe008;","fui-lock-16":"&#xe009;","fui-location-16":"&#xe00a;","fui-heart-16":"&#xe00b;","fui-eye-16":"&#xe00c;","fui-cross-16":"&#xe00d;","fui-cmd-16":"&#xe00e;","fui-checkround-16":"&#xe00f;","fui-checkmark-16":"&#xe010;","fui-camera-16":"&#xe011;","fui-calendar-16":"&#xe012;","fui-bubble-16":"&#xe013;"},t=document.getElementsByTagName("*");for(i=0;i<t.length;i+=1)n=t[i],u=n.getAttribute("data-icon"),u&&e(n,u),f=n.className,f=f.match(/fui-[^\s'"]+/),f&&a[f[0]]&&e(n,a[f[0]])};