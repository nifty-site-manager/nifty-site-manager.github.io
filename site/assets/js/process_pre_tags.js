/*
	Has browser ignore leading tabs for <pre> code blocks.
	modified from: http://stackoverflow.com/a/8505182/4525897
*/
var pre_elements = document.getElementsByTagName('pre');
for (var i = 0; i < pre_elements.length; i++)
{
	var content = pre_elements[i].innerHTML;

	var tabs_to_remove = '';
	while(content.indexOf('\t') == '0' || content.substring(0, 4) == "    ")
	{
		if(content.indexOf('\t') == '0')
		{
			tabs_to_remove += '\t';
			content = content.substring(1);
		}
		else
		{
			tabs_to_remove += "    ";
			content = content.substring(4);
		}
	}

	var re = new RegExp('\n' + tabs_to_remove, 'g');
	content = content.replace(re, '\n');

	if(content.lastIndexOf("\n")>0) 
		content = content.substring(0, content.lastIndexOf("\n"));

	pre_elements[i].outerHTML = '<pre class="' + pre_elements[i].className + '">' + content + '</pre>';
}
