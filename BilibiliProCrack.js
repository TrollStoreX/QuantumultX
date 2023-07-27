	/***********************************
> 应用名称：Bilibili大会员通用破解模板
> 软件版本：7.8.2
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 解锁说明：解锁VIP番剧和影视
> 更新时间：2022-12-03
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️
[rewrite_local]
  
# ～ Bilibili大会员（2022-12-05）@ddgksf2013
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header BilibiliProCrack.js
[mitm] 
hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*
***********************************/

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = 'Buvid=Z54AD8542C23150544068625CFAA2CFF4EC8; DedeUserID=19649921; DedeUserID__ckMd5=41a17a7411f87549; SESSDATA=e6e769e1%2C1701085945%2Cf0ec6752; bili_jct=b3aa5fd68298a2f9152a01c6e75d05d5; sid=fcd3z8ny; _uuid=C47B2A2E-C928-36D7-10B32-55EC79BA4F9424965infoc; b_nut=1685534825; buvid3=904E6B87-AE37-3A56-496A-503C5844A53A25618infoc; buvid4=9F30344E-0EA0-F2CC-09A0-CB166B0FDCBE25618-023053120-OOXTsSUsuhUkxoUj1vFpNg%3D%3D; buvid_fp=962238b6e01f87e9bd15cb9e3871111c';
modifiedHeaders['x-bili-device-bin'] = 'CAEQpN+2IhokWjU0QUQ4NTQyQzIzMTUwNTQ0MDY4NjI1Q0ZBQTJDRkY0RUM4IgZpcGhvbmUqA2lvczIDcGFkOgVhcHBsZUIFQXBwbGVKE2lQYWQgUHJvIDExLUluY2ggMkdSBjE0LjQuMWoGNy4yMi4wckBCMEQ3RUFGRTI3RjQwNUExM0QyMTY4NTk2M0ZDRkU0MjIwMjEwNTEzMTkyNDU0QjE5MEI0RkI5MjMwNEUwOEUweIuv0+fwLw==';
modifiedHeaders['Authorization'] = 'identify_v1 f9b3920b804589aae844dd1376ee9252';
modifiedHeaders['User-Agent'] = 'bili-universal/72200100 os/ios model/iPad Pro 11-Inch 2G mobi_app/iphone osVer/14.4.1 network/2';
modifiedHeaders['buvid'] = 'Z54AD8542C23150544068625CFAA2CFF4EC8';
modifiedHeaders['x-bili-metadata-bin'] = 'CiBmOWIzOTIwYjgwNDU4OWFhZTg0NGRkMTM3NmVlOTI1MhIGaXBob25lGgNwYWQgpN+2IioFYXBwbGUyJFo1NEFEODU0MkMyMzE1MDU0NDA2ODYyNUNGQUEyQ0ZGNEVDODoDaW9z';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCDE1NWIzYWI5';
modifiedHeaders['x-bili-trace-id'] = '5401cc72c666cabf7a965365db647738:7a965365db647738:0:0';
modifiedHeaders['x-bili-exps-bin'] = '';
$done({'headers': modifiedHeaders});