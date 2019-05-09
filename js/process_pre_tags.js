/*
	Has browser ignore leading tabs for <pre> code blocks.
	modified from: http://stackoverflow.com/a/8505182/4525897
*/
/*$('pre').html(function() {
    return this.innerHTML.replace(/&nbsp;&nbsp;&nbsp;&nbsp;/g, '\t');
});*/

var pre_elements = document.getElementsByTagName('pre');

for (var i = 0; i < pre_elements.length; i++)
{
	pre_elements = document.getElementsByTagName('pre');
	var content = pre_elements[i].innerHTML;

	/*content = content.replace(/    /g, '\t');*/

	var tabs_to_remove = '';
	while (content.indexOf('\t') == '0')
	{
		tabs_to_remove += '\t';
		content = content.substring(1);
	}

	var re = new RegExp('\n' + tabs_to_remove, 'g');
	content = content.replace(re, '\n');

	if(content.lastIndexOf("\n")>0) 
		content = content.substring(0, content.lastIndexOf("\n"));

	pre_elements[i].outerHTML = '<pre class="' + pre_elements[i].className + '">' + content + '</pre>';
}
