import request from '@/utils/request'

const api_name = '/admin/system/sysRole'

export default {

    /*
    获取角色分页列表(带搜索)
    */
    getPageList(page, limit, searchObj) {
      return request({
        url: `${api_name}/${page}/${limit}`,
        method: 'get',
        params: searchObj
      })
    },
    /*
    删除角色
    */
    removeById(id) {
        return request({
          url: `${api_name}/remove/${id}`,
          method: 'delete'
        })
      },
    /*
    添加角色
    */
      save(role) {
        return request({
          url: `${api_name}/save`,
          method: 'post',
          data: role
        })
      },
    /*
    根据id获取角色
    */
    getById(id) {
        return request({
          url: `${api_name}/findRoleById/${id}`,
          method: 'post'
        })
      },
      
    /*
    更新角色
    */
      updateById(role) {
        return request({
          url: `${api_name}/update`,
          method: 'post',
          data: role
        })},
    /*
    批量删除角色
    */
    batchRemove(idList) {
        return request({
            url: `${api_name}/batchRemove`,
            method: `delete`,
            data: idList
        })
        }
   
}
