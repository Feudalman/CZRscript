/**
 * 将问卷脚本封装为QuestionnaireScript对象
 */
var QuestionnaireScript = {}

/**
 * @introduce 问卷脚本的配置项，需要加载哪儿些题目，哪些选项，请都在这里配置
 * @param {Number} index 题号
 * @param {Number} type 题目类型 [1-单选，2-多选，3-填空]
 * @param {Array} option 需要选中的选项，索引从1开始，例：需要选择第一个选项即填写[1]，需要选择第一第二个则填写[1,2]
 */
QuestionnaireScript.scriptConfig = [
    {
        index: 1,
        type: 1,
        option: [1]
    },
    {
        index: 2,
        type: 1,
        option: [1]
    },
    {
        index: 4,
        type: 1,
        option: [1]
    },
    {
        index: 5,
        type: 1,
        option: [1]
    },
    {
        index: 6,
        type: 1,
        option: [1]
    },
    {
        index: 7,
        type: 2,
        option: [1]
    },
    {
        index: 8,
        type: 2,
        option: [1]
    },
    {
        index: 9,
        type: 1,
        option: [1]
    },
    {
        index: 10,
        type: 1,
        option: [1]
    },
    {
        index: 11,
        type: 2,
        option: [1]
    },
    {
        index: 12,
        type: 2,
        option: [1]
    },
    {
        index: 13,
        type: 1,
        option: [1]
    },
    {
        index: 14,
        type: 2,
        option: [1]
    },
    {
        index: 15,
        type: 2,
        option: [1]
    },
    {
        index: 16,
        type: 2,
        option: [1]
    },
    {
        index: 17,
        type: 2,
        option: [1]
    },
    {
        index: 18,
        type: 2,
        option: [1]
    },
    {
        index: 19,
        type: 2,
        option: [1]
    },
    {
        index: 20,
        type: 2,
        option: [1]
    }
]


/**
 * @introduce 选中选项或完成填空
 * @param {Object} const ID 选项标签的ID头
 * @param {Object} const conf 当前题目的配置信息
 */
QuestionnaireScript.checked = function (ID, conf) {
    for (let j = 0; j < conf.option.length; j++) {
        $(ID + conf.option[j]).attr("checked", "checked");
    }
}

QuestionnaireScript.fillInQuestionnaire = function () {
    const conf = this.scriptConfig;
    // 根据配置项循环
    for (let i = 0; i < this.scriptConfig.length; i++) {
        const ID = "#q" + conf[i].index + "_";
        this.checked(ID, conf[i]);
    }
}


QuestionnaireScript.fillInQuestionnaire();

setTimeout(() => {
    $('#ctlNext').trigger('click');
}, 500);

setTimeout(function(){
    window.location.href = "https://www.wjx.cn/vm/eThSaVo.aspx";
    console.log("CZR")
},500)