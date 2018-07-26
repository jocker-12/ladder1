// 动态判断请求类名
const domain = /localhost/ig.test(window.location.host) ? 'https://baojia.chelun.com' : 'http://baojia-test.chelun.com';

// 填充请求参数
function sendRequest(url) {
    let ua = navigator.userAgent,
        os = '';
    // 添加系统参数
    if ((/iPhone|iPad/ig).test(ua)) {
        os = 'ios';
    } else {
        os = 'android';
    }
    let char = '?';
    if (/\?/g.test(url)) {
        char = '&';
    } else {
        char = '?';
    }
    url += `${char}os=${os}&_=${+new Date()}`;
    return fetch(domain + url);
}

// 获取车型数据
export const carList = () => {
    return sendRequest('/v2-car-getMasterBrandList.html')
}

// 获取车系数据
export const getBrandList = (id) => {
    return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
}

// 获取详情页数据
export const getDetailData = (id) => {
    return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`);
}

// 获取图片数据
export const getImageList = (id) => {
    return sendRequest(`/v2-car-getImageList.html?SerialID=${id}`);
}

// 获取显示图片 组件的数据 VueAwesomeSwiper
export const getShowImg = ({ SerialID, ImageID, page, size }) => {
    return sendRequest(`/v2-car-getCategoryImageList.html?SerialID=${SerialID}&ImageID=${ImageID}&Page=${page}&PageSize=${size}`);
}

// 获取显示图片列表 组件的数据 list
export const getShowImageList = ({ SerialID, ImageID, page, size }) => {
    return sendRequest(`/v2-car-getCategoryImageList.html?SerialID=${SerialID}&ImageID=${ImageID}&Page=${page}&PageSize=${size}`);
}
