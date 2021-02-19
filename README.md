# @lumu/lazyload

> react lazyload

[![NPM](https://img.shields.io/npm/v/@lumu/lazyload.svg)](https://www.npmjs.com/package/@lumu/lazyload) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### 安装

```bash
npm install --save @lumu/lazyload
```

### API

参数|说明|类型|默认值
-|-|-|-
children|必选，懒加载组件|React.ReactNode|-
loading|必选，占位组件|React.ReactNode|-
scrollContainer|可选，滚动容器|string/dom|document.body
offset|可选，偏移量|number/Array(number)|0
resize|可选，是否监听resize事件|boolean|false
debounce|可选，防抖时间，优先级高于节流|number|0
throttle|可选，节流时间，优先级低于防抖|number|0

### 完整用法

```tsx
const App = () => {
    return (
        <React.Fragment>
            {
                new Array(10).fill(1).map((_, index) => (
                    <Lazyload
                        resize
                        scrollContainer={document.getElementById('root') as HTMLDivElement}
                        debounce={300}
                        offset={50}
                        loading={<Loading/>}
                        key={index}>
                        <img alt="" src="https://img01.yzcdn.cn/vant/apple-1.jpg" width="100%" height="300"/>    
                    </Lazyload>
                ))
            }
        </React.Fragment>
    )
}
```

## License

MTI © [wenlei0617](https://github.com/wenlei0617)
