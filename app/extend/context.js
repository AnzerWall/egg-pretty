'use strict';

/**
 * Created by anzer on 2017/2/10.
 */
const util=require('util');
const is=require('is-type-of');
const not=require('not-type-of');

module.exports={
    success(data, message,...args) {
        const{ response:res,app}= this;
        const config=app.config.pretty;
        res.status = 200;
        res.type = "application/json";
        if(not.string(message)){
            if(config.i18n){
                message=this.gettext("messages.0",...args)
                if(message===`messages.0`){
                    message="";
                }
            }else{
                message=util.format(config.messages[0],...args);
            }
        }
        message=message||'success';

        res.body = {
            code: 0,
            message: message,
            data: data
        };
    },

    fail(error, code, ...args) {
        if (is.number(error)) {
            args = code ? [code, ...args] : args;
            code = error;
            error = undefined;
        }
        const {response:res,app}=this;
        const config=app.config.pretty;
        let message="";
        if(config.i18n){
            message=this.gettext(`messages.${code}`,...args)
            if(message===`messages.${code}`){
                message="";
            }
        }else{
            message=util.format(config.messages[code],...args);
        }
        message = message || "Unknown Error Code";
        let result = {
            code: code,
            message: message
        };
        if(app.config.env!="production"){
            result.error=error;
        }
        res.status = 200;
        res.type = "application/json";
        res.body = result;
    }

}