import request from '@/utils/request'

export default {
  getHospSetList(current,limit,searchObj){
    // 医院设置的分页查询
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data:searchObj
    })
  },
  // 删除医院设置
  deleteHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },
  // 批量删除
  bachRemoveHospSet(idList) {
    return request({
      url: `/admin/hosp/hospitalSet/DeleteHospSetByids`,
      method: 'delete',
      data:idList
    })
  },
  // 锁定和取消锁定
  lockHospset(id,status) {
    return request({
      url: `/admin/hosp/hospitalSet/LockHospSet/${id}/${status}`,
      method: 'put'
    })
  },
  // 添加医院信息
  saveHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/saveHospSet`,
      method: 'post',
      data:hospitalSet
    })
  },
  // 医院设置id查询
  getHospSetId(id) {
    return request({
      url: `/admin/hosp/hospitalSet/findHospSetById/${id}`,
      method: 'get'
    })
  },
  // 修改医院设置
  updateHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/updateHospSet`,
      method: 'post',
      data:hospitalSet
    })
  }

}
