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
  }
  
}
