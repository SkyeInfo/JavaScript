/*****************************************
 * 版本号格式 xxx.xxx.xxx
 * 如果v1 比 v2小返回-1，相等返回0，大则返回1
 * hhhhh
 *****************************************/
compareVersion = function(v1, v2) {
    var vm = this,
        _v1 = v1.split("."),
        _v2 = v2.split("."),
        _r = _v1[0] - _v2[0];
    return _r == 0 && v1 != v2 ? vm.compareVersion(_v1.splice(1).join("."), _v2.splice(1).join(".")) : _r;
};