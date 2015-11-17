
1. 如果在 JSX 中使用的属性不存在于 HTML 的规范中，这个属性会被忽略。如果要使用自定义属性，可以用 data- 前缀。
可访问性属性的前缀 aria- 也是支持的。

2. HTML 转义

    - 直接使用 UTF-8 字符 ©
    - 使用对应字符的 Unicode 编码，查询编码
    - 使用数组组装 <div>{['cc ', <span>&copy;</span>, ' 2015']}</div>
    - 直接插入原始的 HTML

      <div dangerouslySetInnerHTML={{__html: 'cc &copy; 2015'}} />
        
3. spread attributes

      var props = {};
      props.foo = x;
      props.bar = y;
      var component = <Component {...props} />;
      
4. 覆盖属性

      var props = { foo: 'default' };
      var component = <Component {...props} foo={'override'} />;
      console.log(component.props.foo); // 'override'
    
5. JSX 与 HTML 的差异 [DOM差异](http://facebook.github.io/react/docs/dom-differences.html)

    - class 要写成 className
    - style 属性接受由 CSS 属性构成的 JS 对象
    - onChange 事件表现更接近我们的直觉（不需要 onBlur 去触发）
    - 表单的表现差异比较大，要单独再讲
