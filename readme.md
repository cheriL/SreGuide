## SRE 学习路线

### SRE 工作职责

> 💡 要指定学习路线，首先我们要搞情况 SRE 的工作职责。

**SRE**（Site Reliability Engineering）站点可靠性工程是一种结合软件工程和运维运营原则的角色和方法论，旨在在系统、服务或产品的设计、开发、部署和运维过程中，采取一系列措施来确保其持续稳定运行、可靠性和可用性。

**SRE/稳定性保障**具体措施包括但不限于：

1. **高可用性：** 确保系统能够在大部分时间内持续提供服务，即使在出现故障或意外情况下也能够快速恢复。常见的高可用性措施包括冗余设计、故障转移、负载均衡和容错机制。
2. **监控与警报：** 设置全面的监控系统来实时跟踪关键指标、日志、事件和服务性能。监控可以包括服务器资源利用率、请求响应时间、错误率、数据库性能等。当指标超出预定的阈值时，自动触发警报通知相关团队，以便及时采取措施。
3. **自动化平台/工具开发**：利用自动化工具和流程，简化系统部署、配置管理、更新、扩容、维护和故障恢复等操作，减少人工操作的错误和复杂性，缩短故障恢复时间，提高效率和稳定性。
4. **故障排查与问题解决：** 对系统故障进行深入的分析和排查，追踪问题根因，并采取措施解决问题，以防止类似问题再次发生。
5. **预案和演练**：制定应急预案和灾难恢复计划，并定期进行演练和测试，以确保在紧急情况下能够快速响应和恢复系统正常运行。
6. **备份与容灾恢复**：制定完备的数据备份和容灾方案，确保在出现故障或灾难时，系统能够快速切换到备用设备或利用备份数据进行恢复，保证业务的连续性和数据的安全性。
7. **容量规划：** 定期评估服务的容量需求，确保系统具备足够的资源（例如计算、存储、网络等）来满足需求，避免资源瓶颈导致系统性能下降。他们必须确保服务能够应对未来的用户增长和流量峰值。
8. **性能优化：** 定期对系统进行性能分析，识别性能瓶颈，并采取措施优化系统性能，提高响应时间和吞吐量。
9. **安全和权限控制**：实施适当的安全措施，包括访问控制、身份验证、数据加密、安全审计等，以保护系统免受恶意攻击、数据泄露或未授权访问的风险。
10. **发布/回滚策略：** 参与制定发布/回滚策略，确保新版本的软件能够平稳地上线，同时减少对现有系统的影响，新版本发生问题时，能快速回滚。
11. **文档和知识共享**：记录系统的配置、架构和故障处理经验，以便团队成员之间进行知识共享和技能传承。

### SRE 稳定性保障体系

> 💡 SRE 主要工作是保障稳定性，稳定性就是不出故障，围绕着故障周期，整理出 SRE 稳定性保障体系。

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/sre.png)

### SRE RoadMap

> 💡 根据工作职责和稳定性保障体系，整理出学习路线。

![image-20240207104045420](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240207104045420.png)

## 推荐文章汇总

云原生

* [云原生实践总结](docs/cloudnative/)

- 运维实践
  - [Etcd 概述及运维实践](docs/cloudnative/install-ops/ops-books/etcd.md)
  - [CoreDNS 概述及运维实践](docs/cloudnative/install-ops/ops-books/coredns.md)
  - [从0开始装一套 KubeVirt 1.2.1](docs/cloudnative/install-ops/install-books/kubevirt-install.md)
  - [将 oVirt 虚拟机迁移到 KubeVirt](docs/cloudnative/install-ops/ops-books/ovirt-to-kubevirt.md)
- 稳定性建设
  - [Linux 性能基准测试工具及测试方法](docs/cloudnative//stability/benchmark/sysbench.md)
  - [K8s 无备份，不运维](docs/cloudnative/stability/dr-br/etcd-and-velero.md)
- 故障排查
  - [什么？相同型号物理机 容器性能不如虚拟机？](docs/cloudnative/troubleshooting/vm-vs-container-performance.md)
  - [Calico 异常重启问题复盘](docs/cloudnative/troubleshooting/calico-restart.md)
  - [K8s 一条默认参数引起的性能问题](docs/cloudnative/troubleshooting/enable-service-links.md)
  - [K8s 驱逐场景以及规避方案](docs/cloudnative/troubleshooting/k8s-eviction.md)
  - [K8s CPU Throttle 优化方案](docs/cloudnative/troubleshooting/cpu-burst.md)
- 最佳实践
  - [云原生落地](docs/cloudnative/best-practice/containerization.md)
  - [弹性伸缩落地实践](docs/cloudnative/best-practice/hpa.md)
  - [容器化后无损上下线解决方案](docs/cloudnative/best-practice/gracefully-up-down.md)
  - [巧用 shell-operator 配置 K8s Pod 保护策略](docs/cloudnative/best-practice/shell-operator-pdb.md)
  - [kube on kube 实现思路分享](docs/cloudnative/best-practice/kube-on-kube.md)
  - [K8s 集群巡检](docs/cloudnative/best-practice/k8s-scanner.md)

DevOps

计算机基础

编程语言

负载均衡

## 公众号

最新更新会第一时间同步在公众号，推荐关注！

<div style="text-align: center;">
    <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin.png" alt="weixin" style="zoom: 25%; margin: 0 auto; display: block;" />
</div>
