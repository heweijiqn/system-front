import request from '@/utils/request'

const api_name = '/admin/system/sysPost'

export default {
  // 逻辑删除岗位
  deleteById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  // 条件分页查询岗位
  findPageQueryRole(page, limit, sysPostQueryVo) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: sysPostQueryVo
    })
  },
  // 添加岗位
  saveRole(sysPost) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: sysPost
    })
  },
  // 根据id查询岗位
  findRoleById(id) {
    return request({
      url: `${api_name}/findRoleById/${id}`,
      method: 'post'
    })
  },
  // 修改岗位
  updateRole(sysRole) {
    return request({
      url: `${api_name}/update`,
      method: 'post',
      data: sysRole
    })
  },
  // 批量删除岗位
  batchRemove(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    })
  },
  updateStatus(id, status) {
    return request({
      url: `${api_name}/updateStatus/${id}/${status}`,
      method: 'get'
    })
  }
}
