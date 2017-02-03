/**
 * Created by hugh on 16/12/26.
 */

;(function(){

    'use strict';

    if (window.hRefresh){
        return window.hRefresh
    };
    var hRefresh=function(){
        window.onbeforeunload = function () {
            var scrollPos;
            if (typeof window.pageYOffset != 'undefined') {
                scrollPos = window.pageYOffset;
            }
            else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
                scrollPos = document.documentElement.scrollTop;
            }
            else if (typeof document.body != 'undefined') {
                scrollPos = document.body.scrollTop;
            }
            localStorage.setItem('hscrollTop',scrollPos);//存储滚动条位置到cookies中
        };
        window.onload = function () {
            if (localStorage.getItem('hscrollTop')) {
                var arr = localStorage.getItem('hscrollTop'); //读取滚动条位置
                document.documentElement.scrollTop = parseInt(arr);
                document.body.scrollTop = parseInt(arr);
            }
        }
    }

    window.hRefresh=hRefresh;

})();

/*===========================
 hRefresh AMD Export
 ===========================*/
if (typeof(module) !== 'undefined'){
    module.exports = window.hRefresh;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.hRefresh;
    });
}