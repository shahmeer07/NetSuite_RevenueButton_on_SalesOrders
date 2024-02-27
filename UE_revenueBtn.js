/**
 * @NapiVersion 2.0
 * @NScriptType UserEventScript
 */

define (['N/log' , 'N/runtime' , 'N/ui/serverWidget'] , function (log,runtime,serverWidget){

    function beforeLoad(context){
        try {
            if (context.type === context.UserEventType.VIEW){
                currentuser = runtime.getCurrentUser()
                if (currentuser.role !== 2 && currentuser.role !== 3 ){
                    return 
                }
                var form = context.form
                form.addButton({
                    id: 'custpage_revenueButton',
                    label: 'Revenue',
                    functionName: 'SalesOrderRevenue()'
                })
                form.clientScriptModulePath = 'SuiteScripts/Shahmeer/CS_revenueBtn.js'
        }
        }
        catch(error){
            log.error({
                title: error.title,
                details: error.message
            })
        }
    }
    return {
        beforeLoad : beforeLoad
    }
})