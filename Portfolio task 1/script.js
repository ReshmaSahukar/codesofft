var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=documents.getElementsByClassName("tab-contents");
function opentab( tabname)
{
    for( tablink of tablinks)
        {
            tablink.classList.remove("active-link");
        }
        for( tabcontent of tabcontents)
            {
                tabcontent.classList.remove("active-tab");
            }
            Event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab");
}
 

var sidemenu=document.getElementById("sidemenu");
function openmenu()
{
    sidemenu.style.right="0";
}
function closemenu()
    {
        sidemenu.style.right="-200px";
    }


const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
