## nginx对header有所限制解除

发现没有解决，最后发现是NGINX对header有所限制，下划线（_）不支持。
方法一：不用下划线
把下划线_改成其他的，如sign_val改成sign-val

方法二：从根本解除nginx的限制
nginx默认request的header的那么中包含’_’时，会自动忽略掉。
解决方法是：在nginx里的nginx.conf配置文件中的http部分中添加如下配置：
**underscores_in_headers on; （默认 underscores_in_headers 为off）**
我使用的是方法一，方法二没有试。

