type If<C extends boolean, T, F> = C extends true ? T : F

// * 注意 null 在严格空检查 配置未开启的状态下, null 是 boolean 的子类型!!
