V2ray一键安装脚本（带HTTPS伪装）修改自网络跳越，作者已经跑路

剔除了作者用于检测域名是否解析到本机服务器的验证，原因（该用于检测IP的网址已经挂掉）故导致验证失败退出安装

bash <(curl -L https://raw.githubusercontent.com/Llikeyoulqm/V2ray/main/v2ray.sh)

BBR+BBR魔改+Lotsever(锐速)一键脚本 for Centos/Debian/Ubuntu

BBR魔改版支持系统：CentOS 6+、Debian 8+、Ubuntu 14+。

注意：如果服务器有重要的数据，建议安装前先备份好数据，特别是CentOS系统。

wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
