# Learn-NextJS

## Basic Features

### Pages

Page trong nextjs nằm trong thư mục 'pages' trong cây thư mục
VD: /pages/about.js ⇨ http://localhost/about

#### Dynamic Routes

Sử dụng useRouter để tạo Dynamic Routers trong Next

- useRouter(): trả về object NextRouter

- Định nghĩa dynamic router: post/[pid].jsx
Có thể theo dõi giá trị được truyền vào [pid] thông qua object query:

VD1: http://localhost/post/abc

```Javascript
NextRouter: {
    query: {
        pid: 'abc',
    }
}
```

VD2: http://localhost/post/abc?foo=bar

```Javascript
NextRouter: {
    query: {
        pid: 'abc',
        foo: 'bar',
    }
}
```
