---
title: Concurrent writes to Go slices
date: "2023-12-12T12:29:02.284Z"
description: "Concurrent writes to different slice indexes do not cause panic"
categories: [golang go]
---

I was reading [github.com/prometheus/procfs/sysfs/system_cpu.go](https://github.com/prometheus/procfs/blob/732ca0f7c4351613d998dcda0c226b7905cd89d8/sysfs/system_cpu.go#L237) source code and I thought I found a bug, but after creating small reporoduction of this concurrent write it seems like it is in fact _NOT_ a bug. It's however still a mistake to write to the same index and it's completly unsafe for maps.
