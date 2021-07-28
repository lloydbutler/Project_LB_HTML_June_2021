

let Employeeinfo = [

    {
        "ninumber": "ZS502747A", "fullname": "Chris P Bacon", "phone": "07659-831024", "address":
            "123 Elliot Hill", "department": "IT"
    },
    {
        "ninumber": "XS130502B", "fullname": "Miles A Head", "phone": "07666-616680", "address":
            "321 Haha Road", "department": "Sales"
    },
    {
        "ninumber": "MY034526D", "fullname": "Rick O'Shea", "phone": "07440-003065", "address":
            "64 Zoo Lane", "department": "HR"
    },
    {
        "ninumber": "AK311470", "fullname": "Robyn Banks", "phone": "07342-472921", "address":
            "324 Langton Ridgeway", "department": "HR"
    },
    {
        "ninumber": "LY682275B", "fullname": "Lorne Mowers", "phone": "07822-821023", "address":
            "234 Julian Market", "department": "IT"
    },
    {
        "ninumber": "BK227215B", "fullname": "Frank N Stein", "phone": "07661-522545", "address":
            "12 Springfield Grange", "department": "Sales"
    },
    {
        "ninumber": "XB363374C", "fullname": "Hedda Hare", "phone": "07563-758264", "address":
            "54 Blackbird Crescent", "department": "IT"
    },
    {
        "ninumber": "MY501327A", "fullname": "Upton O Goode", "phone": "07401-414740", "address":
            "2 St Margarets Drive", "department": "IT"
    },
    {
        "ninumber": "TT405395B", "fullname": "Marius Quick", "phone": "07870-297789", "address":
            "98 Earl Path", "department": "IT"
    },
    {
        "ninumber": "AZ764036A", "fullname": "Max E Mumm", "phone": "07872-642897", "address":
            "233 Lady Smith Avenue", "department": "IT"
    },
    {
        "ninumber": "ES73841C", "fullname": "Yul B Allwright", "phone": "07750-872412",
        "address": "45 Fountains Broadway", "department": "Sales"
    },
    {
        "ninumber": "WX465470A", "fullname": "Lori Driver", "phone": "07773-782275", "address":
            "65 Burlington Lodge", "department": "HR"
    },
    {
        "ninumber": "AK625470D", "fullname": "Shirley U Care", "phone": "07569-060117",
        "address": "97 Holderness Drive", "department": "HR"
    },
    {
        "ninumber": "SW098272B", "fullname": "Felix Cited", "phone": "07394-529507", "address":
            "32 Banningham Court", "department": "Sales"
    },
    {
        "ninumber": "OB043941D", "fullname": "Sandy Beech", "phone": "07958-301691", "address":
            "3 Third Mount", "department": "Sales"
    }
];
let Reftable = document.createElement("table")

function updateRecord(ref,index){

    ref.cells[0].innerHTML="<input id='ninumber' type='text' value='"+Employeeinfo[index].ninumber+"'>";
    ref.cells[1].innerHTML="<input id='fullname' value='"+Employeeinfo[index].fullname+"'>";
    ref.cells[2].innerHTML="<input id='phone' value='"+Employeeinfo[index].phone+"'>";
    ref.cells[3].innerHTML="<input id='address' value='"+Employeeinfo[index].address+"'>";
	ref.cells[4].innerHTML="<select id='department'> "+
        "<option value='HR'> HR Department</option>"+
        "<option value='IT'> IT Department</option>"+
        "<option value='Sales'> Sales Department</option>"+
        "</select>";
	

}
function showRecords() {

	Reftable.innerHTML="";
    let Trow = document.createElement("tr");
    let TD_ninumber = document.createElement("td");
    let TD_fullname = document.createElement("td");
    let TD_phone = document.createElement("td");
    let TD_address = document.createElement("td");
    let TD_department = document.createElement("td");
    let TD_Operations = document.createElement("td");
    
    TD_ninumber.innerHTML = "<b> NI Number </B>";
    TD_fullname.innerHTML = "<b> Full Name </B>";
    TD_phone.innerHTML = "<b> Contact Number </B>";
    TD_address.innerHTML = "<b> Address </B>";
    TD_department.innerHTML = "<b> Department </B>";
    TD_Operations.innerHTML="Operations";
    
    Trow.appendChild(TD_ninumber);
    Trow.appendChild(TD_fullname);
    Trow.appendChild(TD_phone);
    Trow.appendChild(TD_address);
    Trow.appendChild(TD_department);
    Trow.appendChild(TD_Operations);
    
    Reftable.appendChild(Trow);

    for (let i = 0; i < Employeeinfo.length; i++) {

        let Trow = document.createElement("tr");

        let TD_ninumber = document.createElement("td");
        let TD_fullname = document.createElement("td");
        let TD_phone = document.createElement("td");
        let TD_address = document.createElement("td");
        let TD_department = document.createElement("td");
        let TD_Operations= document.createElement("td");

        TD_ninumber.innerHTML = Employeeinfo[i].ninumber;
        TD_fullname.innerHTML = Employeeinfo[i].fullname;
        TD_phone.innerHTML = Employeeinfo[i].phone;
        TD_address.innerHTML = Employeeinfo[i].address;
        TD_department.innerHTML = Employeeinfo[i].department;
       
		let Btn_delete=document.createElement("input");
		Btn_delete.type="button";
		Btn_delete.value="delete";
		
        Btn_delete.onclick=function(){
				
			let choice=confirm("are you sure?");
					
				if (choice==true){
					Employeeinfo.splice(i,1);
					showRecords();
					}
				};
			
		let Btn_update=document.createElement("input");
		Btn_update.type="button";
		Btn_update.value="update";
		Btn_update.onclick=function(){

			if (Btn_update.value=="update"){
                Btn_update.value="Save";
				updateRecord(Trow,i);
			}else{
                let ch=confirm("are you sure?");
                if (ch==true){
                            
                    Employeeinfo[i].ninumber=document.getElementById("ninumber").value;
                    Employeeinfo[i].fullname=document.getElementById("fullname").value;
                    Employeeinfo[i].phone=document.getElementById("phone").value;
                    Employeeinfo[i].address=document.getElementById("address").value;
                    Employeeinfo[i].department=document.getElementById("department").value;

                }
                showRecords();
				Btn_update.value="Update";

			}
		};
			
		TD_Operations.appendChild(Btn_delete);
		TD_Operations.appendChild(Btn_update);

        Trow.appendChild(TD_ninumber);
        Trow.appendChild(TD_fullname);
        Trow.appendChild(TD_phone);
        Trow.appendChild(TD_address);
        Trow.appendChild(TD_department);
        Trow.appendChild(TD_Operations);

        Reftable.appendChild(Trow);
     
    }
    document.body.appendChild(Reftable);

}

