'use strict';

/**
 * 获取企业微信服务器的ip段
 *
 * 详细请看：<https://work.weixin.qq.com/api/doc/90000/90135/90930>
 * Examples:
 *    await api.getCallbackIp();
 *
 * Result:
 *    {
 *      "ip_list":["127.0.0.1","127.0.0.1"]
 *    }
 *
 */
exports.getCallbackIp = async function () {
  const { accessToken } = await this.ensureAccessToken();
  // https://qyapi.weixin.qq.com/cgi-bin/getcallbackip?access_token=ACCESS_TOKEN
  var url = this.prefix + 'getcallbackip?access_token=' + accessToken;
  return this.request(url);
};
