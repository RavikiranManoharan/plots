var x = []

var y = []

var btnRestrict = 0;

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
	
	var nums = Number(num)+1;
	
	for(i=1;i<=nums;i++)
	{
	
		const inputTag = document.createElement('input');
		inputTag.type = 'text';
		inputTag.id=`input${i}`;
				
		const label = document.createElement('label');
		label.htmlFor = `input${i}`;
		label.textContent = `value${i}: `;
		
		if(i==1)
		{
			inputTag.value = 0;
			inputTag.readOnly = true;
		}
		
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
	
	var num2 = (num*2)+2;
	
	console.log(num2)
	
	var ini = Number(num)+2;
	
	console.log(ini)
	
	for(j=ini;j<=num2;j++)
	{
		
		const inputTag1 = document.createElement('input');
		inputTag1.type = 'text';
		inputTag1.id=`input${j}`;
				
		const label1 = document.createElement('label');
		label1.htmlFor = `input${j}`;
		label1.textContent = `value${j}: `;
		
		if(j==ini)
		{
			inputTag1.value = 0;
			inputTag1.readOnly = true;
		}
		
		inputDiv.appendChild(label1);
		
		inputDiv.appendChild(inputTag1);
		
		inputDiv.appendChild(document.createElement('br'));
		inputDiv.appendChild(document.createElement('br'));
		inputDiv.appendChild(document.createElement('br'));
	}	
	
	const button = document.createElement('button');
	button.id="btn1";
	button.textContent="submit";
	button.addEventListener('click',read)
	
	inputDiv.appendChild(button);
	inputDiv.appendChild(document.createElement('br'));
	
}

function read()
{		
	var number = document.getElementById('nv').value;
	
	var number2 = (number*2)+2;
	
	var ini2 = Number(number)+2;
	
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
	
	btnRestrict++;
	
	const div = document.getElementById("inputdiv");
	
	if(btnRestrict==1)
	{
		const subbtn=document.createElement('button');
		subbtn.id="pltbtn";
		subbtn.textContent="plot";
		subbtn.addEventListener('click',plot);
		
		const clr = document.createElement('button');
		clr.id="clrbtn";
		clr.textContent = "clear plot";
		clr.addEventListener('click',reload);
		
		div.appendChild(document.createElement('br'));
		
		div.appendChild(subbtn);
		div.appendChild(document.createElement('br'));
		div.appendChild(document.createElement('br'));
		
		div.appendChild(clr);
		div.appendChild(document.createElement('br'));
	}
}

function plot()
{
	
	var xlim = document.getElementById("xl").value;
	var ylim = document.getElementById("yl").value;
	
	xlim=Number(xlim);
	ylim=Number(ylim);
	
	var xut = document.getElementById("xut").value;
	var yut = document.getElementById("yut").value;

const data = [{x:x,y:y,mode:"lines",marker: {color:"black"}}];

const layout = {xaxis: {range: [0,xlim],title: xut},yaxis: {range: [0,ylim], title: yut}};

Plotly.newPlot("myPlot", data, layout);

}

function reload()
{
	location.reload();
	btnRestrict = 0;
}
