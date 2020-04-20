var pre_blocks = document.getElementsByTagName("pre");
var pre_blocks_txt = [];

function load() 
{
    var img = new Image();
    var cpsrc = "images/copy.png";
    var depth = 0;

    img.onload = function()
    {
    	for(var i=0; i<pre_blocks.length; i++)
		{
			//alert(pre_blocks[i].innerHTML);
			if(pre_blocks[i].innerHTML[pre_blocks[i].innerHTML.length-1] == '\n')
				pre_blocks[i].innerHTML = pre_blocks[i].innerHTML.substring(0, pre_blocks[i].innerHTML.length-1);
			pre_blocks_txt.push(pre_blocks[i].innerHTML);

			pre_blocks[i].innerHTML = pre_blocks[i].innerHTML + "<noselect><cpbutton onclick='copy_pre_block(" + i + ")'><img src='" + img.src + "' width='25px' style='vertical-align:middle'></cpbutton></noselect>";
		}
    }; 
    img.onerror = function()
    {
    	if(++depth > 15)
    		return;
    	cpsrc = "../" + cpsrc;
    	img.src = cpsrc;
    };

    img.src = cpsrc;
}

load();

function copy_pre_block(i)
{
	/*alert(pre_blocks_txt[i]);*/
	var textArea = document.createElement("textarea");
	textArea.value = pre_blocks_txt[i];

	textArea.style.position = "fixed";
	textArea.style.bottom = "-30px";
	textArea.style.right = "-30px";
	textArea.style.width = "0px";
	textArea.style.height = "0px";

	document.body.appendChild(textArea);
	textArea.select();
	textArea.setSelectionRange(0, 99999); /*For mobile devices*/
	document.execCommand("copy");
	textArea.style.visibility = "hidden";
}
