import { get, post } from './http'

/**
 * @param {Stirng} code 微信登录后返回的code
 * @param {Stirng} iv 揭秘算法的初始向量，微信回返回
 * @param {Stirng} encryedData 加密的手机号信息
 * @description 微信用户登录
 */
export const wxLogin = async (account, pwd) => {
  try {
    return await post('/login/wxLogin',
        { mobile: account, password: pwd },
          true)
  } catch (error) {
    return error
  }
}

/**
 *
 * @param {String} account 用户名
 * @param {String} pwd 密码
 * @description 管理员登录
 */
export const adminLogin = async (account, pwd) => {
  try {
    return await post('/login/login',
        { mobile: account, password: pwd },
          true)
  } catch (error) {
    return error
  }
}
/**
 * 用户注册
 */
export const userRegister = async (mobile, password) => {
  try {
    return await post('/base/register',
        { mobile: mobile, password: password },
          true)
  } catch (error) {
    return error
  }
}

/**
 * @description 发送验证码
 * @param {String} mobile
 */
export const sendSms = async (mobile) => {
  try {
    return await get('/base/findSmsCode', { mobile }, false)
  } catch (error) {
    return error
  }
}

/**
 * @description 获取图形验证码 (本项目暂时没用到)
 */
export const getRandomCode = async () => {
  try {
    return await get('/base/getImgCode', {}, false)
  } catch (error) {
    return error
  }
}

/**
 * @description 检查图形验证码是否正确 (本项目暂时没用到)
 * @param {String} code
 */
export const checkCode = async (code) => {
  try {
    return await get('/base/checkRandCode', { code }, false)
  } catch (error) {
    return error
  }
}

/**
 * @description 忘记密码
 * @param {String} password
 * @param {String} msgCode
 * @param {String} password
 */
export const updatePassWd = async (mobile, msgCode, password) => {
  try {
    return await post('/base/forgetPwd', { mobile, msgCode, password }, true)
  } catch (error) {
    return error
  }
}

/**
 * 实名认证
 * @param { Integer } userId 用户id
 * @param { String } imgUrl 校园卡图片
 * @param { String } name 职工姓名
 * @param { String } sex 性别
 * @param { String } institutionName 机构名称
 * @param { String } cardNum 卡号
 * @param { String } effectiveDate 有效期
 */
export const Certification = async (userId, imgUrl, name, sex, institutionName, cardNum, effectiveDate) => {
  try {
    return await post('/wx/addUserAc', { userId, imgUrl, name, sex, institutionName, cardNum, effectiveDate }, false)
  } catch (error) {
    return error
  }
}

/**
 * 查询个人认证信息
 * @param { Integer } userId 用户id
 */
export const getCertification = async (userId) => {
  try {
    return await get('/wx/findUserAc', { userId }, true)
  } catch (error) {
    return error
  }
}

/**
 * @description 查询全部的承运单位
 */
export const getAllCarrier = async (state) => {
  try {
    return await get('/base/queryCarrier', { state }, true)
  } catch (error) {
    return error
  }
}

/**
 * @description 查询全部的行驶路线
 */
export const getAllPath = async () => {
  try {
    return await get('/base/queryRoute', {}, false)
  } catch (error) {
    return error
  }
}

/**
 * @description 查询全部的行驶路线
 */
export const getCarType = async () => {
  try {
    return await get('/base/queryCarType', {}, false)
  } catch (error) {
    return error
  }
}

/**
 * @description 查询已选车辆详情
 */
export const getCarDetail = async (carrierId, routeTypeId) => {
  try {
    return await get('/base/queryCarDetail', {carrierId: carrierId, routeTypeId: routeTypeId}, false)
  } catch (error) {
    return error
  }
}

/**
 * 获取图文详情
 * @param {Number} file 文件名
 * @description 获取图文详情
 */
export const getIocr = async (file) => {
  try {
    return await post('/base/queryIocr', { file: file }, false)
  } catch (error) {
    return error
  }
}

/**
 * 用户订单列表
 * @param { String } userId 用户id
 * @param { String } state 订单状态
 */
export const getUserOders = async (userId, state) => {
  try {
    return await post('/wx/queryApplyOrder', { userId: userId, state: state }, false)
  } catch (error) {
    return error
  }
}

