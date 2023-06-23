import request from '@/utils/request'


const api_name = '/admin/system/sysLoginLog'

export default {
    getLoginLogList(page, limit, sysLoginLogQueryVo) {
      return request({
        url: `${api_name}/${page}/${limit}`,
        method: 'get',
        params: sysLoginLogQueryVo
      })
    },
    deleteLoginLog(id) {
      return request({
        url: `${api_name}/remove/${id}`,
        method: 'delete',
      });
    },
  
    batchDeleteLoginLogs(idList) {
      return request({
        url: `${api_name}/batchRemove`,
        method: 'delete',
        data: idList,
      });
    }
  }