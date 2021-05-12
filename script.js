var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault();
    // console.log('hello world');
    var f_name=document.getElementById('f_name');
    var l_name=document.getElementById('l_name');
    var addr1=document.getElementById('addline1');
    var addr2=document.getElementById('addline2');
    var pin=document.getElementById('pin');
    var gender =[];
    var gendervalue='';
    var gender_uncheck=[];
    gender=document.getElementsByName('gender');
    // console.log(gender);    
    for(i=0;i<gender.length;i++)
    {
    if(gender[i].checked)
    gendervalue=gender[i].value;
    }
    var food=[];
    var foodvalue=[];
    var foodcount=0;
    food = document.getElementsByName('food');
    for(i=0;i<food.length;i++)
    {
        if(food[i].checked)
        {
            foodvalue.push(food[i].value);
            foodcount++;
        }
    }
    if(foodcount<2)
    alert('Choose atleast 2 food items');

    var state = document.getElementById('state');
    var country = document.getElementById('country');
    // console.log(state.value, country.value);

    if(foodcount>=2)
    to_display(f_name.value,l_name.value,addr1.value,addr2.value,pin.value,gendervalue,foodvalue,state.value,country.value);
    f_name.value='';
    l_name.value='';
    addr1.value='';
    addr2.value='';
    pin.value='';
    state.value='';
    country.value='';

});
 

var tbody=document.getElementById("tbody");

function to_display(f_name,l_name,addr1,addr2,pin,gender,food,state,country)
{
    // console.log('table values');
    // console.log(f_name,l_name,addr2,addr1,pin,gender);
    var t_row = document.createElement('tr');
    var tdata1 = document.createElement('td');
    var tdata2 = document.createElement('td');
    var tdata3 = document.createElement('td');
    var tdata4 = document.createElement('td');
    var tdata5 = document.createElement('td');
    var tdata6 = document.createElement('td');
    var tdata7 = document.createElement('td');
    var tdata8 = document.createElement('td');

    var str='';
    if(addr1!=''&& addr2!='')
    str=addr1+','+addr2;
    else
    str=addr1;

    tdata1.innerHTML=f_name;
    tdata2.innerHTML=l_name;
    tdata3.innerHTML=str;
    tdata4.innerHTML=pin;
    tdata5.innerHTML=gender;
    tdata6.innerHTML=food;
    tdata7.innerHTML=state;
    tdata8.innerHTML=country;

    t_row.append(tdata1,tdata2,tdata3,tdata4,tdata5,tdata6,tdata7,tdata8);
    tbody.append(t_row);
}
