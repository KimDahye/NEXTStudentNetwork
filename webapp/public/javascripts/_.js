_ = {
	template : function(templateString){
		var templateStr = templateString;
		return function(dataDict){
	        var resultStr = templateStr;
	        for (var variableName in dataDict) {
	            if (dataDict[variableName]===0||dataDict[variableName]) {
	            	var reg = "<T= "+variableName+" T>"
	                resultStr = resultStr.replace(RegExp(reg, "gm"), dataDict[variableName]);
	            }
	        }
			return resultStr;
		}
	}
};