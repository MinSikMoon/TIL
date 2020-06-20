https://www.quora.com/How-can-I-disable-the-Spring-Boot-default-login-page

Abhinash Kumar Pandey (अभीनाश कुमार पाण्डेय), Software Developer (2018-present)
Answered Jun 17, 2020 · Author has 64 answers and 90k answer views
As “security.basic.enabled=false” is deprecated in current spring boot version.
we can use java based configuration like this :

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity security) throws Exception
    {
     security.httpBasic().disable();
    }

}
```
