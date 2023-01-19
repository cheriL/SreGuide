import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  {
    text: "云原生",
    icon: "yunyuanshengpingtai",
    children: [
      { text: "Kubernetes", icon: "kubernetes", link: "/cloudnative/kubernetes/" },
      { text: "Docker", icon: "docker", link: "/cloudnative/docker/" },
      { text: "etcd", icon: "icon_etcd", link: "/cloudnative/etcd/" },
    ]
  },
  {
    text: "基础知识",
    icon: "jichu",
    children: [
      { text: "操作系统", icon: "caozuoxitong", link: "/basic/system/" },
      { text: "计算机网络", icon: "wangluo", link: "/basic/network/" },
      { text: "Linux运维", icon: "linux", link: "/basic/linux/" },
    ]
  },

  {
    text: "编程语言",
    icon: "code",
    children: [
      { text: "Shell", icon: "shell", link: "/code/shell/" },
      { text: "Python", icon: "python", link: "/code/python/" },
      { text: "Golang", icon: "golang", link: "/code/golang/" },
      { text: "前端开发", icon: "vue", link: "/code/frontend/" },
    ]
  },
  {
    text: "监控工具",
    icon: "jiankong",
    children: [
      { text: "Prometheus", icon: "prometheus", link: "/monitor/prometheus/" },
      { text: "Grafana", icon: "grafana", link: "/monitor/grafana/" },
      { text: "ELK", icon: "elastic", link: "/monitor/elk/" },
      { text: "Zabbix", icon: "zabbix1", link: "/monitor/zabbix/" },
    ],
  },
  {
    text: "自动化工具",
    icon: "devops",
    children: [
      { text: "Jenkins", icon: "jenkins", link: "/automate/jenkins/" },
      { text: "Ansible", icon: "ansible", link: "/automate/ansible/" },
    ]
  },
  {
    text: "web中间件",
    icon: "webkuangjia",
    children: [
      { text: "Nginx", icon: "nginx", link: "/web/nginx/" },
      { text: "Tomcat", icon: "tomcat", link: "/web/tomcat/" },
    ],
  },
  {
    text: "数据库",
    icon: "shujuku",
    children: [
      { text: "MySQL", icon: "mysql", link: "/db/mysql/" },
      { text: "Redis", icon: "redis", link: "/db/redis/" },
    ],
  },
]);