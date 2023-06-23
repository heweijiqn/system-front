import request from '@/utils/request'

const api_name = '/admin/system/sysUserRole'

export default {
    //根据用户id查询用户已分配的角色
getRolesByUserId(userId) {
    return request({
      url: `${api_name}/toAssign/${userId}`,
      method: 'get'
    })
  },
  
  //分配角色
  assignRoles(assginRoleVo) {
    return request({
      url: `${api_name}/doAssign`,
      method: 'post',
      data: assginRoleVo
    })
  }

}