var numbers =["one","two","three","four"];
b=numbers.filter( function maxlength(number)
{
	if(number.length>3)
	{
		return number;
	}
})

document.write(b);