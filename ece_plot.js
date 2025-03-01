var x = []

var y = []

function crtinp()
{	
	//creating input tags
	
	var inputDiv = document.getElementById("inputdiv");
	inputDiv.innerHTML = '';
	
	var num = document.getElementById("nv").value;
	
	//x values
	
	const para = document.createElement('paragraph');
	
	para.textContent = "Enter the value of x axis";
	
	inputDiv.appendChild(para)
	
	inputDiv.appendChild(document.createElement('br'));
	inputDiv.appendChild(document.createElement('br'))
	
	var i;
	
	for(i=1;i<=num;i++)
	{
	
		const inputTag = document.createElement('input');
		inputTag.type = 'text';
		inputTag.id=`input${i}`;
				
		const label = document.createElement('label');
		label.htmlFor = `input${i}`;
		label.textContent = `value${i}: `;
	
		
		inputDiv.appendChild(label);
		
		inputDiv.appendChild(inputTag);
		
		inputDiv.appendChild(document.createElement('br'));
		inputDiv.appendChild(document.createElement('br'));
		inputDiv.appendChild(document.createElement('br'));
	}
	
	//y values
		
	const para1 = document.createElement('paragraph');
	
	para1.textContent = "Enter the value of y axis";
	
	inputDiv.appendChild(para1)
	
	inputDiv.appendChild(document.createElement('br'));
	inputDiv.appendChild(document.createElement('br'))
	
	var j;
	
	var num2 = num*2;
	
	var ini = Number(num)+1;
	
	for(j=ini;j<=num2;j++)
	{
		
		const inputTag1 = document.createElement('input');
		inputTag1.type = 'text';
		inputTag1.id=`input${j}`;
				
		const label1 = document.createElement('label');
		label1.htmlFor = `input${j}`;
		label1.textContent = `value${j}: `;
	
		
		inputDiv.appendChild(label1);
		
		inputDiv.appendChild(inputTag1);
		
		inputDiv.appendChild(document.createElement('br'));
		inputDiv.appendChild(document.createElement('br'));
		inputDiv.appendChild(document.createElement('br'));
	}	
	
	const button = document.createElement('button');
	button.textContent="submit";
	button.addEventListener('click',read)
	
	inputDiv.appendChild(button);
	inputDiv.appendChild(document.createElement('br'));
	
}

function read()
{	
	var number = document.getElementById('nv').value;
	
	var number2 = number*2;
	
	var ini2 = Number(number)+1;
	
	var i;
	
	var j;
	
	for(i=1;i<=number;i++)
	{
		const data = document.getElementById(`input${i}`).value;
		x.push(data);
	}
	
	for(j=ini2;j<=number2;j++)
	{
		const data2 = document.getElementById(`input${j}`).value;
		y.push(data2);
	}
	
	const div = document.getElementById("inputdiv");
	
	const subbtn=document.createElement('button');
	subbtn.textContent="plot";
	subbtn.addEventListener('click',plot);
	
	const clr = document.createElement('button');
	clr.textContent = "clear plot";
	clr.addEventListener('click',reload);
	
	div.appendChild(document.createElement('br'));
	
	div.appendChild(subbtn);
	div.appendChild(document.createElement('br'));
	div.appendChild(document.createElement('br'));
	
	div.appendChild(clr);
	div.appendChild(document.createElement('br'));
}

function plot()
{
	
	var xlim = document.getElementById("xl").value;
	var ylim = document.getElementById("yl").value;
	
	xlim=Number(xlim);
	ylim=Number(ylim);

const data = [{x:x,y:y,mode:"lines",marker: {color:"rgba(0,0,255,0.6)"}}];

const layout = {xaxis: {range: [0,xlim],title: "xaxis"},yaxis: {range: [0,ylim], title: "yaxis"}};

Plotly.newPlot("myPlot", data, layout);

}

function reload()
{
	location.reload();
}