function filterrecords(){

    Reftable.innerHTML="";
    let Trow = document.createElement("tr");
    let TD_ninumber = document.createElement("td");
    let TD_fullname = document.createElement("td");
    let TD_phone = document.createElement("td");
    let TD_address = document.createElement("td");
    let TD_department = document.createElement("td");
    let TD_Operations = document.createElement("td");
    
    TD_ninumber.innerHTML = "<b> NI Number </B>";
    TD_fullname.innerHTML = "<b> Full Name </B>";
    TD_phone.innerHTML = "<b> Contact Number </B>";
    TD_address.innerHTML = "<b> Address </B>";
    TD_department.innerHTML = "<b> Department </B>";
    TD_Operations.innerHTML="Operations";
    
    Trow.appendChild(TD_ninumber);
    Trow.appendChild(TD_fullname);
    Trow.appendChild(TD_phone);
    Trow.appendChild(TD_address);
    Trow.appendChild(TD_department);
    Trow.appendChild(TD_Operations);
    
    Reftable.appendChild(Trow);

    for (let i = 0; i < Employeeinfo.length; i++) {

        if(Employeeinfo[i].department==document.getElementById("dept").value){
            
            let Trow = document.createElement("tr");
            
            let TD_ninumber = document.createElement("td");
            let TD_fullname = document.createElement("td");
            let TD_phone = document.createElement("td");
            let TD_address = document.createElement("td");
            let TD_department = document.createElement("td");
            let TD_Operations= document.createElement("td");

            TD_ninumber.innerHTML = Employeeinfo[i].ninumber;
            TD_fullname.innerHTML = Employeeinfo[i].fullname;
            TD_phone.innerHTML = Employeeinfo[i].phone;
            TD_address.innerHTML = Employeeinfo[i].address;
            TD_department.innerHTML = Employeeinfo[i].department;

			let Btn_delete=document.createElement("input");
			Btn_delete.type="button";
			Btn_delete.value="delete";
			Btn_delete.onclick=function(){
				
				let choice=confirm("are you sure?");
					
				if (choice==true){
					Employeeinfo.splice(i,1);
					filterrecords();
				}
			};
			
			let Btn_update=document.createElement("input");
			Btn_update.type="button";
			Btn_update.value="update";
			Btn_update.onclick=function(){

			    if (Btn_update.value=="update"){
                    Btn_update.value="Save";
				    updateRecord(Trow,i);
			    }else{
                    let ch=confirm("are you sure?");
                    if (ch==true){
                            
                        Employeeinfo[i].ninumber=document.getElementById("ninumber").value;
                        Employeeinfo[i].fullname=document.getElementById("fullname").value;
                        Employeeinfo[i].phone=document.getElementById("phone").value;
                        Employeeinfo[i].address=document.getElementById("address").value;
                        Employeeinfo[i].department=document.getElementById("department").value;

                    }
                    filterrecords();
				    Btn_update.value="Update";

			    }
			};
			
			TD_Operations.appendChild(Btn_delete);
			TD_Operations.appendChild(Btn_update);
			
            Trow.appendChild(TD_ninumber);
            Trow.appendChild(TD_fullname);
            Trow.appendChild(TD_phone);
            Trow.appendChild(TD_address);
            Trow.appendChild(TD_department);
            Trow.appendChild(TD_Operations);

            Reftable.appendChild(Trow);
        }
    }
    document.body.appendChild(Reftable);

}
function addRecord(){
    
    let add=document.getElementById("add");
    add.style.visibility="visible";
	
    let Btn_done=document.createElement("input");
            Btn_done.type="button";
			Btn_done.value="Done";
			Btn_done.onclick=function(){
				
				let choice=confirm("are you sure?");
					
				if (choice==true){
					Employeeinfo.push({
                        "ninumber":document.getElementById("inninumber").value,
                        "fullname":document.getElementById("infullname").value,
                        "phone":document.getElementById("inphone").value,
                        "address":document.getElementById("inaddress").value,
                        "department":document.getElementById("indepartment").value,
                    });
                    add.style.visibility="hidden";
                    Btn_done.remove();
                    showRecords();
				}
            }
            add.appendChild(Btn_done);
    
    
    
    
}

function update(t){
	alert(t.innerHTML);
}

