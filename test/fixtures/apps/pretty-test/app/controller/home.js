/**
 * Created by anzer on 2017/2/28.
 */
const codes=require('../../config/codes');
module.exports=app=>{
    return class Home extends app.Controller{
        *s(){
            return this.ctx.success('test');
        }
        *f(){
            return this.ctx.fail(codes.FAIL);
        }
    }
}