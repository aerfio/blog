---
title: GCE workload detection
date: "2020-11-17T21:48:02.284Z"
description: "Quick method to detect whether you're running in VM in Google Compute Engine"
categories: []
sources:
  [
    https://github.com/vdemeester/k8s-pkg-credentialprovider/blob/8edca87436b8a9a0924e8c6168177cd1854bd186/gcp/metadata.go#L49,
    https://fit-pc.com/wiki/index.php?title=How_to_retrieve_product_information_from_within_Windows_/_Linux&mobileaction=toggle_view_mobile#linux,
  ]
---

It's as easy as reading the content of `/sys/class/dmi/id/product_name` file, assuming it exists of course. It should read _Google Compute Engine_.

Generally, you can also use different files from that directory to get motherboard information, product serial number and so on.
