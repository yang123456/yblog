import{_ as p,c as l,o as t,a4 as i}from"./chunks/framework.ZdC_TOYZ.js";const s="/yblog/assets/image3.BzbQLcn8.jpeg",o="/yblog/assets/image4.BpQo4Lap.jpeg",n="/yblog/assets/image5.C3_Vfi1G.jpeg",r="/yblog/assets/image6.Ddo4UBP_.jpeg",L=JSON.parse('{"title":"54、mysql有关权限的表都有哪几个？","description":"","frontmatter":{},"headers":[],"relativePath":"interview/mysql01.md","filePath":"interview/mysql01.md"}'),E={name:"interview/mysql01.md"},e=i('<p><strong>1、一张表，里面有ID自增主键，当insert了17条记录之后，删除了第15,16,17条记录，再把Mysql重启，再insert一条记录，这条记录的ID是18还是15 ？</strong></p><p><img src="'+s+'" alt="ySQL面试题集锦，据说国内外知名互联网公司都在用！">{width=&quot;7.930555555555555in&quot; height=&quot;1.8909722222222223in&quot;}</p><p><strong>2、Mysql的技术特点是什么？</strong></p><p>Mysql数据库软件是一个客户端或服务器系统，其中包括：支持各种客户端程序和库的多线程SQL服务器、不同的后端、广泛的应用程序编程接口和管理工具。</p><p><strong>3、Heap表是什么？</strong></p><p>HEAP表存在于内存中，用于临时高速存储。</p><ul><li><p>BLOB或TEXT字段是不允许的</p></li><li><p>只能使用比较运算符=，&lt;，&gt;，=&gt;，= &lt;</p></li><li><p>HEAP表不支持AUTO_INCREMENT</p></li><li><p>索引不可为NULL</p></li></ul><p><strong>4、Mysql服务器默认端口是什么？</strong></p><p>Mysql服务器的默认端口是3306。</p><p><strong>5、与Oracle相比，Mysql有什么优势？</strong></p><ul><li><p>Mysql是开源软件，随时可用，无需付费。</p></li><li><p>Mysql是便携式的</p></li><li><p>带有命令提示符的GUI。</p></li><li><p>使用Mysql查询浏览器支持管理</p></li></ul><p><strong>6、如何区分FLOAT和DOUBLE？</strong></p><p>以下是FLOAT和DOUBLE的区别：</p><ul><li><p>浮点数以8位精度存储在FLOAT中，并且有四个字节。</p></li><li><p>浮点数存储在DOUBLE中，精度为18位，有八个字节。</p></li></ul><p><strong>7、区分CHAR_LENGTH和LENGTH？</strong></p><p>CHAR_LENGTH是字符数，而LENGTH是字节数。Latin字符的这两个数据是相同的，但是对于Unicode和其他编码，它们是不同的。</p><p><strong>8、请简洁描述Mysql中InnoDB支持的四种事务隔离级别名称，以及逐级之间的区别？</strong></p><p>SQL标准定义的四个隔离级别为：</p><ul><li><p>read uncommited ：读到未提交数据</p></li><li><p>read committed：脏读，不可重复读</p></li><li><p>repeatable read：可重读</p></li><li><p>serializable ：串行事物</p></li></ul><p><img src="'+o+'" alt="ySQL面试题集锦，据说国内外知名互联网公司都在用！">{width=&quot;6.663194444444445in&quot; height=&quot;2.4256944444444444in&quot;}</p><p><img src="'+n+'" alt="ySQL面试题集锦，据说国内外知名互联网公司都在用！">{width=&quot;6.663194444444445in&quot; height=&quot;2.6534722222222222in&quot;}</p><p><strong>9、在Mysql中ENUM的用法是什么？</strong></p><p>ENUM是一个字符串对象，用于指定一组预定义的值，并可在创建表时使用。</p><p>Create table size(name ENUM(&#39;Smail,&#39;Medium&#39;,&#39;Large&#39;);</p><p><strong>10、如何定义REGEXP？</strong></p><p>REGEXP是模式匹配，其中匹配模式在搜索值的任何位置。</p><p><strong>11、CHAR和VARCHAR的区别？</strong></p><p>以下是CHAR和VARCHAR的区别：</p><ul><li><p>CHAR和VARCHAR类型在存储和检索方面有所不同</p></li><li><p>CHAR列长度固定为创建表时声明的长度，长度值范围是1到255</p></li></ul><p>当CHAR值被存储时，它们被用空格填充到特定长度，检索CHAR值时需删除尾随空格。</p><p><strong>12、列的字符串类型可以是什么？</strong></p><p>字符串类型是：</p><ul><li><p>SET</p></li><li><p>BLOB</p></li><li><p>ENUM</p></li><li><p>CHAR</p></li><li><p>TEXT</p></li><li><p>VARCHAR</p></li></ul><p><strong>13、如何获取当前的Mysql版本？</strong></p><p>SELECT VERSION();</p><p><strong>14、Mysql中使用什么存储引擎？</strong></p><p>存储引擎称为表类型，数据使用各种技术存储在文件中。</p><p>技术涉及：</p><ul><li><p>Storage mechanism</p></li><li><p>Locking levels</p></li><li><p>Indexing</p></li><li><p>Capabilities and functions.</p></li></ul><p><strong>15、Mysql驱动程序是什么？</strong></p><p>以下是Mysql中可用的驱动程序：</p><ul><li><p>PHP驱动程序</p></li><li><p>JDBC驱动程序</p></li><li><p>ODBC驱动程序</p></li><li><p>CWRAPPER</p></li><li><p>PYTHON驱动程序</p></li><li><p>PERL驱动程序</p></li><li><p>RUBY驱动程序</p></li><li><p>CAP11PHP驱动程序</p></li><li><p>Ado.net5.mxj</p></li></ul><p><strong>16、TIMESTAMP在UPDATE CURRENT_TIMESTAMP数据类型上做什么？</strong></p><p>创建表时TIMESTAMP列用Zero更新。只要表中的其他字段发生更改，UPDATE CURRENT_TIMESTAMP修饰符就将时间戳字段更新为当前时间。</p><p><strong>17、主键和候选键有什么区别？</strong></p><p>表格的每一行都由主键唯一标识,一个表只有一个主键。</p><p>主键也是候选键。按照惯例，候选键可以被指定为主键，并且可以用于任何外键引用。</p><p><strong>18、如何使用Unix shell登录Mysql？</strong></p><p>我们可以通过以下命令登录：</p><p># [mysql dir]/bin/mysql -h hostname -u &lt;UserName&gt; -p &lt;password&gt;</p><p><strong>19、 myisamchk是用来做什么的？</strong></p><p>它用来压缩MyISAM表，这减少了磁盘或内存使用。</p><p><strong>20、MYSQL数据库服务器性能分析的方法命令有哪些?</strong></p><p><img src="'+r+'" alt="ySQL面试题集锦，据说国内外知名互联网公司都在用！">{width=&quot;4.990277777777778in&quot; height=&quot;4.11875in&quot;}</p><p><strong>21、如何控制HEAP表的最大尺寸？</strong></p><p>Heal表的大小可通过称为max_heap_table_size的Mysql配置变量来控制。</p><p><strong>22、MyISAM Static和MyISAM Dynamic有什么区别？</strong></p><p>在MyISAM Static上的所有字段有固定宽度。动态MyISAM表将具有像TEXT，BLOB等字段，以适应不同长度的数据类型。</p><p>MyISAM Static在受损情况下更容易恢复。</p><p><strong>23、federated表是什么？</strong></p><p>federated表，允许访问位于其他服务器数据库上的表。</p><p><strong>24、如果一个表有一列定义为TIMESTAMP，将发生什么？</strong></p><p>每当行被更改时，时间戳字段将获取当前时间戳。</p><p><strong>25、列设置为AUTO INCREMENT时，如果在表中达到最大值，会发生什么情况？</strong></p><p>它会停止递增，任何进一步的插入都将产生错误，因为密钥已被使用。</p><p><strong>26、怎样才能找出最后一次插入时分配了哪个自动增量？</strong></p><p>LAST_INSERT_ID将返回由Auto_increment分配的最后一个值，并且不需要指定表名称。</p><p><strong>27、你怎么看到为表格定义的所有索引？</strong></p><p>索引是通过以下方式为表格定义的：</p><p>SHOW INDEX FROM &lt;tablename&gt;;</p><p><strong>28.、LIKE声明中的％和_是什么意思？</strong></p><p>％对应于0个或更多字符，_只是LIKE语句中的一个字符。</p><p><strong>29、如何在Unix和Mysql时间戳之间进行转换？</strong></p><ul><li><p>UNIX_TIMESTAMP是从Mysql时间戳转换为Unix时间戳的命令</p></li><li><p>FROM_UNIXTIME是从Unix时间戳转换为Mysql时间戳的命令</p></li></ul><p><strong>30、列对比运算符是什么？</strong></p><p>在SELECT语句的列比较中使用=，&lt;&gt;，&lt;=，&lt;，&gt; =，&gt;，&lt;&lt;，&gt;&gt;，&lt;=&gt;，AND，OR或LIKE运算符。</p><p><strong>31、我们如何得到受查询影响的行数？</strong></p><p>行数可以通过以下代码获得：</p><p>SELECT COUNT(user_id)FROM users;</p><p><strong>32、Mysql查询是否区分大小写？</strong></p><p>不区分</p><p>SELECT VERSION(), CURRENT_DATE;</p><p>SeLect version(), current_date;</p><p>seleCt vErSiOn(), current_DATE;</p><p>所有这些例子都是一样的，Mysql不区分大小写。</p><p><strong>33.、LIKE和REGEXP操作有什么区别？</strong></p><p>LIKE和REGEXP运算符用于表示^和％。</p><p>+---+-------------------------------------------------------------------+ | 1 | SELECT * FROM employee WHERE emp_name REGEXP &quot;^b&quot;; | | | | | 2 | SELECT * FROM employee WHERE emp_name LIKE &quot;%b&quot;; | +===+===================================================================+ +---+-------------------------------------------------------------------+</p><p><strong>34.、BLOB和TEXT有什么区别？</strong></p><p>BLOB是一个二进制对象，可以容纳可变数量的数据。有四种类型的BLOB -</p><ul><li><p>TINYBLOB</p></li><li><p>BLOB</p></li><li><p>MEDIUMBLOB和</p></li><li><p>LONGBLOB</p></li></ul><p>它们只能在所能容纳价值的最大长度上有所不同。</p><p>TEXT是一个不区分大小写的BLOB。四种TEXT类型</p><ul><li><p>TINYTEXT</p></li><li><p>TEXT</p></li><li><p>MEDIUMTEXT和</p></li><li><p>LONGTEXT</p></li></ul><p>它们对应于四种BLOB类型，并具有相同的最大长度和存储要求。</p><p>BLOB和TEXT类型之间的唯一区别在于对BLOB值进行排序和比较时区分大小写，对TEXT值不区分大小写。</p><p><strong>35、mysql_fetch_array和mysql_fetch_object的区别是什么？</strong></p><p>以下是mysql_fetch_array和mysql_fetch_object的区别：</p><p>mysql_fetch_array（） - 将结果行作为关联数组或来自数据库的常规数组返回。</p><p>mysql_fetch_object - 从数据库返回结果行作为对象。</p><p><strong>36、我们如何在mysql中运行批处理模式？</strong></p><p>以下命令用于在批处理模式下运行：</p><p>mysql;</p><p>mysql mysql.out</p><p><strong>37、MyISAM表格将在哪里存储，并且还提供其存储格式？</strong></p><p>每个MyISAM表格以三种格式存储在磁盘上：</p><p>·&quot;.frm&quot;文件存储表定义</p><p>·数据文件具有&quot;.MYD&quot;（MYData）扩展名</p><p>索引文件具有&quot;.MYI&quot;（MYIndex）扩展名</p><p><strong>38.、Mysql中有哪些不同的表格？</strong></p><p>共有5种类型的表格：</p><ul><li><p>MyISAM</p></li><li><p>Heap</p></li><li><p>Merge</p></li><li><p>INNODB</p></li><li><p>ISAM</p></li></ul><p>MyISAM是Mysql的默认存储引擎。</p><p><strong>39、ISAM是什么？</strong></p><p>ISAM简称为索引顺序访问方法。它是由IBM开发的，用于在磁带等辅助存储系统上存储和检索数据。</p><p><strong>40、InnoDB是什么？</strong></p><p>lnnoDB是一个由Oracle公司开发的Innobase Oy事务安全存储引擎。</p><p><strong>41、Mysql如何优化DISTINCT？</strong></p><p>DISTINCT在所有列上转换为GROUP BY，并与ORDER BY子句结合使用。</p><hr><p>1 SELECT DISTINCT t1.a FROM t1,t2 where t1.a=t2.a;</p><hr><hr><p><strong>42、如何输入字符为十六进制数字？</strong></p><p>如果想输入字符为十六进制数字，可以输入带有单引号的十六进制数字和前缀（X），或者只用（Ox）前缀输入十六进制数字。</p><p>如果表达式上下文是字符串，则十六进制数字串将自动转换为字符串。</p><p><strong>43、如何显示前50行？</strong></p><p>在Mysql中，使用以下代码查询显示前50行：</p><p>SELECT*FROM</p><p>LIMIT 0,50;</p><p><strong>44、可以使用多少列创建索引？</strong></p><p>任何标准表最多可以创建16个索引列。</p><p><strong>45、NOW（）和CURRENT_DATE（）有什么区别？</strong></p><p>NOW（）命令用于显示当前年份，月份，日期，小时，分钟和秒。</p><p>CURRENT_DATE（）仅显示当前年份，月份和日期。</p><p><strong>46、什么样的对象可以使用CREATE语句创建？</strong></p><p>以下对象是使用CREATE语句创建的：</p><ul><li><p>DATABASE</p></li><li><p>EVENT</p></li><li><p>FUNCTION</p></li><li><p>INDEX</p></li><li><p>PROCEDURE</p></li><li><p>TABLE</p></li><li><p>TRIGGER</p></li><li><p>USER</p></li><li><p>VIEW</p></li></ul><p><strong>47.、Mysql表中允许有多少个TRIGGERS？</strong></p><p>在Mysql表中允许有六个触发器，如下：</p><ul><li><p>BEFORE INSERT</p></li><li><p>AFTER INSERT</p></li><li><p>BEFORE UPDATE</p></li><li><p>AFTER UPDATE</p></li><li><p>BEFORE DELETE and</p></li><li><p>AFTER DELETE</p></li></ul><p><strong>48、什么是非标准字符串类型？</strong></p><p>以下是非标准字符串类型：</p><ul><li><p>TINYTEXT</p></li><li><p>TEXT</p></li><li><p>MEDIUMTEXT</p></li><li><p>LONGTEXT</p></li></ul><p><strong>49、什么是通用SQL函数？</strong></p><ul><li><p>CONCAT(A, B) - 连接两个字符串值以创建单个字符串输出。通常用于将两个或多个字段合并为一个字段。</p></li><li><p>FORMAT(X, D)- 格式化数字X到D有效数字。</p></li><li><p>CURRDATE(), CURRTIME()- 返回当前日期或时间。</p></li><li><p>NOW（） - 将当前日期和时间作为一个值返回。</p></li><li><p>MONTH（），DAY（），YEAR（），WEEK（），WEEKDAY（） - 从日期值中提取给定数据。</p></li><li><p>HOUR（），MINUTE（），SECOND（） - 从时间值中提取给定数据。</p></li><li><p>DATEDIFF（A，B） - 确定两个日期之间的差异，通常用于计算年龄</p></li><li><p>SUBTIMES（A，B） - 确定两次之间的差异。</p></li><li><p>FROMDAYS（INT） - 将整数天数转换为日期值。</p></li></ul><p><strong>50、解释访问控制列表</strong></p><p>ACL（访问控制列表）是与对象关联的权限列表。这个列表是Mysql服务器安全模型的基础，它有助于排除用户无法连接的问题。</p><p>Mysql将ACL（也称为授权表）缓存在内存中。当用户尝试认证或运行命令时，Mysql会按照预定的顺序检查ACL的认证信息和权限。</p><p><strong>51、MYSQL支持事务吗？</strong></p><p>在缺省模式下，MYSQL是autocommit模式的，所有的数据库更新操作都会即时提交，所以在缺省情况下，mysql是不支持事务的。</p><p>但是如果你的MYSQL表类型是使用InnoDB Tables 或 BDB tables的话，你的MYSQL就可以使用事务处理,使用SET AUTOCOMMIT=0就可以使MYSQL允许在非autocommit模式，在非autocommit模式下，你必须使用COMMIT来提交你的更改，或者用ROLLBACK来回滚你的更改。</p><p><strong>示例如下：</strong></p><p>一</p><p>START TRANSACTION;</p><p>SELECT @A:=SUM(salary) FROM table1 WHERE type=1;</p><p>UPDATE table2 SET summmary=@A WHERE type=1;</p><p>COMMIT;</p><p><strong>52、 mysql里记录货币用什么字段类型好</strong></p><p>NUMERIC和DECIMAL类型被Mysql实现为同样的类型，这在SQL92标准允许。他们被用于保存值，该值的准确精度是极其重要的值，例如与金钱有关的数据。当声明一个类是这些类型之一时，精度和规模的能被(并且通常是)指定；</p><p>例如：</p><p>salary DECIMAL(9,2)</p><p>在这个例子中，9(precision)代表将被用于存储值的总的小数位数，而2(scale)代表将被用于存储小数点后的位数。</p><p>因此，在这种情况下，能被存储在salary列中的值的范围是从-9999999.99到9999999.99。在ANSI/ISO SQL92中，句法DECIMAL(p)等价于DECIMAL(p,0)。</p><p>同样，句法DECIMAL等价于DECIMAL(p,0)，这里实现被允许决定值p。Mysql当前不支持DECIMAL/NUMERIC数据类型的这些变种形式的任一种。</p><p>这一般说来不是一个严重的问题，因为这些类型的主要益处得自于明显地控制精度和规模的能力。</p><p>DECIMAL和NUMERIC值作为字符串存储，而不是作为二进制浮点数，以便保存那些值的小数精度。</p><p>一个字符用于值的每一位、小数点(如果scale&gt;0)和&quot;-&quot;符号(对于负值)。如果scale是0，DECIMAL和NUMERIC值不包含小数点或小数部分。</p><p>DECIMAL和NUMERIC值得最大的范围与DOUBLE一样，但是对于一个给定的DECIMAL或NUMERIC列，实际的范围可由制由给定列的precision或scale限制。</p><p>当这样的列赋给了小数点后面的位超过指定scale所允许的位的值，该值根据scale四舍五入。</p><p>当一个DECIMAL或NUMERIC列被赋给了其大小超过指定(或缺省的）precision和scale隐含的范围的值，Mysql存储表示那个范围的相应的端点值。</p><p>我希望本文可以帮助你提升技术水平。那些，感觉学的好难，甚至会令你沮丧的人，别担心，我认为，如果你愿意试一试本文介绍的几点，会向前迈进，克服这种感觉。这些要点也许对你不适用，但你会明确一个重要的道理：接受自己觉得受困这个事实是摆脱这个困境的第一步。</p><p><strong>53、MYSQL数据表在什么情况下容易损坏？</strong></p><p>服务器突然断电导致数据文件损坏。</p><p>强制关机，没有先关闭mysql 服务等。</p><h1 id="_54、mysql有关权限的表都有哪几个" tabindex="-1">54、mysql有关权限的表都有哪几个？ <a class="header-anchor" href="#_54、mysql有关权限的表都有哪几个" aria-label="Permalink to &quot;54、mysql有关权限的表都有哪几个？&quot;">​</a></h1><p>Mysql服务器通过权限表来控制用户对数据库的访问，权限表存放在mysql数据库里，由mysql_install_db脚本初始化。这些权限表分别user，db，table_priv，columns_priv和host。</p><h1 id="_55、mysql中有哪几种锁" tabindex="-1">55、Mysql中有哪几种锁？ <a class="header-anchor" href="#_55、mysql中有哪几种锁" aria-label="Permalink to &quot;55、Mysql中有哪几种锁？&quot;">​</a></h1><ul><li><p>MyISAM支持表锁，InnoDB支持表锁和行锁，默认为行锁</p></li><li><p>表级锁：开销小，加锁快，不会出现死锁。锁定粒度大，发生锁冲突的概率最高，并发量最低</p></li><li><p>行级锁：开销大，加锁慢，会出现死锁。锁力度小，发生锁冲突的概率小，并发度最高</p></li></ul>',179),g=[e];function M(T,a,A,I,y,q){return t(),l("div",null,g)}const u=p(E,[["render",M]]);export{L as __pageData,u as default};
