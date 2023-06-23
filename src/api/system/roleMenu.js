import request from '@/utils/request'

const api_name = '/admin/system/sysRoleMenuAllot'

export default {
    /*
查看某个角色的权限列表
*/
toAssign(roleId) {
    return request({
      url: `${api_name}/toAssign/${roleId}`,
      method: 'get'
    })
  },
  
  /*
  给某个角色授权
  */
  doAssign(assginMenuVo) {
    return request({
      url: `${api_name}/doAssign`,
      method: "post",
      data: assginMenuVo
    })
  }
}