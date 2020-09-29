import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    b4: [
      [{
        "subject": "如果让一个元素在pc端显示而在手机端隐藏，下列选项正确的是?",
        "item": ["visible-xs-8  hidden-md", "visible-md-8 hidden-xs", "visible-md-8 hidden-sm", "visible-sm-8 hidden-md"],
        "answer": "B"
      }, {
        "subject": "在bootstrap中，下列的哪个类可以使一个元素在打印使隐藏?",
        "item": ["visible-print-block",
          "visible-print-inline",
          "hidden-print",
          "print-hidden"
        ],
        "answer": "C"
      }, {
        "subject": "在bootstrap中，下面哪个是错误的媒体查询的写法?",
        "item": ["@media all and (min-width:1024px) { };",
          "@media all and (min-width:640px) and (max-width:1023px) { };",
          "@media all and (min-width:320px) or (max-width:639px) { };",
          "@media screen and (min-width:320px) and (max-width:639px) { };"
        ],
        "answer": "C"
      }, {
        "subject": "下列哪个不是正确的辅助类?",
        "item": [".text-muted", ".text-danger", ".tex-success", ".text-title"],
        "answer": "D"
      }, {
        "subject": "在bootstrap中，关于弹性布局的属性错误的是?",
        "item": ["flex", "flex-direction", "justify-content", "flex-container"],
        "answer": "D"
      }, {
        "subject": "在bootstrap中，关于flex-direction属性值错误的是?",
        "item": ["col", "row", "row-reverse", "column-reverse"],
        "answer": "A"
      }, {
        "subject": "在bootstrap中，关于flex-wrap属性值错误的是?",
        "item": ["nowrap", "colwrap", "wrap", "wrap-reverse"],
        "answer": "B"
      }, {
        "subject": "在bootstrap中，关于justify-content属性值错误的是?",
        "item": ["flex-start", "flex-end", "middle", "space-between"],
        "answer": "C"
      }, {
        "subject": "在bootstrap中，关于align-items属性值错误的是?",
        "item": ["flex-start", "flex-end", "center", "underline"],
        "answer": "D"
      }, {
        "subject": "在bootstrap中，哪个不是媒体查询类型的值?",
        "item": ["all", "speed", "handheld", "print"],
        "answer": "B"
      }],

      [{
        "subject": "关于bootstrap的布局容器说法正确的有(多选)",
        "item": [".container 类用于固定宽度并支持响应式布局的容器",
          ".container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器",
          ".container和.container-fluid可以互相嵌套",
          "布局容器仅提供了.container和.container-fluid两种容器"
        ],
        "answer": "AB"
      }, {
        "subject": "如果想要绘制带边框的条纹状的表格需要添加的类有?(多选)",
        "item": ["table-condensed", "table-hover", "table-bordered", "table-striped"],
        "answer": "CD"
      }, {
        "subject": "下列关于栅格系统说法正确的有?(多选)",
        "item": ["栅格系统每一行不能少于12列", "通过行row在水平方向创建一组列column",
          "行row必须包含在.container固定宽度或.container-fluid（100% 宽度）中，以便为其赋予合适的排列aligment和内补padding",
          "如果一行row中包含了的列column大于12，多余的列column所在的元素将被作为一个整体另起一行"
        ],
        "answer": "BCD"
      }, {
        "subject": "Bootstrap有哪些关于<img>的class？(多选)",
        "item": [".img-rounded 为图片添加圆角", ".img-circle 将图片变为圆形",
          ".img-thumbnail 缩略图功能", ".img-responsive 添加圆角边框"
        ],
        "answer": "AB"
      }, {
        "subject": "Bootstrap中有关元素浮动及清除浮动的class？(多选)",
        "item": ["class='pull-left'元素浮动到左边", "class='pull-right'元素浮动到右边", "class='clearfix'清除浮动", "class='pull-top'元素浮动到上边"],
        "answer": "ABC"
      }, {
        "subject": "下列哪些是辅助类?(多选)",
        "item": ["text-danger ", "text-primary ", "text-info ", "text-danger "],
        "answer": "ABCD"
      }],

      [{
        "subject": "Bootstrap 插件全部依赖于JQuery",
        "item": ["T", "F"],
        "answer": "T"
      }, {
        "subject": "栅格系统小屏幕使用的类前缀是.col-md-",
        "item": ["T", "F"],
        "answer": "F"
      }, {
        "subject": ".col-md-offset-*可以实现列偏移",
        "item": ["T", "F"],
        "answer": "T"
      }, {
        "subject": "表单元素要加上form-control ，才能给表单添加圆角属性和阴影效果",
        "item": ["T", "F"],
        "answer": "T"
      }]
    ],
    css: [
      [{
          "subject": "CSS 指的是？",
          "item": ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
          "answer": "B"
        },

        {
          "subject": "在以下的 HTML 中，哪个是正确引用外部样式表的方法？",
          "item": ["<style src='mystyle.css'>", "<link rel='stylesheet' type='text/css' href='mystyle.css'", "<stylesheet>mystyle.css</stylesheet>"],
          "answer": "B"
        },

        {
          "subject": "在 HTML 文档中，引用外部样式表的正确位置是？",
          "item": ["文档的末尾", "文档的顶部", "<body>部分", "<head>部分"],
          "answer": "D"
        },

        {
          "subject": "哪个 HTML 标签用于定义内部样式表？",
          "item": ["<style>", "<script>", "<css>"],
          "answer": "A"
        },

        {
          "subject": "哪个 HTML 属性可用来定义内联样式？",
          "item": ["font", "class", "styles", "style"],
          "answer": "D"
        },

        {
          "subject": "下列哪个选项的 CSS 语法是正确的？",
          "item": ["body:color=black", "{body:color=black(body}", "body {color: black}", "{body;color:black}"],
          "answer": "C"
        },

        {
          "subject": "如何在 CSS 文件中插入注释？",
          "item": ["//this is a comment", "//this is a comment //", "/* this is a comment */", "'this is a comment"],
          "answer": "C"
        }
      ],


      [{
          "subject": "请判断以下说法是否正确：如需定义元素内容与边框间的空间，可使用 padding 属性，并可使用负值？",
          "item": ["正确", "错误"],
          "answer": "B"
        },
        {
          "subject": "font-size可以控制文本尺寸",
          "item": ["正确", "错误"],
          "answer": "A"
        },
        {
          "subject": "color可以改变某个元素的文本颜色",
          "item": ["正确", "错误"],
          "answer": "A"
        },
        {
          "subject": "style可以定义HTML内联样式",
          "item": ["正确", "错误"],
          "answer": "A"
        }
      ],



      [{
          "subject": "以下说法错误的是（多选）",
          "item": ["如需定义元素内容与边框间的空间，可使用 padding 属性", "font-size可以控制文本尺寸", "font-size不可以控制文本尺寸"],
          "answer": "AC"
        },
        {
          "subject": "以下说法正确的是（多选）",
          "item": ["margin-left 可以改变元素的左边距", "text-transform:capitalize可以使文本首字母大写", "font-size可以控制文本尺寸"],
          "answer": "ABC"
        },
        {
          "subject": "以下说法错误的是（多选）",
          "item": ["background-color不可用于改变背景颜色", "color可以改变文本颜色", "font-size不可以控制文本尺寸"],
          "answer": "AC"
        }
      ]
    ],
    html5: [{
        "id": "1",
        "subject": "下列标签中,用于设置下标的标签是?",
        "item": ["sub", "sup", "font"],
        "answer": "A"
      },
      {
        "id": "2",
        "subject": "用于网页中创建表单的标签是?",
        "item": ["<input>", "<button>", "<form>"],
        "answer": "C"
      },
      {
        "id": "3",
        "subject": "下列属性中,不属于块状标签的是?",
        "item": ["<h1>", "<span>", "<p>"],
        "answer": "B"
      },
      {
        "id": "4",
        "subject": "在HTML中,不属于HTML文档基本组成部分的是?",
        "item": ["<style></style>", "<body><body>", "<head></head>"],
        "answer": "A"
      },
      {
        "id": "5",
        "subject": "下列属性中,可用于段落文本缩进的是?",
        "item": ["text-align", "text-indent", "font-indent"],
        "answer": "B"
      },


      {
        "id": "6",
        "subject": "ID 选择器类与类选择器完全相同.",
        "item": ["对", "错"],
        "answer": "B"
      },
      {
        "id": "7",
        "subject": "CSS 框模型 规定了元素框处理元素颜色、内边距、边框 和 外边距 的方式.",
        "item": ["对", "错"],
        "answer": "B"
      },
      {
        "id": "8",
        "subject": "表单元素中,包含那两个重要的组成部分.",
        "item": ["Wed页", "表单样式", "表单处理程序"],
        "answer": "AC"
      },
      {
        "id": "9",
        "subject": "表单是用于什么之间实现交流和传递的桥梁.",
        "item": ["Web_页面", "Web_浏览器", "Web_服务器"],
        "answer": "BC"
      },
      {
        "id": "10",
        "subject": "网页中,三种最基本的页面组成元素是.",
        "item": ["文字", "图形", "超链接"],
        "answer": "ABC"
      }
    ],
    javascript: [
      [{
        "subject": "以下哪条语句会产生运行错误：",
        "item": ["var obj = ( );", "var obj = [ ]", "var obj = [ ]", "var obj = / /;"],
        "answer": "A"
      }, {
        "subject": "以下哪个单词不属于javascript保留字：",
        "item": ["with", "parent", "class", "void"],
        "answer": "B"
      }, {
        "subject": "请选择结果为真的表达式：",
        "item": ["null instanceof Object", "null === undefined", "null == undefined", "NaN == NaN"],
        "answer": "C"
      }, {
        "subject": "我们可以在下列哪个HTML元素中放置JavaScript代码",
        "item": ["<script>", "<JavaScript>", "<js>", "<scripting>"],
        "answer": "A"
      }, {
        "subject": "预测以下代码片段的输出结果：var str； alert（typeof str）",
        "item": ["string", "undefined", "object", "String"],
        "answer": "B"
      }, {
        "subject": "下列哪个不是JavaScript中注释的正确写法：",
        "item": ["<!--....-->", "//.....", "/*....*/"],
        "answer": "A"
      }, {
        "subject": "以下哪项不属于JavaScript的特征？",
        "item": ["JavaScript是一种脚本语言", "JavaScript是事件驱动的", "JavaScript代码需要编译以后才能执行", "JavaScript是独立于平台的"],
        "answer": "C"
      }, {
        "subject": "1.JavaScript是弱类型语言；2.JavaScript的常用类型包括：int，string，boolean",
        "item": ["1正确，2错误", "1错误，2正确", "两个都正确", "两个都错误"],
        "answer": "A"
      }, {
        "subject": "在JavaScript中，需要声明一个整数类型的变量num，以下哪个语句能实现上述要求？",
        "item": ["int num", "number num", "var num", "Integer num"],
        "answer": "C"
      }, {
        "subject": "关于JavaScript中数组的说法中，不正确的是：",
        "item": ["数组长度必须在创建时给定，之后不能改变", "由于数组是对象，因此创建数组需要使用new运算符", "数组可以在声明的同时进行初始化", "数组内元素的类型可以不同"],
        "answer": "A"
      }],

      [{
        "subject": "以下哪些函数式Math对象的(多选)",
        "item": ["random", "rnd(7.25)", "round(1.5)", "max(1.2)"],
        "answer": "ACD"
      }, {
        "subject": "以下哪些属于数组的方法(多选)",
        "item": ["join()", "reverse()", "sort()", "concat()"],
        "answer": "ABCD"
      }, {
        "subject": "下面哪些属于bom中的对象?(多选)",
        "item": ["window", "screen", "History", "Location"],
        "answer": "ABCD"
      }, {
        "subject": "在页面中用于获取标签元素的方法是(多选)",
        "item": ["document.getElementById()", "document.getElementsByTagName()", "document.getElementsByName()",
          "document.getElementByName()"
        ],
        "answer": "ABC"
      }, {
        "subject": "以下哪些属于JavaScript的字符串对象的方法(多选)",
        "item": ["length()", "split()", "charAt()", "indexOf()"],
        "answer": "BCD"
      }, {
        "subject": "在JavaScript的DOM中向一个节点中添加另一个节点方法的是(多选)",
        "item": ["appendChild()", "insertBefore()", "insertAfter()", "appendToChild()"],
        "answer": "AB"
      }],

      [{
        "subject": "在JavaScript中可以用十六进制形式表示浮点数常量",
        "item": ["T", "F"],
        "answer": "B"
      }, {
        "subject": "空字符串(“”)也是字符串常量",
        "item": ["T", "F"],
        "answer": "A"
      }, {
        "subject": "在定义JavaScript变量时，一定要指出变量名和值。",
        "item": ["T", "F"],
        "answer": "B"
      }, {
        "subject": "用var定义一个变量后，如果没有赋予任何值，那么它的值是空值，即null.",
        "item": ["T", "F"],
        "answer": "B"
      }]
    ],
    java: [
      [{
        "subject": "JAVA所定义的版本中不包括?",
        "item": ["JAVA2 EE", "JAVA2 Card", "JAVA2 ME", "JAVA2 HE", "JAVA2 SE"],
        "answer": "D"
      }, {
        "subject": "关于Java编译，下面哪一个正确?",
        "item": ["Java程序经编译后产生machine code", "Java程序经编译后会生产byte code", "Java程序经编译后会产生DLL", "以上都不正确"],
        "answer": "B"
      }, {
        "subject": "下列说法正确的有?",
        "item": ["class中的construtor不可省略", "construtor与class同名，但方法不能与class同名", "construtor在一个对象被new时执行",
          "一个class只能定义一个construtor"
        ],
        "answer": "C"
      }, {
        "subject": "Java中接口的修饰符可以为?",
        "item": ["private", "protected", "final", "abstract"],
        "answer": "D"
      }, {
        "subject": "下列关于关键字的使用说法错误的是?",
        "item": ["abstract不能与final并列修饰同一个类", "abstract类中可以有private的成员", "abstract方法必须在abstract类中", "static方法能处理非static的属性"],
        "answer": "D"
      }, {
        "subject": "下列哪些语句关于内存回收的说法是正确的?",
        "item": ["程序员必须创建一个线程来释放内存", "内存回收程序负责释放无用内存", "内存回收程序允许程序员直接释放内存", "内存回收程序可以在指定的时间释放内存对象"],
        "answer": "B"
      }, {
        "subject": "ArrayList list=new ArrayList(20);中的list扩充几次?",
        "item": ["0", "1", "2", "3"],
        "answer": "A"
      }, {
        "subject": "List、Set、Map哪个继承自Collection接口，以下说法正确的是?",
        "item": ["List Map", "Set Map", "List Set", "List Map Set"],
        "answer": "C"
      }, {
        "subject": "下面哪个流类属于面向字符的输入流?",
        "item": ["BufferedWriter", "FileInputStream", "ObjectInputStream", "InputStreamReader"],
        "answer": "D"
      }, {
        "subject": "下面关于 Java.lang.Exception类的说法正确的是?",
        "item": ["继承自 Throwable", "不支持Serializable", "继承自 AbstractSet", "继承自 AbstractSet"],
        "answer": "A"
      }],

      [{
        "subject": "选出合理的标识符(多选)",
        "item": ["_sysl_111", "2 mail", "$change", "class"],
        "answer": "AC"
      }, {
        "subject": "下面所述步骤中，是创建进程做必须的步骤是?(多选)",
        "item": ["由调度程序为进程分配CPU", "建立一个进程控制块", "为进程分配内存", "为进程分配文件描述符"],
        "answer": "BC"
      }, {
        "subject": "下面那些声明是合法的?(多选)",
        "item": ["long l = 4990", "int i = 4L", "float f = 1.1", "double d = 34.4"],
        "answer": "AD"
      }, {
        "subject": "以下选项中选择正确的java表达式(多选)",
        "item": ["int k=new String(“aa”)", "String str = String(“bb”)", "char c=74", "long j=8888"],
        "answer": "CD"
      }, {
        "subject": "以下哪些运算符是含有短路运算机制的?(多选)",
        "item": ["&", "&&", "|", "||"],
        "answer": "BD"
      }, {
        "subject": "下面哪个函数是public void example(){....}的重载函数?(多选)",
        "item": ["private void example（int m）{...}", " public int example（）{...}", " public void example2（）{...}",
          "public int example（int m.float f）{...}"
        ],
        "answer": "AD"
      }],

      [{
        "subject": "数组也是对象",
        "item": ["T", "F"],
        "answer": "A"
      }, {
        "subject": "一个数组可以存放不同类型的数值",
        "item": ["T", "F"],
        "answer": "B"
      }, {
        "subject": "Object是Java中所有类的共同父类",
        "item": ["T", "F"],
        "answer": "A"
      }, {
        "subject": "java语言中不用区分字母的大写小写",
        "item": ["T", "F"],
        "answer": "B"
      }]
    ],
    users: [{
        username: "123",
        password: "123",
      },
      {
        username: "456",
        password: "123",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {}
})