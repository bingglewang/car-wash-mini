/**
 * 文件上传
 */
const uploadFile = opt => {
    opt = opt || {};
    opt.url = opt.url || '';
    opt.filePath = opt.filePath || null;//要上传文件资源的路径。   
    opt.name = opt.name || null;//文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容 
    
    opt.filePath = opt.filePath || null;
    opt.success = opt.success || function() {};


    uni.uploadFile({
        url: ApiUrl + opt.url,
        filePath:opt.filePath,
        name:opt.name,
        success:function(res){
            opt.success(res);
        },
        fail: function () {
            uni.showToast({
                title: '请稍后重试'
            });
        }

    })
    
}


/**
 * 返回指定长的随机字符串
 */
const randomString = len =>{
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (let i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}



/**
 * 时间格式化
 */
const formatTime = date => {
    date = new Date(date);
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatdate = date => {
    date = new Date(date);
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('.');
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
/**
 * 根据key查找数据中对应的值
 */
const SearchData = (key, data) => {
    var value = '';
    var i = 0;
    while (i < data.length) {

        if (key == data[i].key) {
            value = data[i].title;
            break;
        } else {
            i++;
            continue;
        }
    }
    return value;
}

/**
 * 根据key查找数据中对应角标
 */
const SearchDataIndex = (key, data) => {
    var value = '';
    var i = 0;
    while (i < data.length) {

        if (key == data[i].key) {
            value = i;
            break;
        } else {
            i++;
            continue;
        }
    }
    return value;
}

module.exports = {
	randomString,
	uploadFile,
    formatTime,
    formatdate,
    SearchData,
    SearchDataIndex
}