import request from '@/utils/request'

/*
菜单管理相关的API请求函数
*/
const api_name = '/admin/system/sysDept'

export default {

  /*
  获取列表
  */
  findDept() {
    return request({
      url: `${api_name}/findDept`,
      method: 'get'
    })
  },

  /*
  删除
  */
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: "delete"
    })
  },

  /*
  保存
  */
  save(sysMenu) {
    return request({
      url: `${api_name}/save`,
      method: "post",
      data: sysMenu
    })
  },

  /*
  更新
  */
  updateById(sysMenu) {
    return request({
      url: `${api_name}/update`,
      method: "post",
      data: sysMenu
    })
  },
  updateStatus(id, status) {
    return request({
      url: `${api_name}/updateStatus/${id}/${status}`,
      method: 'post'
    })
  }
}