/**
 * 查询一级机构
 */
export const getFirstOrgan = async () => {
  try {
    return await get('/base/queryInsOne', {}, true)
  } catch (error) {
    return error
  }
}

/**
 * 查询二级机构
 */
export const getSecondOrgan = async (parentId) => {
  try {
    return await get('/base/queryInsTwo', { parentId }, true)
  } catch (error) {
    return error
  }
}

/**
 * 查询经费来源
 */
export const getFundSource = async () => {
  try {
    return await get('/wx/queryFundSource', {}, true)
  } catch (error) {
    return error
  }
}

/**
 * 添加用车申请单
 * @param {*} userId 用户id
 * @param {*} carrierId 承运单位id
 * @param {*} carDetailId 车辆信息id
 * @param {*} linkMan 联系人
 * @param {*} linkMobile 联系人电话
 * @param {*} personalAmount 乘车人数
 * @param {*} startTime 开始时间
 * @param {*} endTime 结束时间
 * @param {*} destination 目的地
 * @param {*} fundSource 经费来源
 * @param {*} reason 用车原因
 */
export const addApplyOrder = async (userId, carrierId, carDetailId, amount, linkMan, linkMobile, personalAmount, parentId, parentName, institutionId, institutionName, startTime, endTime, address, destination, fundSource, reason) => {
  try {
    return await post('/wx/addApplyOrder', { userId, carrierId, carDetailId, amount, linkMan, linkMobile, personalAmount, parentId, parentName, institutionId, institutionName, startTime, endTime, address, destination, fundSource, reason }, true)
  } catch (error) {
    return error
  }
}

/**
 * 编辑用车申请单
 * @param {*} id id
 * @param {*} userId 用户id
 * @param {*} carrierId 承运单位id
 * @param {*} carDetailId 车辆信息id
 * @param {*} linkMan 联系人
 * @param {*} linkMobile 联系人电话
 * @param {*} personalAmount 乘车人数
 * @param {*} startTime 开始时间
 * @param {*} endTime 结束时间
 * @param {*} destination 目的地
 * @param {*} fundSource 经费来源
 * @param {*} reason 用车原因
 */
export const editApplyOrder = async (id, userId, carrierId, carDetailId, amount, linkMan, linkMobile, personalAmount, parentId, institutionId, startTime, endTime, address, destination, fundSource, reason) => {
  try {
    return await post('/wx/editApplyOrder', { id, userId, carrierId, carDetailId, amount, linkMan, linkMobile, personalAmount, parentId, institutionId, startTime, endTime, address, destination, fundSource, reason }, true)
  } catch (error) {
    return error
  }
}

/**
 * 修改申请单状态
 * @param { Integer } id 申请单id
 * @param { Integer } state 申请单状态 -1=>撤单 2=>通过 6=>驳回
 */
export const editOrderState = async (id, state) => {
  try {
    return await post('/wx/editApplyOrder', { id, state }, true)
  } catch (error) {
    return error
  }
}

/**
 * 添加用车评价
 * @param { Integer } applyOrderId 申请单id
 * @param { Integer } carrierId 承运单位id
 * @param { Integer } userId 用户id
 * @param { String } content 评价内容
 * @param { Integer } star 星级
 */
export const addEvaluate = async (applyOrderId, carrierId, userId, content, star) => {
  try {
    return await post('/wx/addEvaluate', { applyOrderId, carrierId, userId, content, star }, true)
  } catch (error) {
    return error
  }
}

/**
 * 查询申请单对应的评价内容
 * @param { Integer } applyOrderId 申请单id
 */
export const getEvaluateContent = async (applyOrderId) => {
  try {
    return await get('/wx/findEvaluate', { applyOrderId }, true)
  } catch (error) {
    return error
  }
}

/**
 * 费用单确认
 * @param { Integer } userId 用户id
 * @param { Integer } costOrderId 费用单id
 * @param { String } nameUrl 签名图片
 */
export const confirmCostOrder = async (userId, costOrderId, nameUrl) => {
  try {
    return await get('/wx/updateCostOrder', { userId, costOrderId, nameUrl }, false)
  } catch (error) {
    return error
  }
}

/**
 * @description 添加报修单
 */
