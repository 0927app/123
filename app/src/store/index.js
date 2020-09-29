import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        b4: [{
                "id": "1",
                "subject": "如果让一个元素在pc端显示而在手机端隐藏，下列选项正确的是?",
                "item": ["visible-xs-8  hidden-md", "visible-md-8 hidden-xs", "visible-md-8 hidden-sm", "visible-sm-8 hidden-md"],
                "answer": "B"
            }, {
                "id": "2",
                "subject": "在bootstrap中，下列的哪个类可以使一个元素在打印使隐藏?",
                "item": ["visible-print-block",
                    "visible-print-inline",
                    "hidden-print",
                    "print-hidden"
                ],
                "answer": "C"
            }, {
                "id": "3",
                "subject": "在bootstrap中，下面哪个是错误的媒体查询的写法?",
                "item": ["@media all and (min-width:1024px) { };",
                    "@media all and (min-width:640px) and (max-width:1023px) { };",
                    "@media all and (min-width:320px) or (max-width:639px) { };",
                    "@media screen and (min-width:320px) and (max-width:639px) { };"
                ],
                "answer": "C"
            }, {
                "id": "4",
                "subject": "下列哪个不是正确的辅助类?",
                "item": [".text-muted", ".text-danger", ".tex-success", ".text-title"],
                "answer": "D"
            }, {
                "id": "5",
                "subject": "在bootstrap中，关于弹性布局的属性错误的是?",
                "item": ["flex", "flex-direction", "justify-content", "flex-container"],
                "answer": "D"
            }, {
                "id": "6",
                "subject": "在bootstrap中，关于flex-direction属性值错误的是?",
                "item": ["col", "row", "row-reverse", "column-reverse"],
                "answer": "A"
            }, {
                "id": "7",
                "subject": "在bootstrap中，关于flex-wrap属性值错误的是?",
                "item": ["nowrap", "colwrap", "wrap", "wrap-reverse"],
                "answer": "B"
            },
            {
                "id": "8",
                "subject": "关于bootstrap的布局容器说法正确的有(多选)",
                "item": [".container 类用于固定宽度并支持响应式布局的容器",
                    ".container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器",
                    ".container和.container-fluid可以互相嵌套",
                    "布局容器仅提供了.container和.container-fluid两种容器"
                ],
                "answer": "AB"
            }, {
                "id": "9",
                "subject": "如果想要绘制带边框的条纹状的表格需要添加的类有?(多选)",
                "item": ["table-condensed", "table-hover", "table-bordered", "table-striped"],
                "answer": "CD"
            }, {
                "id": "10",
                "subject": "下列关于栅格系统说法正确的有?(多选)",
                "item": ["栅格系统每一行不能少于12列", "通过行row在水平方向创建一组列column",
                    "行row必须包含在.container固定宽度或.container-fluid（100% 宽度）中，以便为其赋予合适的排列aligment和内补padding",
                    "如果一行row中包含了的列column大于12，多余的列column所在的元素将被作为一个整体另起一行"
                ],
                "answer": "BCD"
            },


        ],
        css: [{
                "id": "1",
                "subject": "CSS 指的是？",
                "item": ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
                "answer": "B"
            },

            {
                "id": "2",
                "subject": "在以下的 HTML 中，哪个是正确引用外部样式表的方法？",
                "item": ["<style src='mystyle.css'>", "<link rel='stylesheet' type='text/css' href='mystyle.css'", "<stylesheet>mystyle.css</stylesheet>"],
                "answer": "B"
            },

            {
                "id": "3",
                "subject": "在 HTML 文档中，引用外部样式表的正确位置是？",
                "item": ["文档的末尾", "文档的顶部", "<body>部分", "<head>部分"],
                "answer": "D"
            },

            {
                "id": "4",
                "subject": "哪个 HTML 标签用于定义内部样式表？",
                "item": ["<style>", "<script>", "<css>"],
                "answer": "A"
            },

            {
                "id": "5",
                "subject": "哪个 HTML 属性可用来定义内联样式？",
                "item": ["font", "class", "styles", "style"],
                "answer": "D"
            },

            {
                "id": "6",
                "subject": "下列哪个选项的 CSS 语法是正确的？",
                "item": ["body:color=black", "{body:color=black(body}", "body {color: black}", "{body;color:black}"],
                "answer": "C"
            },

            {
                "id": "7",
                "subject": "如何在 CSS 文件中插入注释？",
                "item": ["//this is a comment", "//this is a comment //", "/* this is a comment */", "'this is a comment"],
                "answer": "C"
            },



            {
                "id": "8",
                "subject": "以下说法错误的是（多选）",
                "item": ["如需定义元素内容与边框间的空间，可使用 padding 属性", "font-size可以控制文本尺寸", "font-size不可以控制文本尺寸"],
                "answer": "AC"
            },
            {
                "id": "9",
                "subject": "以下说法正确的是（多选）",
                "item": ["margin-left 可以改变元素的左边距", "text-transform:capitalize可以使文本首字母大写", "font-size可以控制文本尺寸"],
                "answer": "ABC"
            },
            {
                "id": "10",
                "subject": "以下说法错误的是（多选）",
                "item": ["background-color不可用于改变背景颜色", "color可以改变文本颜色", "font-size不可以控制文本尺寸"],
                "answer": "AC"
            }

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
        javascript: [{
                "id": "1",
                "subject": "以下哪条语句会产生运行错误：",
                "item": ["var obj = ( );", "var obj = [ ]", "var obj = [ ]", "var obj = / /;"],
                "answer": "A"
            }, {
                "id": "2",
                "subject": "以下哪个单词不属于javascript保留字：",
                "item": ["with", "parent", "class", "void"],
                "answer": "B"
            }, {
                "id": "3",
                "subject": "请选择结果为真的表达式：",
                "item": ["null instanceof Object", "null === undefined", "null == undefined", "NaN == NaN"],
                "answer": "C"
            }, {
                "id": "4",
                "subject": "我们可以在下列哪个HTML元素中放置JavaScript代码",
                "item": ["<script>", "<JavaScript>", "<js>", "<scripting>"],
                "answer": "A"
            }, {
                "id": "5",
                "subject": "预测以下代码片段的输出结果：var str； alert（typeof str）",
                "item": ["string", "undefined", "object", "String"],
                "answer": "B"
            }, {
                "id": "6",
                "subject": "下列哪个不是JavaScript中注释的正确写法：",
                "item": ["<!--....-->", "//.....", "/*....*/"],
                "answer": "A"
            }, {
                "id": "7",
                "subject": "以下哪项不属于JavaScript的特征？",
                "item": ["JavaScript是一种脚本语言", "JavaScript是事件驱动的", "JavaScript代码需要编译以后才能执行", "JavaScript是独立于平台的"],
                "answer": "C"
            },
            {
                "id": "8",
                "subject": "以下哪些函数式Math对象的(多选)",
                "item": ["random", "rnd(7.25)", "round(1.5)", "max(1.2)"],
                "answer": "ACD"
            }, {
                "id": "9",
                "subject": "以下哪些属于数组的方法(多选)",
                "item": ["join()", "reverse()", "sort()", "concat()"],
                "answer": "ABCD"
            }, {
                "id": "10",
                "subject": "以下哪些函数式Math对象的(多选)",
                "item": ["random", "rnd(7.25)", "round(1.5)", "max(1.2)"],
                "answer": "ACD"
            }



        ],
        java: [{
                "id": "1",
                "subject": "JAVA所定义的版本中不包括?",
                "item": ["JAVA2 EE", "JAVA2 Card", "JAVA2 ME", "JAVA2 HE"],
                "answer": "D"
            }, {
                "id": "2",
                "subject": "关于Java编译，下面哪一个正确?",
                "item": ["Java程序经编译后产生machine code", "Java程序经编译后会生产byte code", "Java程序经编译后会产生DLL", "以上都不正确"],
                "answer": "B"
            }, {
                "id": "3",
                "subject": "下列说法正确的有?",
                "item": ["class中的construtor不可省略", "construtor与class同名，但方法不能与class同名", "construtor在一个对象被new时执行",
                    "一个class只能定义一个construtor"
                ],
                "answer": "C"
            }, {
                "id": "4",
                "subject": "Java中接口的修饰符可以为?",
                "item": ["private", "protected", "final", "abstract"],
                "answer": "D"
            }, {
                "id": "5",
                "subject": "下列关于关键字的使用说法错误的是?",
                "item": ["abstract不能与final并列修饰同一个类", "abstract类中可以有private的成员", "abstract方法必须在abstract类中", "static方法能处理非static的属性"],
                "answer": "D"
            }, {
                "id": "6",
                "subject": "下列哪些语句关于内存回收的说法是正确的?",
                "item": ["程序员必须创建一个线程来释放内存", "内存回收程序负责释放无用内存", "内存回收程序允许程序员直接释放内存", "内存回收程序可以在指定的时间释放内存对象"],
                "answer": "B"
            }, {
                "id": "7",
                "subject": "ArrayList list=new ArrayList(20);中的list扩充几次?",
                "item": ["0", "1", "2", "3"],
                "answer": "A"
            }, {
                "id": "8",
                "subject": "List、Set、Map哪个继承自Collection接口，以下说法正确的是?",
                "item": ["List Map", "Set Map", "List Set", "List Map Set"],
                "answer": "C"
            }, {
                "id": "9",
                "subject": "下面哪个流类属于面向字符的输入流?",
                "item": ["BufferedWriter", "FileInputStream", "ObjectInputStream", "InputStreamReader"],
                "answer": "D"
            }, {
                "id": "10",
                "subject": "下面关于 Java.lang.Exception类的说法正确的是?",
                "item": ["继承自 Throwable", "不支持Serializable", "继承自 AbstractSet", "继承自 AbstractSet"],
                "answer": "A"
            },


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