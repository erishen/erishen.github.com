---
title: iOS APP 审核
date: 2016-05-12 22:23:37
tags: [iOS]
categories: [工作]
---

### 有用的网站链接：

- [APP被拒绝的各种理由](https://developer.apple.com/app-store/review/guidelines/), 附带[中文翻译](http://my.oschina.net/u/1245365/blog/196257)
- [常见APP拒绝情况](https://developer.apple.com/cn/app-store/review/rejections/)
- [用户界面设计技巧](https://developer.apple.com/cn/design/tips/)
- [iOS APP 上架流程](http://www.cnblogs.com/496668219long/p/4603791.html)
- [Test Flight](https://developer.apple.com/testflight/)


### 应用审核前必须满足的条件：

- 不存在 Crash （崩溃，死机）
- 不存在明显的 Bug
- 不使用非公开的 API
- 不以任何方式下载代码
- iPhone 应用必须无条件地运行在 iPad 上
- 不能与 App Store 上架应用重复
- 多任务应用只允许在后台运行如下相应的服务： VoIP, 音频播放，地理位置，任务记录，本地提醒等
- 外观不应与现有 Apple 产品或广告主题类似或混淆
- 不出现错误的 Apple 产品拼写
- 不使用受保护的第三方资源（商标，版权，商业机密，以及其他私有内容），否则提供一份文本形式的使用授权
- 不能模仿任何 iPod 界面
- 通过蜂窝网络传输的流媒体音频内容在5分钟内不得超过5MB
- 通过蜂窝网络传输超过10分钟的流媒体视频内容，必须使用 HTTP Live Streaming，并包含一条基线 64kbps 的音频 HTTP Live 流
- 应用必须遵守  Apple iOS Human Interface Guidelines 中的所有条款和条件
- 用户界面不能过于复杂，设计超级简洁，精致，充满创造力，深思熟虑。
- 不能通过 App Store 以外的渠道解锁或开启附加属性或功能
- 不能通过 In App Purchase API 以外的系统提供购买内容，功能或服务
- 不能快速耗光设备电量或产生大量热量
- 不能要求用户分享个人信息，如邮箱地址，生日等 才能使用其功能
- 在未获得用户事先允许，或未告知用户信息将如何，在哪里使用的情况下，应用不可以传输用户数据
- 不能使得有用户经常提供色情内容