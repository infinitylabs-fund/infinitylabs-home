const formValidation = {
    // 手机号验证
    checkMobile: (rule, value, callback, isRequired) => {
        if (isRequired || value) {
            let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if (!reg.test(value)) {
                callback(new Error('手机号格式错误'));
            } else {
                callback()
            }
        } else {
            callback()
        }
    },
    // 邮箱验证
    checkEmail: (rule, value, callback, isRequired) => {
        let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        if (isRequired || value) {
            if (!reg.test(value)) {
                callback(new Error("email format error"));
            } else {
                callback()
            }
        } else {
            callback()
        }

    },
    // 0-100整数小数验证
    checkNum100: (rule, value, callback) => {
        let reg = /(^(\d|[1-9]\d)(\.\d{1,})?$)|(^100$)/;
        if (!reg.test(value)) {
            callback(new Error("请输入0-100的整数和小数"));
        } else {
            callback()
        }
    },
    // 数字验证
    checkNumber: (rule, value, callback) => {
        let reg = /^(?!(0[0-9]{0,}$))[0-9]{1,}[.]{0,1}[0-9]{0,}$/;
        if (!reg.test(value)) {
            callback(new Error("请输入大于0的整数或小数"));
        } else {
            callback()
        }
    },
    // 账号验证
    checkAccount: (rule, value, callback) => {
        let reg = /^(?![^a-zA-Z]+$)(?!\D+$)|[a-zA-Z]+$/;
        if (!reg.test(value)) {
            callback(new Error("账号由英文或英文与数字的组成"));
        } else {
            callback()
        }
    },
    // 密码验证
    checkPassword: (rule, value, callback) => {
        let reg = /^(?![^a-zA-Z]+$)(?!\D+$)/;
        if (!reg.test(value)) {
            callback(new Error("密码必须是英文数字组合"));
        } else {
            callback()
        }
    },
}
export default formValidation