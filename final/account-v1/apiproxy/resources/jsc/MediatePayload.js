//write my javascript here!!
var responseContent = JSON.parse(context.getVariable("response.content"));

var myResult = {
	"_meta": {
		"count": responseContent.accounts.length
	},
	"accounts":[]
};

responseContent.accounts.forEach(function(account){
	myResult.accounts.push({
		"accountNumber":account.accountNumber,
		"balance": account.balance
	});
});

context.setVariable("response.content", JSON.stringify(myResult));
