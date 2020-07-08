/**
 *
 * @param {object} obj
 * @return {string}
 */
export const makeQueryString = (obj) => {
  if (!obj) return '';
  const query = Object.keys(obj).filter(i => !isEmpty(obj[i], true)).map(k => `${k}=${obj[k]}`).join('&');
  if (isEmpty(query)) {
    return ''
  }
  return `?${query}`
};

export const getQueryParams = (url) => {
  if (!url || typeof url !== 'string' || url.length <= 0) return {}
  let params = null;
  const arr = url.split('?');
  if (arr && Array.isArray(arr) && arr.length > 0) {
    params = {};
    arr[arr.length - 1].split('&').map(s => {
      const p = s.split('=');
      let _p = {};
      params[p[0]] = p[1];
    });
  } else {
    return null;
  }
  return params;
};

export const encrypt = (str) => {
  const keyHex = CryptoJS.enc.Utf8.parse(TripleDESkey);
  const ivHex = CryptoJS.enc.Utf8.parse(TripleDESIv);
  return CryptoJS.TripleDES.encrypt(str, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
};

export const checkEmail=(email)=>{
  let str = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  if (str.test(email)) {
    return true
  } else {
    return false
  }
};

export const checkPhone = (phone) => {
  let str = /^(0|86|17951)?(1[0-9][0-9])[0-9]{8}$/;
  if (str.test(phone)) {
    return true
  } else {
    return false
  }
};

////将在线图片转成base64
export const onlineChangeBase64=(url)=>{
  return new Promise(((resolve, reject) => {
    wx.downloadFile({
      url: url,
      success(res) {
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePath, //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            resolve('data:image/png;base64,' + res.data)
          },
          fail: function (err) {
            reject(err)
          }
        })
      }
    })
  }))
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1)
  const keysArr2 = Object.keys(obj2)
  if (keysArr1.length !== keysArr2.length) return false
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true
  /* eslint-disable-next-line */
  else return !keysArr1.some(key => obj1[key] != obj2[key])
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
  let len = Math.min(arr1.length, arr2.length)
  let i = -1
  let res = []
  while (++i < len) {
    const item = arr2[i]
    if (arr1.indexOf(item) > -1) res.push(item)
  }
  return res
}

/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
export const hasKey = (obj, key) => {
  if (key) return key in obj
  else {
    let keysArr = Object.keys(obj)
    return keysArr.length
  }
}

/**
 *  从身份证号码里面获取 信息
 * @param idCard{ string } 省份证号码
 * @returns {Object} |null
 */
export const getInfoFromIdCard = (idCard) => {

  const n = idCard + '';
  const re = /^\d{6}(((19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}([0-9]|x|X))|(\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}))$/;
  let user = {
    birthday: null,
    sex: 0,
    nation: null,
    age: 0,
  };

  if (!re.test(n)) {
    return null;
  }

  //获取性别
  user.sex = parseInt(n.substr(16, 1)) % 2 === 0 ? 1 : 0;
  //获取年龄
  let myDate = new Date();
  let month = myDate.getMonth() + 1;
  let day = myDate.getDate();
  let age = myDate.getFullYear() - n.substring(6, 10) - 1;
  if (n.substring(10, 12) < month || n.substring(10, 12) === month && n.substring(12, 14) <= day) {
    age++;
  }
  user.age = age;
  let year = '';
  //判断出生日期
  if (n.length === 15) {
    year = '19' + n.substring(6, 8) + '-' + n.substring(8, 10) + '-' + n.substring(10, 12);

  }
  if (n.length === 18) {
    year = n.substring(6, 10) + '-' + n.substring(10, 12) + '-' + n.substring(12, 14);
  }
  user.birthday = year;
  // cities.forEach((v, i) => {
  //   if (n.substring(0, 6) === cities[i].code) {
  //     user.nation = cities[i].title;
  //   }
  // });
  return user;
};

/**
 * 对象是否为空
 * @param obj
 * @return {boolean}
 */
export const isEmpty = (obj) => {
  if (typeof obj === 'object') {
    if (Object.keys(obj).length>0){
      return true
    }else{
      return false
    }
  }
  return false
};

