/**
 * @NapiVersion 2.0
 * @NscriptType ClientScript
 */
define (['N/record' , 'N/log' , 'N/ui/dialog'] , function (record,log,dialog){

    function SalesOrderRevenue() {
        try {
            console.log("Button Clicked! ")
            var salesOrderId = Number(location.search.match(/id=([^&]+)/)[1])
            var salesOrder = record.load({
                type: record.Type.SALES_ORDER,
                id: salesOrderId,
                isDynamic: true
            })
            var linecount = salesOrder.getLineCount({ sublistId: 'item'})
            var totalrevenue = 0
            for (var i = 0 ; i < linecount ; i++){
                var revenueAmount = salesOrder.getSublistValue({
                    sublistId: 'item',
                    fieldId: 'amount',
                    line: i
                })
                log.debug('amount: ' , revenueAmount)
                totalrevenue += revenueAmount
                 
            }
            dialog.alert({
                title: "Revenue",
                message: "Total Revenue: " + totalrevenue
            })
        }
        catch(error){
            log.error({
                title: error.title,
                details: error.message
            })
        }
    }

    function pageInit(context){

    }
    return {
        pageInit : pageInit,
        SalesOrderRevenue : SalesOrderRevenue
    }
})