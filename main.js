/*Hi James and or Benny*/

function Unit(name,description,manpower,icon){
    this.name=name;
    this.description=description
    this.manpower=manpower;
    this.icon = "Icon/"+icon+".png"
}

var Units = [
    new Unit("Infantry Squad","2x Squad Command<br>1x RPG-7 AT<br>1x LMG<br>1x Marksman<br>1x Medic<br>2x Rifleman",8,"InfantrySquad"),
    new Unit("IFV Team","1x IFV<br>2x Tank Crewmate",2,"IFV"),
    new Unit("APC Team","1x APC<br>2x Tank Crewmate",2,"APC"),
    new Unit("Attack Helicopter","1x AH-1Z<br>2x Heli Pilot",2,"AttackHeli"),
    new Unit("Transport Helicopter","1x UH-60<br>1x Heli Pilot",1,"TransportHeli"),
    new Unit("Command Team","1x Commander<br>1x Officer<br>1x Radio Operator<br>1x Rifleman",4,"Command"),
    new Unit("Royal Marines Squad","2x Squad Command<br>1x Javelin AT<br>1x LMG<br>1x Marksman<br>1x Medic<br>4x Rifleman",10,"Marines"),
    new Unit("Special Forces Squad","1x Squad Command<br>1x Javelin AT<br>1x LMG<br>1x Marksman<br>1x Medic<br>1x Rifleman",6,"SF"),
    new Unit("Sniper Team","1x Sniper<br>1x Spotter",2,"SniperTeam"),
]
    
function Template(x1){
    finalString="<tr><td>"
    finalString=finalString+"<img src='"+x1.icon+"'></td><td> "+x1.name
    finalString=finalString+"</td><td> Manpower:"+x1.manpower
    finalString=finalString+"</td></tr><tr><td colspan=3>"+x1.description+"</td></tr>"
    return finalString
} 

var count_var = 0

function F_Count(fm){ //Determining the number of units + drawing the form
    count_var = fm.a.value
    document.getElementById("count").innerHTML="Number of units: "+(count_var)

    var SelectionString=""
    for(x=0; x!=count_var; x++){
            SelectionString = SelectionString + "<select id='sel"+x+"'>"
        SelectionString=SelectionString+"<option value='no'>None</option>"
        for(i=0; i!=Units.length; i++){
            SelectionString=SelectionString+"<option value='"+i+"'>"+Units[i].name+"</option>"
        }

        SelectionString = SelectionString + "</select>"   
    }

    document.getElementById("UvU").innerHTML=SelectionString

}

var InitString=""
var ManpowerCount=0

function F_Main(){
    ManpowerCount=0
    InitString="<table>"
    for(x=0; x!=count_var; x++){
        temp=document.getElementById("sel"+x).value
        if(temp!="no"){
            ManpowerCount=ManpowerCount+Units[temp].manpower
            InitString=InitString+Template(Units[temp])
        }
    }
    
    InitString=InitString+"</td></tr><tr><td colspan=3>Total Manpower:"+ManpowerCount+"</td></tr>"
    InitString=InitString+"</table>"
    document.getElementById("Board").innerHTML=InitString
    
}