export const addRepair = async (repairTypeId, address, isAppoint, appointTime, areaId, regionOneId, regionTwoId,
    audio, pics, repairMobile, repairName, repairReason, repairUid,payType) => {
    try {
        return await post('/wx/addOrder', {
            repairTypeId, address, isAppoint, appointTime, areaId, regionOneId, regionTwoId,
            audio, pics, repairMobile, repairName, repairReason, repairUid, payType
        }, true)
    } catch (error) {
        return error
    }
};

/**
 *
 * @param {Number} id 订单id
 */
export const getOrderBySelf = async (id, orderState, serviceUid) => {
    try {
        return await post('/wx/editOrder', { id, orderState, serviceUid }, true)
    } catch (error) {
        return error
    }
};

/**
 * @description 根据id查询区域
 * @param {Number} id
 */
export const getAreaById = async (id) => {
    try {
        return await get('/wx/findInsRegion', {id},true)
    } catch (error) {
        return error
    }
};

/**
 * orderState 0 待抢单 1 已超时 2 维修中 3 待支付 4 已完成
 */
export const enterPrice = async (id, orderState, serviceFee) => {
    try {
        return await post('/wx/editOrder', { id, orderState, serviceFee }, true)
    } catch (error) {
        return error
    }
};

/**
 * @description 完成订单（仅仅对于公共报修来说）
 */
export const finishOrder = async (id, orderState) => {
    try {
        return await post('/wx/editOrder', { id, orderState }, true)
    } catch (error) {
        return error
    }
};

/**
 * @description 添加投诉
 */
export const addComplain = async (content,fileUrl,regionId,regionOneId,regionTwoId,sysUserId) => {
    try {
        return await post('/wx/addComplaint',{content,fileUrl,regionId,regionOneId,regionTwoId,sysUserId},true)
    } catch (error) {
        return error
    }
}

/**
 * @description 添加申辩
 */
export const complainApply = async (complaintId,content,fileUrl,sysUserId) => {
    try {
        return await post('/wx/addPlead',{complaintId,content,fileUrl,sysUserId},true)
    } catch (error) {
        return error
    }
};

/**
 *
 * @param {Number} pageNum
 */
export const getComplain = async (pageNum,pageSize,pleadState,adminId) => {
    try {
        return await get('/wx/queryComplainted',{pageNum,pageSize,pleadState,adminId},true)
    } catch (error) {
        return error
    }
};

/**
 *
 * @param {Number} id
 */
export const getComplainById = async (id) => {
    try {
        return await get('/wx/findComplaint', {id}, true)
    } catch (error) {
        return error
    }
};

/**
 * @description 微信支付
 */
export const wxPay = async (orderId) => {
    try {
        return await post('/wx/pay',{orderId},false)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询通知列表
 */
export const getNotice = async (pageNum,pageSize) => {
    try {
        return await get('/base/queryNotice',{pageNum,pageSize},true)
    } catch (error) {
        return error
    }
}

/**
 * @description 查询用户是否有未支付的报修单
 */
export const getNoPayState = async () => {
    try {
        return await get('/wx/findIsOrder',{},false)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询扣分列表
 */
export const getDeductPoints = async () => {
    try {
        return await get('/base/queryDeductPoints',{},false)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询罚金列表
 */
export const getForfeit = async () => {
    try {
        return await get('/base/queryForfeit',{},false)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询区域描述
 * @param {Number} id 区域id
 */
export const getIntroduce = async (id) => {
    try {
        return await get('/wx/findContent', {id}, true);
    } catch (error) {
        return error
    }
};

/**
 * @description 维修工重新修改报修单区域
 * @param {Number} orderId
 * @param {Number} areaId
 * @param {Number} regionOneId
 * @param {Number} regionTwoId
 */
export const updateOrderArea = async (orderId,areaId,regionOneId,regionTwoId) => {
    try {
        return await post('/wx/editOrderRegion',{orderId,areaId,regionOneId,regionTwoId},true)
    } catch (error) {
        return error
    }
}
/**
 * 查询订单详情
 * @param {Number} id 订单id
 */
export const getOrderDetail = async (id) => {
  try {
    return await post('/wx/findApplyOrder', {id}, true)
  } catch (error) {
    return error
  }
}
