import request from '@/utils/request'


const api_name = '/admin/system/sysOperLog'

export default {
    getLoginLogList(page, limit, sysOperLogQueryVo) {
      return request({
        url: `${api_name}/${page}/${limit}`,
        method: 'get',
        params: sysOperLogQueryVo
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